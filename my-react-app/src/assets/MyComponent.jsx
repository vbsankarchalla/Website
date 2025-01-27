import React, {useState} from 'react';


function MyComponent() {

  const [name, setName] = useState('Guest');
  const [quantity, setquantity] = useState(0);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();


  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleNumberChange(event){
    setquantity(event.target.value);
  }
  function handleCommentChange(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }

  function handleShippingChanges(event){
    setShipping(event.target.value);
  }

  return( <div>
    <input value={name} onChange={handleNameChange}/>
    <p> Name : {name}</p>

    <input type="number" value={quantity} onChange={handleNumberChange} />
    <p>Quantity : {quantity} </p>

    <textarea value={comment} placeholder='Enter delivery instructions' onChange={handleCommentChange}/>
    <p>Comment : {comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
      <option value="">Select an option</option>
      <option value="Visa">Visa</option>
      <option value="Mastercard">MasterCard</option>
      <option value="Giftcard">Giftcard</option>
    </select>
    <p>Payment : {payment}</p>

    <lable>
      <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShippingChanges}/> Pick Up
    </lable><br />
    <lable>
      <input type='radio' value="Delivery"
                checked={shipping === "delivery"}
                onChange={handleShippingChanges}/> Delivery
    </lable>
    <p>Shipping : {shipping}</p>
  </div>);

}

export default MyComponent