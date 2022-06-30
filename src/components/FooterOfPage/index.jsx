import React from 'react'
import FooterCopyRight from './FooterCopyRight'
import FooterInformation from './FooterInformation'

export default function FooterOfPage() {
  return (
    <>
      <div className="contact-info ">
        <div className="wide grid">
          <FooterInformation />
          <FooterCopyRight />
        </div>
      </div>
    </>
  )
}
