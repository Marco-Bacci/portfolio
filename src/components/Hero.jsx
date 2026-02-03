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
                Amo il momento in cui un’idea smette di essere solo un pensiero
                e diventa qualcosa di concreto, che funziona e risolve un
                problema reale. Mi concentro sullo sviluppo di applicazioni web
                moderne, pulite e ben strutturate.
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
                src={`${import.meta.env.BASE_URL}foto-cv.png`}
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
