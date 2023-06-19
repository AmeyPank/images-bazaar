import "./DisplayImages.css"


const DisplayImages = ({ images }) => {



     return (
          <div className="card-list">
               {
                    images.map((pic, index) => {

                         return (
                              <div className="card">

                                   <img className="card-image" key={index} src={pic.urls.small} alt={pic.alt_description} />
                                   <div className="card-content">
                                        {/* Additional content can be added here */}
                                   </div>

                              </div>
                         )
                    })
               }
          </div>
     )
}

export default DisplayImages;