import React from 'react'
import { locations } from '../../../../Data'

const input_classes = 'w-full px-2 p-1 rounded-lg contact_fieldset '
const fieldset_classes = 'm-1  '

// const img = '../../../../../public/assets/images/insideStore1.jpeg'

function submit() {
  let nameField = document.querySelector('#nameField')
  let emailField = document.querySelector('#emailField')
  let phoneField = document.querySelector('#phoneField')
  let messageField = document.querySelector('#messageField')

  if (nameField.value != '' && emailField.value != '' && phoneField.value != '' && messageField.value != '') alert('Your message has been sent!') 
}

export default function Contact() {
  return (
    <div className=" ContactUs_Wrapper ">
      <div className="ContactUs_img"></div>
      <div id="Contact" className="ContactUs_content box shadow-2xl ">
        <h1 className="text-center bg-1 box w-full shadow-md">Contact Us!</h1>
        {/* <span>{"Email us at: " + locations[0].email}</span> */}

        <div class="">
          {/* <form id="contact" action="" method="post" className="box"> */}
          <form id="contact" className="box">
            {/* <h3>Quick Contact</h3> */}
            <h4 className={'m-2'}>Send us a message and we'll reply within 24 hours!</h4>
            <fieldset className={fieldset_classes}>
              <input id='nameField' placeholder="Your Name" type="text" tabindex="1" required autofocus className={input_classes}></input>
            </fieldset>
            <fieldset className={fieldset_classes}>
              <input id='emailField' placeholder="Your Email Address" type="email" tabindex="2" required className={input_classes}></input>
            </fieldset>
            <fieldset className={fieldset_classes}>
              <input id='phoneField' placeholder="Your Phone Number" type="tel" tabindex="3" required className={input_classes}></input>
            </fieldset>
            {/* <fieldset className={fieldset_classes}>
              <input placeholder="Your Web Site starts with http://" type="url" tabindex="4"  className={input_classes}></input>
            </fieldset> */}
            <fieldset className={fieldset_classes}>
              <textarea id='messageField' placeholder="Type your message here...." tabindex="5" required className={input_classes}></textarea>
            </fieldset>
            <fieldset className={fieldset_classes + ''}>
              {/* <button name="submit" type="submit" id="contact-submit" data-submit={() => alert('...Sending')}>Submit</button> */}
              {/* <button onClick={alert('Your message has been sent!')} id="contact-submit" >Submit</button> */}
              <button id="contact-submit" className="box w-full text-center contact-submit rounded-lg py-1 " onClick={submit}>Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}
