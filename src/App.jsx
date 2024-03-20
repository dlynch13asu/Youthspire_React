import Navbar from "./components/Navbar/Navbar";
import Scroller from "./components/Scroller";
import Header from "./components/header/Header";
import "./App.css";
import RankSection from "./components/Marquee/Marquee";
import Roadmap from "./components/roadmap/Roadmap";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div className="header-scroll">
        <Scroller />
        <Navbar />
        <Header />
      </div>
      <Roadmap />
      <RankSection />
      <Form/> 
      <Footer />
    </>
  );
}

export default App;
