import React, { useState, useRef } from 'react'
// import ReCAPTCHA from "react-google-recaptcha";
import { Footer, Navbar2 } from '../components'
import FormInput from '../components/FormInput'
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_insq4yj', 'template_46j8jos', form.current, 'pzSmAssHG-LfZc60M')
      .then((result) => {
          // show the user a success message
          alert("Message Sent Successfully");
          console.log(result.text);
      }, (error) => {
          // show the user an error
          console.log(error.text);
      });

      e.target.reset();
  }
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
  const [question, setQuestion] = useState("Consulting")

  const onOptionChange = e => {
    setQuestion(e.target.value)
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
              <form onSubmit={handleSubmit} ref={form} action="https://formspree.io/f/mwkyqgyq" method="post" >
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
                      value="Coaching"
                      id="Coaching"
                      checked={question === "Coaching"}
                      onChange={onOptionChange}
                      />
                      <label htmlFor="Coaching"><p>Coaching</p></label>
                    </div>
                    <div className="contact-us-question-option">
                      <input
                      type="radio"
                      name="question"
                      value="Book an Appointment"
                      id="Book an Appointment"
                      checked={question === "Book an Appointment"}
                      onChange={onOptionChange}
                      />
                      <label htmlFor="Book an Appointment"><p>Book an Appointment</p></label>
                    </div>
                  </div>
                </div>

                {inputs.map((input) => (
                  <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <label htmlFor="message">MESSAGE *</label>
                <textarea id='message' name='message' required></textarea>
                {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange}/> */}
                  <button className='contact-submit-btn' type='submit'>Submit</button>
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