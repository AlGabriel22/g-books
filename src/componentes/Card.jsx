import React from 'react'

const Card = () => {
  return (
    <>
      <div className="card">
        <img src="./react-book.png" alt="Portada de libro" />
        <div className="bottom">
          <h3 className="title">React Js</h3>
          <p className="amount">&#8377;3290</p>
        </div>
      </div>
    </>

  )
}

export default Card