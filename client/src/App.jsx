import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Home, About, Jobs, Formations, JobOffer } from "./pages/index";
=======
import { Home, About, Jobs, Formations, JobOffer, Blog } from "./pages/index";
>>>>>>> 4f2029a984914763ab8693f4eee2d115ba5912e3
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/formation" element={<Formations />} />
          <Route path="/joboffer" element={<JobOffer />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
