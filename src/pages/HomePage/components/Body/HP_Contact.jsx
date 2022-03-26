const input_classes = 'w-full px-2 p-1 rounded-lg contact_fieldset '
const fieldset_classes = 'm-1  '

const emailREGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const phoneNumberREGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

function submit() {
  let nameField = document.querySelector('#nameField')
  let emailField = document.querySelector('#emailField')
  let phoneField = document.querySelector('#phoneField')
  let messageField = document.querySelector('#messageField')

  if(phoneField.value.toString().match(phoneNumberREGEX) == null) return alert('Please enter a valid phone number')
  if(emailField.value.match(emailREGEX) == null) return alert('Please enter a valid email address') 
  // phoneField.value.toString().match(phoneNumberREGEX) == null && (() => {alert('Please enter a valid phone number')})
  // emailField.value.match(emailREGEX) == null && (() => {alert('Please enter a valid email address')})
  
  if (
    phoneField.value.toString().match(phoneNumberREGEX) != null && 
    emailField.value.match(emailREGEX) != null && 
    nameField.value != '' && 
    emailField.value != '' && 
    phoneField.value != '' && 
    messageField.value != '' 
    ) alert('Your message has been sent!') 
}

export default function Contact() {
  return (
    <div className=" ContactUs_Wrapper box">
      <div className="ContactUs_img"></div>
      <div id="Contact" className="ContactUs_content box shadow-2xl p-2 md:m-0 m-2 rounded-lg">
        <h1 className="text-center bg-1 box w-full shadow-md">Contact Us!</h1>

        <div class="">
          <form id="contact" className="box">
            <h4 className={'m-2 mx-4 text-sm '}>Send us a message and we'll reply within 24 hours!</h4>
            <fieldset className={fieldset_classes}>
              <input id='nameField' placeholder="Your Name" type="text" tabindex="1" required autofocus className={input_classes}></input>
            </fieldset>
            <fieldset className={fieldset_classes}>
              <input id='emailField' placeholder="Your Email Address" type="email" tabindex="2" required className={input_classes}></input>
            </fieldset>
            <fieldset className={fieldset_classes}>
              <input id='phoneField' placeholder="Your Phone Number" type="tel" tabindex="3" required className={input_classes}></input>
            </fieldset>
            <fieldset className={fieldset_classes}>
              <textarea id='messageField' placeholder="Type your message here...." tabindex="5" required className={input_classes}></textarea>
            </fieldset>
            <fieldset className={fieldset_classes + ''}>
              <button id="contact-submit" className="box w-full text-center contact-submit rounded-lg py-1 shadow-lg" onClick={submit}>Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}
