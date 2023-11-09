import React ,{ useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = () => {
  const [search, setSearch] = useState("");
  const[bookData, setBookData]=useState([]);

  const searchBook=(evt) =>{
    if(evt.key === "Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBAl7EZKeMgRkkinzAcyjME88pDGVJPbzw'+'&maxResults=40')
      .then(res=>setBookData(res.data.items))
      .catch(err=>console.log(err))  
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
            onKeyDown={searchBook}/>
            <button><i className="bi bi-search"></i></button>
          </div>
          {/* <img src='./img/bg1.png' alt="Libros" /> */}
        </div> 
      </div>
      <div className="container">
        {
          <Card book={bookData} />
        }
      </div>
    </>
  );
}

export default Main;