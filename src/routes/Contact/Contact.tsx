//@ts-nocheck
import "./Contact.css";
import Email from "../../assets/Email.svg";
import Phone from "../../assets/Phone.svg";
import { useState } from "react";
export default function Contact() {

  const [submitPopupOpen, setSubmitPopupOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        document.getElementsByTagName("body")[0].classList.add("modal-open");
        setIsError(false);
        setSubmitPopupOpen(true);
      })
      .catch((error) => {
        document.getElementsByTagName("body")[0].classList.add("modal-open");
        setIsError(true);
        setSubmitPopupOpen(true);
      });
  }

  const closeModal = () => {
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
    setSubmitPopupOpen(false);
    setIsError(false);
  }


  return (
    <div className="contact-page">
      {/* TODO: rewrite to not state things we cant do. state things we CAN do */}
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

          <form className="contact-form" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div className="name-container">
              <input required className="fname-input" type="text" name="fname" placeholder="First Name" />
              <input required className="lname-input" type="text" name="lname" placeholder="Last Name" />
            </div>
            <input required className="email-input" type="email" name="email" placeholder="example@email.com" />
            <input className="phone-input" type="tel" name="phone-number" placeholder="Phone Number (optional)" />
            <input required className="subject-input" name="subject" type="text" placeholder="Message Subject" />
            <textarea required className="main-input" name="body" placeholder="Message" />
            <button onClick={(ev) => handleSubmit(ev)} className="form-submit" type="submit">SEND</button>
          </form>
        </div>
      </div>

      {
        submitPopupOpen ?
          <div className="submission-modal">
            <div className="submission-popup">
              <h1 className="popup-header">
                {
                  isError
                    ? "Something went wrong..."
                    : "Thank you for reaching out!"}
              </h1>
              <p className="popup-text">
                {
                  isError
                    ? "Something went wrong behind the scenes, and your message was not sent. Please try again, and if this error persists, please reach out to our email directly."
                    : "Your submission has been received! We will get back to you as soon as we can."
                }
              </p>
              <button className="close-modal"
                onClick={() => closeModal()}
              >
                Dismiss
              </button>
            </div>
          </div>
          : <></>
      }
    </div>
  )
}