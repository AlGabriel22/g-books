import React from 'react'

const Modal = () => {
  return (
    <>
      <div className='overlay'>
        <div className="overlay-inner">
          <button className='close'><i class="bi bi-x-lg"></i></button>
          <div className="inner-box">
            <img src="./react-book.png" alt="Portada del libro" />
            <div className="info">
              <h1>React by Example - building modern web applications with React</h1><br />
              <h3>Prathamesh Sonopatki</h3>
              <h4>Packt Publishing Ltd <span>2016-04-21</span></h4><br />
              <a href="#"><button>More</button></a>
            </div>
          </div>
          <h4 className='description'>Knowledge for free... get that job, you aspired Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, officia? Animi, veniam optio libero beatae a culpa impedit suscipit porro adipisci quis. Tenetur tempora ipsa autem porro explicabo rem vel.</h4>
        </div>
      </div>
    </>

  )
}

export default Modal;