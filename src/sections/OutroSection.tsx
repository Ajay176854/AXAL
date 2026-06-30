export default function OutroSection() {
  return (
    <section className="outro-section">
      <div className="outro-section__inner">
        <span className="outro-section__label">Ready to Order?</span>
        <h2 className="outro-section__title">
          Let's build your <br />
          <span className="outro-section__title-accent">packaging line.</span>
        </h2>
        <p className="outro-section__desc">
          From prototyping to full-scale production — our team is ready to
          engineer the perfect container solution for your brand.
        </p>
        <div className="outro-section__actions">
          <a href="https://wa.me/918300149040?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20AXAL%20packaging%20products." target="_blank" rel="noopener noreferrer" className="outro-section__btn outro-section__btn--primary">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
