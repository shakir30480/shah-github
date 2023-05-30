import "./App.css";
import { useEffect,useState } from "react";





function App() {
  const[num,setNum]=useState(0)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/0000000').then( (data)=>{
      return data.json();
    }).then( (res)=>{
        console.log(res)
       
    }).catch( (err)=>{
        console.log(err)
    })
  }, [])



  fetch().then( () =>{}).then( ()=>{} ).catch( ()=>{ })
  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={ ()=>setNum(num +1)}>plus</button>
    </div>
  );
}

export default App;
