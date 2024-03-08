import Navbar from "./components/Navbar/Navbar";
import Scroller from "./components/Scroller";
import Header from "./components/header/Header";
import "./App.css";
import RankSection from "./components/Marquee/Marquee";
// import Roadmap from "./components/roadmap/Roadmap";
function App() {
  return (
    <>
    <div className="header-scroll">
      <Scroller />
      <Navbar />
      <Header />
    </div>
      <RankSection />
    </>
  );
}

export default App;
