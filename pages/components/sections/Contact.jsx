import React from 'react'
import EmailForm from '../layout/EmailForm'
import Socials from '../layout/Socials'

const Contact = () => {
  return <>
    <div className="contact-container container" id="contact">
      <div className="section-title">Contact</div>
      <Socials />
      <EmailForm />
    </div>
  </>
}

export default Contact