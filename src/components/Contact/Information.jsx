import React from "react";

function Information() {
  return (
    <section className="contact-information">
      {/* Call */}
      <article className="contact-information-set">
        <h3>Call Us</h3>

        <address className="contact-information-details">
          <a href="tel:+919327508178">+91 9327508178</a>
          <span>Mon–Fri (9AM – 9PM)</span>
        </address>
      </article>

      {/* Location */}
      <article className="contact-information-set">
        <h3>Reach Us</h3>

        <address className="contact-information-details">
          <a
            href="https://share.google/hOwJGRMCylBDOlPNV"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plot No. G 530, Kishan Gate No. 03, Lodhika. G.I.D.C., Kalawad Road,
            Metoda. 360021, (Rajkot)
          </a>
        </address>
      </article>

      <article className="contact-information-set">
        <h3>Mail Us</h3>

        <address className="contact-information-details">
          <a href="mailto:info@innocrate.com">info@innocrate.com</a>
        </address>
      </article>
    </section>
  );
}

export default Information;
