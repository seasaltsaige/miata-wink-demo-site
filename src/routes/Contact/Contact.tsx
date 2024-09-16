//@ts-nocheck

import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-page">
      <form name="contact" netlify>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Phone <input type="tel" name="phone" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}