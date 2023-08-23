import ListGroup from "./components/ListGroup";
import Alerts from "./components/Alerts";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Music from "./pages/Music";
import Merch from "./pages/Merch";
import "./App.css"; 


function App() {
  const items = ["About", "Inspirations", "Music", "Merch"]; 
  const handleSelectItem = (item: string) => {
    console.log(item); 
  }
  
  return (
  <div>
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/inspiration" element={<Inspiration/>} /> 
          <Route path="/music" element={<Music/>} /> 
          <Route path="/merch" element={<Merch/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;