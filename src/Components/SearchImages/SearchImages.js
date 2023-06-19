import React, { useEffect, useState } from 'react';
import "./SearchImages.css"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const SearchImages = ({ addImages }) => {
  const [searchTerm, setSearchTerm] = useState("Nature");


  console.log("Search Term", searchTerm)


  //   console.log("Access Key",process.env.REACT_APP_ACCESS_KEY)

  useEffect(() => {
    getImages()
  }, [])

  function getImages() {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: process.env.REACT_APP_ACCESS_KEY,
          query: searchTerm,
        },
        mode: 'cors', // Set the CORS mode
      })
      .then((response) => addImages(response.data.results))
      .catch((error) => console.log(error));
  }
  //   function getImages1(){
  //       fetch("https://api.unsplash.com/search/photos", {
  //         params: {
  //             client_id : process.env.REACT_APP_ACCESS_KEY,
  //             query : searchTerm
  //          }
  //       })

  //       .then(response => response.json())
  //      .then(data => console.log(data.results))
  //      .catch(error => console.log(error))
  //   }


  function reset() {
    setSearchTerm("")
    addImages([])
  }
  function handleSearchButton() {
    if (searchTerm.trim() === '') {
      // Input is empty, perform validation or show error message
      toast.warning('Input is empty. Please enter a search term.', {
        theme: "colored",
      }
);
      // You can display an error message or perform any other action as needed
    } else {
      // Input is not empty, proceed with search
      getImages();
      setSearchTerm("")
    }
  }


  return (
    <div className="main">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Images"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="search-input"
        />
        <button onClick={getImages} onClick={handleSearchButton} className="search-button">Search</button>
        <button onClick={reset} className="reset-button">Reset</button>
      </div>
      <ToastContainer />
    </div>

  )
}

export default SearchImages;