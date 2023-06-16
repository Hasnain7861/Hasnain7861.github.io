import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iif9hxh', 'template_kxktp9f', form.current, '9gVKtyFGoF_Dpv153')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>mucklaihasnain@gmail.com</h5>
          <a href="mailto: mucklaihasnain@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <AiOutlineWhatsApp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+ 1 (469) 739-7856</h5>
          <a href="https://wa.me/14697397856" target="_blank">Send a message</a>
        </article>
      </div>

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name= "message" rows="7" placeholder='Your Message' required ></textarea>
      <button type='submit'className='btn btn-primary'>Send Message</button>
    </form>
    </div>
  </section>
  )
}

export default Contact