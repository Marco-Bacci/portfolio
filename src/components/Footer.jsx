export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row py-4 g-2 align-items-center">
          <div className="col-12 col-md-6">
            <div className="footerText">© {year} Marco. Built with React.</div>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <a className="footerLink" href="#top">
              Torna su
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
