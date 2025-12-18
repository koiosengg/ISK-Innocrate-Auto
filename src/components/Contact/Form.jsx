import React from "react";

function Form() {
  return (
    <section className="contact-form">
      <form
        action="https://formspree.io/f/xrezzjkj"
        method="POST"
        className="contact-form-container"
      >
        <div className="contact-form-input">
          <div className="contact-form-fields">
            <div className="contact-form-input-container">
              <label htmlFor="firstName">
                First Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                required
                autoComplete="given-name"
              />
            </div>

            <div className="contact-form-input-container">
              <label htmlFor="lastName">
                Last Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                required
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="email">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="phone">
              Mobile Number <span aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="message">Leave a Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
            ></textarea>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Form;
