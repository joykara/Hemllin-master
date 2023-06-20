import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { Footer, Navbar2 } from '../components'
import FormInput from '../components/FormInput'

const ContactUs = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    organization: '',
    title: '',
    subject: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Your name',
      errorMessage: 'NAME is required',
      label: 'NAME *',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Your Email',
      errorMessage: 'EMAIL is required',
      label: 'EMAIL *',
      // pattern: `^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$`,
      required: true,
    },
    {
      id: 3,
      name: 'organization',
      type: 'text',
      placeholder: 'Your Company/School',
      label: 'COMPANY / SCHOOL'
    },
    {
      id: 4,
      name: 'title',
      type: 'text',
      placeholder: 'Title',
      label: 'TITLE'
    },
    {
      id: 5,
      name: 'subject',
      type: 'text',
      placeholder: 'Subject',
      errorMessage: 'SUBJECT is required',
      label: 'SUBJECT',
      required: true,
    },
  ]
  const [question, setQuestion] = useState("Medium")

  const onOptionChange = e => {
    setQuestion(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  console.log(values)

  return (
    <>
    <div className='main-container'>
      <Navbar2 />
        <h2 id='title'>Contact Us</h2>
        <div className="contact-us-container">
          <div className="contact-us-details">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
            <div className="hm-contact-form">
              <form onSubmit={handleSubmit}>
              <div className="contact-us-questions">
                <h4>I HAVE A QUESTION ABOUT:</h4>
                <div className="contact-us-question-options">
                  <div className="contact-us-question-option">
                    <input
                    type="radio"
                    name="question"
                    value="Consulting"
                    id="Consulting"
                    checked={question === "Consulting"}
                    onChange={onOptionChange}
                    />
                    <label htmlFor="Consulting"><p>Consulting</p></label>
                  </div>
                  <div className="contact-us-question-option">
                    <input
                    type="radio"
                    name="question"
                    value="Consulting"
                    id="Consulting"
                    checked={question === "Consulting"}
                    onChange={onOptionChange}
                    />
                    <label htmlFor="Consulting"><p>Coaching</p></label>
                  </div>
                  <div className="contact-us-question-option">
                    <input
                    type="radio"
                    name="question"
                    value="Consulting"
                    id="Consulting"
                    checked={question === "Consulting"}
                    onChange={onOptionChange}
                    />
                    <label htmlFor="Consulting"><p>Book an Appointment</p></label>
                  </div>
                </div>
                </div>

                {inputs.map((input) => (
                  <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <label htmlFor="message">MESSAGE *</label>
                <textarea required></textarea>
                {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange}/> */}
                  <button className='contact-submit-btn'>Submit</button>
              </form>
            </div>
          </div>
          <div className="contact-us-other-details">
            <div className="contact-us-other-content">
              <h4>LOREM IPSUM</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae molestias optio sit, explicabo dolorum impedit iusto quis nam quod officia </p>
            </div>
            <div className="contact-us-other-content">
              <h4>LOREM IPSUM</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae molestias optio sit, explicabo dolorum impedit iusto quis nam quod officia </p>
          </div>
          <div className="contact-us-other-content">
              <h4>LOREM IPSUM</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis beatae molestias optio sit, explicabo dolorum impedit iusto quis nam quod officia </p>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
      
    </>
  )
}

export default ContactUs