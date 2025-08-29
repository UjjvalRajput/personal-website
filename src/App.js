import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </div>
  );
}

export default App;
