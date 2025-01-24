import Lists from "./assets/Lists";


function App() {
  const fruits = [
    {id : 1,name :"apple", calories : 95},
    {id : 2,name :"banana", calories : 45},
    {id : 3,name :"orenge", calories : 105},
    {id : 4,name :"coconut", calories : 159},
    {id : 5,name :"pineapple", calories : 37}
   ]; 
   const vegitables = [
    {id : 1,name :"potatoes", calories : 110},
    {id : 2,name :"calery", calories : 15},
    {id : 3,name :"carrots", calories : 25},
    {id : 4,name :"corn", calories : 63},
    {id : 5,name :"broccoli", calories : 50}
   ];




  return(
    <>
    {fruits.length > 0 ? <Lists items={fruits} category="Fruits"/> : null}
    {vegitables.length > 0 ? <Lists items={vegitables} category="vegitables"/> : null}
    
    </>
  );
}

export default App
