import './App.css';
import Nav from "./Nav";
import Hero from "./Hero";
import Portfolio from  "./Portfolio"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
          <Nav />
      </div>
          <main>
            <div>
            <Hero />
            </div>
            <div>
            <Portfolio />
            </div>
          </main>
        <footer className="App-footer">
          Coded by Fanny N
        </footer>
      </div>
  );
}

