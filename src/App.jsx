import "./App.css";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Property from "./components/Property";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header></Header>
      <Feature></Feature>
      <Property></Property>
      <About></About>
      <CallToAction></CallToAction>
      <Faq></Faq>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
