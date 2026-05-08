import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .catch(() => {})

    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__card glass-card reveal reveal-delay-1">
            <div className="contact__icon-wrap">
              <AiOutlineMail />
            </div>
            <h4>Email</h4>
            <p>mucklaihasnain@gmail.com</p>
            <a
              href="mailto:mucklaihasnain@gmail.com"
              onClick={(e) => { e.stopPropagation(); window.open('mailto:mucklaihasnain@gmail.com'); }}
            >
              Send a message &rarr;
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form glass-card reveal reveal-delay-2">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
