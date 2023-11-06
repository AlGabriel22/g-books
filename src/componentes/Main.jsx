import React from 'react';

const Main = () => {
  return (
    <>
      <div className='header'>
        <div className='row1'>
          <h1>Una habitación sin libros es como<br /> un cuerpo sin alma.</h1>
        </div>  
        <div className='row2'>
          <h2>Encuentra tu libro</h2>
          <div className="search">
            <input type="text" placeholder='Ingresa el nombre del libro'/>
            <button><i class="bi bi-search"></i></button>
          </div>
          {/* <img src='./img/bg1.png' alt="Libros" /> */}
        </div> 
      </div>
    </>
  );
}

export default Main;