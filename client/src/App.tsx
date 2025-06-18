// Components 
import Footer from "./components/Footer";
import Header from "./components/Header";
// Pages
import AboutUsPage from "./pages/AboutUsPage";
import HistoryPage from "./pages/HistroyPage";
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramsPage";
// Routes 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/programs" element={<ProgramPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/competition" element={<ProgramPage />} />
        </Routes> 
      
      <Footer />
    </Router>
  )
}

export default App
