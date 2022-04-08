import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App__header">
          <div className="App__header--logo">[ˈdɪkʃ(ə)n(ə)ri]</div>
          <h1 className="App__header--subtitle">
            online dictionary and synonym application
          </h1>
        </header>
        <footer className="App__footer">
          <div className="App__footer--IPA">
            <strong>
              ˈkəʊdɪd baɪ eɪʧ ɑː taʎ(ː)aˈrini, ˈəʊpən-sɔːs ɒn ˈgɪthɅb ænd
              ˈhəʊstɪd baɪ ˈnetlɪfaɪ
            </strong>
          </div>
          <div className="App__footer--English">
            <small>
              Coded by H R Tagliarini, open-sourced on GitHub and hosted by
              Netlify
            </small>
          </div>
          <div>
            <a
              href="https://htcodes.netlify.app/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img className="App__footer--logo" src={logo} alt="HTCode logo" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
