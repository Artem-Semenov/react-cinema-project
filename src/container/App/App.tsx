import Header from "container/Header/Header";
import "container/cssZero.css";
import Footer from "container/Footer/Footer";

import Home from "pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import SchedulePage from "pages/SchedulePage/SchedulePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schedule" element={<SchedulePage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
