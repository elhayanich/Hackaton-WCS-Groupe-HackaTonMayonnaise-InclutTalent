import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Jobs, Formations, JobOffer } from "./pages/index";
import Navbar from "./components/Navbar";

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
        </Routes>
      </Router>
    </main>
  );
};

export default App;
