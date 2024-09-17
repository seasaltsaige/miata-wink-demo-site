//@ts-nocheck
import "./Contact.css";
import Email from "../../assets/Email.svg";
import Phone from "../../assets/Phone.svg";
export default function Contact() {

  return (
    <div className="contact-page">
      <div className="contact-items">
        <div className="contact-information">
          <div className="contact-info-wrapper">
            <h1 className="question-header">
              Have a question?
            </h1>

            <p className="contact-description-upper">
              We're here to assist you! Whether you're experiencing an issue with your purchase or looking to inquire about buying a product, we're committed to making sure you have the best experience with our product(s). If any problems arise, we'll work to resolve them as quickly as possible.
            </p>

            <p className="contact-description-lower">
              As a small, individually run business, we don't offer live chat and may not be able to respond the same day. Please allow up to 2 business days for a response. We do not check emails or phone messages on weekends or national holidays.
            </p>

            <div className="contact-info-items">
              <div className="email-info contact-item">
                <Email />
                <a href="mailto:miatawinktech@gmail.com">miatawinktech@gmail.com</a>
              </div>
              <div className="phone-info contact-item ">
                <Phone />
                <a href="tel:8056995661">(805) 699-5661</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <h2 className="contact-us-header">Contact Us</h2>

          <form method="post" className="contact-form" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div className="name-container">
              <input required className="fname-input" type="text" name="fname" placeholder="First Name" />
              <input required className="lname-input" type="text" name="lname" placeholder="Last Name" />
            </div>
            <input required className="email-input" type="email" name="email" placeholder="example@email.com" />
            <input className="phone-input" type="tel" name="phone-number" placeholder="Phone Number (optional)" />
            <input required className="subject-input" name="subject" type="text" placeholder="Message Subject" />
            <textarea required className="main-input" name="body" placeholder="Message" />
            <button className="form-submit" type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  )
}