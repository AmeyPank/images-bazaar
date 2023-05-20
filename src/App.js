// ce9pkQKHcCd8IAJ7RHgMPEElBMiruDzwXQniCw56E-Qt


import React, {useState} from "react";
import SearchImages from "./Components/SearchImages";
import DisplayImages from "./Components/DisplayImages";
import "./App.css"
function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
        <h1>ImagesBazaar</h1>
        <SearchImages addImages ={setImages}/>
        <DisplayImages images={images} />
    </div>
  );
}

export default App;
