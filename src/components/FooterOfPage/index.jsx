import React from 'react'
import FooterEmail from './FooterEmail'
import FooterInformation from './FooterInformation'

export default function FooterOfPage() {
  return (
    <div className="wide grid">
      <div className="footer-page">
        <FooterEmail />
        <FooterInformation />
      </div>
    </div>
  )
}
