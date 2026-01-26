export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-12 col-md-6">
            <a className="brand" href="#top" aria-label="Home">
              <span className="brandMark" />
              <span className="brandText fs-5 fw-bold">Marco</span>
              <span className="brandSub">Web Developer</span>
            </a>
          </div>

          <div className="col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-md-end">
            <nav className="navLinks">
              <a href="#projects">Progetti</a>
              <a href="#contact">Contatti</a>
              <a
                href="https://github.com/Marco-Bacci"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
