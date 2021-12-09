import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import AvailablePuppies from "../AvailablePuppies/AvailablePuppies";
import Contact from "../Contact/Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/available-puppies" element={<AvailablePuppies />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
