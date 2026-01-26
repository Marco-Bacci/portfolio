export default function Hero() {
  return (
    <section id="top" className="section">
      <div className="container">
        <div className="heroCard">
          <div className="heroGrid">
            {/* LEFT */}
            <div className="heroContent">
              <h1 className="title">Marco Bacci</h1>
              <p className="lead">
                Sono uno sviluppatore web junior con formazione full stack (600
                ore) presso Boolean, residente a Torino. Ho vissuto per più di
                dieci anni tra Regno Unito e Spagna, un’esperienza che mi ha
                permesso di sviluppare una forte capacità di adattamento. Mi
                concentro sullo sviluppo di applicazioni web moderne, pulite e
                ben strutturate.
              </p>

              <div className="heroCtas">
                <a className="btnPrimary" href="#projects">
                  Vedi progetti
                </a>
                <a className="btnGhost" href="#contact">
                  Contattami
                </a>
              </div>

              <div className="chips">
                <span className="chip">React</span>
                <span className="chip">JavaScript</span>
                <span className="chip">HTML/CSS</span>
                <span className="chip">Bootstrap</span>
                <span className="chip">Node.js</span>
                <span className="chip">Express</span>
                <span className="chip">MySQL</span>
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <img
                src="/foto-cv.png"
                alt="Foto di Marco"
                className="heroPhoto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
