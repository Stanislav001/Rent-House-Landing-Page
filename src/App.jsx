import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;