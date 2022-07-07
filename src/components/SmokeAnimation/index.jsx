import React from 'react'
import './style.scss'

const SmokeAnimation = () => {
  return (
    <>
      <div className="ag-smoke-block-container">
        <div className="ag-smoke-block">
          <picture>
            <source
              srcSet="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.webp"
              type="image/webp"
            />
            <img
              src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.png"
              alt="smoke-blue"
              className="ag-smoke_img"
              width="1920"
              height="1080"
            />
          </picture>
        </div>
      </div>
    </>
  )
}

export default SmokeAnimation
