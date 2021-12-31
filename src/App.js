import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/UI/Footer";
import Navigation from "./components/UI/Navigation";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-full h-full bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navigation></Navigation>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
