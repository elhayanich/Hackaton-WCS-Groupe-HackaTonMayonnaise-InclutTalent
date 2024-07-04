import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Jobs, LogIn, Register, Connect } from "./pages/index";
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
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
