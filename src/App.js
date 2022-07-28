import "./App.css";
import Header from "./Header";
import Current from "./Current";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Header />
          <Current />
        </div>
        <Footer />
      </div>
    </div>
  );
}
