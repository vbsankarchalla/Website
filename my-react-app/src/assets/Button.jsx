

function Button(){
  let count = 0;


  const handleClick = (name) => {
    count += 1;
    if(count <= 3) {
      console.log(`${name} you clicked me ${count} time's`);
    } else {
      console.log(`${name} Stop clicking me!`);
    }
  };


  return (
    <button onClick={() => handleClick('Bro')} className="button">
      Click me 🙂
    </button>
  );
}

export default Button