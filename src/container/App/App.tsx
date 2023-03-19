import Header from "container/Header/Header";
import "container/cssZero.css";
import Footer from "container/Footer/Footer";
import PageScrollIndicator from "components/PageScrollIndicator/PageScrollIndicator";
import Home from "pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import SchedulePage from "pages/SchedulePage/SchedulePage";
import FilmPage from "pages/FilmPage/FilmPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schedule" element={<SchedulePage />}></Route>
        <Route path="/for-kids" element={<SchedulePage />}></Route>
        <Route path="/3d" element={<SchedulePage />}></Route>
        <Route path="/game-center" element={<SchedulePage />}></Route>
        <Route path="/burger-city" element={<SchedulePage />}></Route>
        <Route path="/contacts" element={<SchedulePage />}></Route>
        <Route path="/schedule/:id" element={<FilmPage />}></Route>
      </Routes>
      <Footer />
      <PageScrollIndicator />
    </>
  );
}

export default App;
