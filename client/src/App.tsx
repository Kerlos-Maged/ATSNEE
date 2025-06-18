// Components 
import Footer from "./components/Footer";
import Header from "./components/Header";
// Pages
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
// Routes 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          {/* Add other routes here as needed */}
          {/* <Route path="/contact" element={<AboutUsPage />} />
          <Route path="/competition" element={<AboutUsPage />} />
          <Route path="/pfyp" element={<AboutUsPage />} />
          <Route path="/history" element={<AboutUsPage />} />
          <Route path="/events" element={<AboutUsPage />} />
          <Route path="/team" element={<AboutUsPage />} />
          <Route path="/faq" element={<AboutUsPage />} /> */}
        </Routes> 
      
      <Footer />
    </Router>
  )
}

export default App
