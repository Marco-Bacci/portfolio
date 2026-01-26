export default function Contact() {
  return (
    <section id="contact" className="section sectionAlt">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="cardShell">
              <h2 className="sectionTitle text-center">Contatti</h2>
              <div className="contactList">
                <a className="contactItem" href="mailto:marcobacci94@gmail.com">
                  <span className="contactLabel">Email</span>
                  <span className="contactValue">marcobacci94@gmail.com</span>
                </a>

                <a
                  className="contactItem"
                  href="https://www.linkedin.com/in/marco-bacci-02786614a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactLabel">LinkedIn</span>
                  <span className="contactValue">Marco Bacci</span>
                </a>

                <a
                  className="contactItem"
                  href="https://github.com/Marco-Bacci"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactLabel">GitHub</span>
                  <span className="contactValue">@Marco-Bacci</span>
                </a>
                <a className="contactItem" href="/marco-bacci-cv.pdf" download>
                  <span className="contactLabel">Curriculum</span>
                  <span className="contactValue">Scarica CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
