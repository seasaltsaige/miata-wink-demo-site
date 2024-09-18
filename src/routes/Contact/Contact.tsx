//@ts-nocheck
import "./Contact.css";
import Email from "../../assets/Email.svg";
import Phone from "../../assets/Phone.svg";
import { useState } from "react";
import { Modal } from "@mui/material";

export default function Contact() {

  const [submitPopupOpen, setSubmitPopupOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsError(false);

        setSubmitPopupOpen(true);
      })
      .catch((error) => {
        setIsError(true);

        setSubmitPopupOpen(true);
      });

    document.getElementsByTagName("body")[0].classList.add("modal-open");
    document.getElementsByClassName("fname-input")[0].value = "";
    document.getElementsByClassName("lname-input")[0].value = "";
    Array.from(form?.children).forEach(c => c.value = "");

  }

  const closeModal = () => {
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
    setSubmitPopupOpen(false);
    setIsError(false);
  }


  return (
    <>
      <div className="contact-page">
        <div className="contact-items">
          <div className="contact-information">
            <div className="contact-info-wrapper">
              <h1 className="question-header">
                Have a question?
              </h1>

              <p className="contact-description-upper">
                We're here to assist you! Whether you have a question about our product or need help with your purchase, we're dedicated to providing the best possible experience. If any issues come up, we'll work quickly to resolve them so you can get back to enjoying your product.
              </p>

              <p className="contact-description-lower">
                As a small business, we personally handle every inquiry with care. While we aim to respond as swiftly as possible, please allow up to two business days for a reply. We appreciate your patience and understanding.
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

            <form id="contact-form" className="contact-form" name="contact" onSubmit={(ev) => { handleSubmit(ev) }}>
              <input type="hidden" name="form-name" value="contact" />
              <div className="name-container">
                <input required className="fname-input" type="text" name="fname" placeholder="First Name" />
                <input required className="lname-input" type="text" name="lname" placeholder="Last Name" />
              </div>
              <input required className="email-input" type="email" name="email" placeholder="example@email.com" />
              <input className="phone-input" type="tel" name="phone-number" placeholder="Phone Number (optional)" />
              <input required className="subject-input" name="subject" type="text" placeholder="Message Subject" />
              <textarea required className="main-input" name="body" placeholder="Message" />
              <button form="contact-form" className="form-submit" type="submit">SEND</button>
            </form>
          </div>



        </div>


        <Modal
          open={submitPopupOpen}
          className="submission-modal"
        >
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
                  : "Your question has been received! We will get back to you as soon as we can."
              }
            </p>
            <button className="close-modal"
              onClick={() => closeModal()}
            >
              Dismiss
            </button>
          </div>
        </Modal>

        {

          // submitPopupOpen ?
          //   <div className="submission-modal">

          //   </div>
          //   : <></>
        }
      </div>



    </>
  )
}