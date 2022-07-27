import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Header />
          <h1>Weather App</h1>
          <Footer />
        </div>
      </div>
    </div>
  );
}
