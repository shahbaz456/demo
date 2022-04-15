import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Services from "./Container/Service";
import Home from "./Container/Home";
import About from "./Container/about";
import Contact from "./Container/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
