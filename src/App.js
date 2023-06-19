// ce9pkQKHcCd8IAJ7RHgMPEElBMiruDzwXQniCw56E-Qt


import React, { useState } from "react";
import SearchImages from "./Components/SearchImages/SearchImages";
import DisplayImages from "./Components/DisplayImages/DisplayImages";
import "./App.css"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="app">
      <Header />
      <SearchImages addImages={setImages} />
      <DisplayImages images={images} />
      <Footer />
    </div>
  );
}

export default App;
