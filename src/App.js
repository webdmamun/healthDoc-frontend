import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Login/Registration";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
