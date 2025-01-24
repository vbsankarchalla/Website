import PropTypes from 'prop-types';

function Lists(props){
  // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical
  // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
  // fruits.sort((a,b)=> a.calories - b.calories); // Calories
  // fruits.sort((a,b)=> b.calories - a.calories); // Reverse Calories
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

  const itemList = props.items;
  const category = props.category;
  const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name} : &nbsp;
                                                <b>{item.calories}</b></li>);

  return(
    <>
    <h2 className="list-category">{category}</h2>
    <ol className="list-items">{listItems}</ol>
    </>  
  );
}
Lists.propTypes = {
  category : PropTypes.string,
  items : PropTypes.arrayOf(PropTypes.shape({ id : PropTypes.number,
                                              name  : PropTypes.string,
                                              calories : PropTypes.number })),
}

Lists.defaultProps = {
  category : "Category",
  items : [],
}

export default Lists