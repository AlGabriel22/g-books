import React ,{ useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = () => {
  const [search, setSearch] = useState("");
  
  const searchBook=(evt) =>{
    if(evt.key === "Enter"){
      console.log("hello");
    }
  }

  return (
    <>
      <div className='header'>
        <div className='row1'>
          <h1>Una habitación sin libros es como<br /> un cuerpo sin alma.</h1>
        </div>  
        <div className='row2'>
          <h2>Encuentra tu libro</h2>
          <div className="search">
            <input type="text" placeholder='Ingresa el nombre del libro'
            value = {search} onChange={e => setSearch(e.target.value)}
            onKeyPress={searchBook}/>
            <button><i class="bi bi-search"></i></button>
          </div>
          {/* <img src='./img/bg1.png' alt="Libros" /> */}
        </div> 
      </div>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Main;