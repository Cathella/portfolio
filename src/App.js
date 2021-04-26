import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <section className="col-lg-6 mx-auto">
          <nav className="d-flex justify-content-center py-4 border-bottom">
            <a href="#" className="me-4 btn border rounded-pill px-4">
              Home
            </a>
            <a href="#" className="me-4 btn border rounded-pill px-4">
              About
            </a>
            <a href="#" className="btn border rounded-pill px-4">
              Projects
            </a>
          </nav>

          <main className="text-center mt-5">
            <img
              src="https://cathella.github.io/img/pp.png"
              alt=""
              className="rounded-pill mb-4 prof"
            />
            <p className="text-uppercase fw-bold fs-2 mo-space mb-5">
              Nakitto Catherine
            </p>
            <p className="text-uppercase fs-5 text-muted fw-bold">
              Full Sta<span className="border-top pt-4">ck De</span>veloper
            </p>
            <p className="text-muted">(Ruby on Rails | ReactJS)</p>
          </main>

          <footer className="border-top py-4 mt-5">
            <small className="d-flex justify-content-center">
              <a
                href="#"
                className="no-decoration me-4 text-muted text-uppercase"
              >
                Github
              </a>
              <a
                href="#"
                className="no-decoration me-4 text-muted text-uppercase"
              >
                Twitter
              </a>
              <a href="#" className="no-decoration text-muted text-uppercase">
                LinkedIn
              </a>
            </small>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default App;
