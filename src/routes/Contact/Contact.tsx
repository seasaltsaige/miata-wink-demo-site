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
              We are here to help, whether you have an issue with a product, or you want to reach out to contact us about purchasing something. We want you to have the best experience possible with our product(s) and for any potential problems to get resolved as quickly as possible.
            </p>

            <p className="contact-description-lower">
              As an individually run business, we do not have any live chat, and we can't promise that we get back to you within the day. Please allow up to 2 business days for a response. We do not check emails/phone calls on the weekend or national holidays.
            </p>

            <div className="contact-info-items">
              <div className="email-info contact-item">
                <Email />
                <a href="mailto:miatawinktech@gmail.com">miatawinktech@gmail.com</a>
              </div>
              <div className="phone-info contact-item">
                <Phone />
                <a href="tel:1111111111">(111) 111-1111</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <h2 className="contact-us-header">Contact Us</h2>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>

          {/* <form method="post" className="contact-form" name="contact-form" netlify>

            <input type="hidden" name="form-name" value="contact-form" />
            <p>
              <input required className="fname-input" type="text" name="fname" placeholder="First Name" />
            </p>
            <p>
              <input required className="lname-input" type="text" name="lname" placeholder="Last Name" />
            </p>

            <p>
              <input required className="email-input" type="email" name="email" placeholder="example@email.com" />
            </p>
            <p >
              <input className="phone-input" type="tel" placeholder="Phone Number (optional)" />
            </p>

            <p >
              <input required className="subject-input" type="text" placeholder="Message Subject" />
            </p >
            <p>
              <textarea required className="main-input" name="body" placeholder="Message" />
            </p>
            <p>
              <button className="form-submit" type="submit">SEND</button>
            </p>
          </form> */}
        </div>
      </div>
    </div>
  )
}