import React from 'react'
import './body.css'
export default function Body() {
  return (
    <>
      <div className="hero">
        <div className="words">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.CHECK OUT ALL OUR NEW ARRIVALS WITH GREATS DISCOUNTS </p>
          <div className="option">
            <button>Shop now</button>
            <button>Category</button>
          </div>
          <div className="available">
            <p>Also Available On:</p>
            <div className="links">
              <a className="flipkart" href='https://www.flipkart.in/' target="_blank"></a>
              <a className="amazon" href='https://www.amazon.in/' target="_blank"></a>
            </div>
          </div>
        </div>
        <div className="shoe-img"></div>
      </div>
    </>
  )
}


