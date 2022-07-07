import React from 'react'

const SmokeAnimation = () => {
  return (
    <>
      <div className="ag-smoke-block">
        <picture>
          <source
            srcset="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-pink.webp"
            type="image/webp"
          />
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-pink.png"
            alt="smoke-pink"
            className="ag-smoke_img ag-smoke_img__left"
            width="1920"
            height="1080"
          />
        </picture>
        <picture>
          <source
            srcset="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.webp"
            type="image/webp"
          />
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.png"
            alt="smoke-blue"
            className="ag-smoke_img ag-smoke_img__right"
            width="1920"
            height="1080"
          />
        </picture>
      </div>
    </>
  )
}

export default SmokeAnimation
