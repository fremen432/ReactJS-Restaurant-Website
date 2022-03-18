import React from 'react'
// import locations from '../../../../Data'
import { locations } from '../../../../Data'
// const locations = data.locations;

const input_classes = 'w-full'
const fieldset_classes = 'my-1'

export default function Contact() {
  return (
    <div id="Contact" className="Contact flex items-center flex-col">
      <h1 className="text-center">Contact Us</h1>
      <span>Email us at: {locations[0].email}</span>

      <div class="container">
        <form id="contact" action="" method="post" className="box">
          {/* <h3>Quick Contact</h3> */}
          <h4>Send us a message we'll reply with in 24 hours!</h4>
          <fieldset className={fieldset_classes}>
            <input placeholder="Your name" type="text" tabindex="1" required autofocus className={input_classes}></input>
          </fieldset>
          <fieldset className={fieldset_classes}>
            <input placeholder="Your Email Address" type="email" tabindex="2" required className={input_classes}></input>
          </fieldset>
          <fieldset className={fieldset_classes}>
            <input placeholder="Your Phone Number" type="tel" tabindex="3" required className={input_classes}></input>
          </fieldset>
          {/* <fieldset className={fieldset_classes}>
            <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required className={input_classes}></input>
          </fieldset> */}
          <fieldset className={fieldset_classes}>
            <textarea placeholder="Type your Message Here...." tabindex="5" required className={input_classes}></textarea>
          </fieldset>
          <fieldset className={fieldset_classes}>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>

  )
}
