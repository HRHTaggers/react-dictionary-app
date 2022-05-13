import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App__header">
          <div className="row">
            <div className="col-sm-8">
              <div className="App__header--logo">[ˈdɪkʃ(ə)n(ə)ri]</div>
              <h1 className="App__header--subtitle">
                online dictionary and synonym application
              </h1>
            </div>
            <div className="App__header--instruction col-sm-4">
              <div className="App__header--instruction-phonetic">
                <strong>ˈɛntə wɜːd bɪˈləʊ</strong>
              </div>
              Enter word below
            </div>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className="App__footer">
          <div className="App__footer--IPA">
            <strong>
              ˈkəʊdɪd baɪ eɪʧ ɑː taʎ(ː)aˈrini, ˈəʊpən-sɔːs ɒn ˈgɪthɅb ænd
              ˈhəʊstɪd baɪ ˈnetlɪfaɪ
            </strong>
          </div>
          <div className="App__footer--English">
            <small>
              Coded by{" "}
              <a
                className="App__footer--English-link"
                href="https://htcodes.netlify.app"
                target="blank"
                rel="noopener noreferrer"
              >
                H R Tagliarini
              </a>
              , open-sourced on{" "}
              <a
                className="App__footer--English-link"
                href="/"
                target="blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              and hosted by{" "}
              <a
                className="App__footer--English-link"
                href="https://magical-seahorse-96cf49.netlify.app/"
                target="blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </small>
          </div>
          <div>
            <a
              href="https://htcoding.netlify.app/"
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
