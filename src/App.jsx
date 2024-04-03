import "./App.css";
import Footer from "./Components/Footer/Footer";
import Mentores from './Components/Mentores'
import Forms from "./Components/Form/Form";
import Missao from "./Components/Missão/Missao";

function App() {
  return (
    <>
      <Missao />
      <Mentores/>
      <Forms />
      <Footer />
    </>
  );
}

export default App;
