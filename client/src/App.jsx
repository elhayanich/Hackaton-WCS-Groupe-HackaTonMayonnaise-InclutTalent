import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  About,
  Jobs,
  Formations,
  JobOffer,
  Blog,
  Profil,
} from "./pages/index";
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
          <Route path="/profil" element={<Profil />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
