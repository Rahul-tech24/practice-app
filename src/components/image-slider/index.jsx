import { useEffect, useState } from "react";
import "./syles.css";

function ImageSlider({ url }) {

    const [images, setImages] = useState([])
    const [CurrentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, seterrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json();
            if (data) {
                const imageUrls = data.map((img) => img.urls.regular);
                setImages(imageUrls);
                setLoading(false)
            }

        } catch (e) {
            seterrorMsg(e.message);
            setLoading(false)
                     }
    }
    useEffect(() => {
        if (url !== '') fetchImages(url) 
    }, [url])
    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => {
          setCurrentSlide((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
          );
        }, 3000); // 3000ms = 3 seconds
      
        return () => clearInterval(interval); // Clean up on unmount
      }, [images]);
      

    if (loading) {
        return <div>Loading data ! please wait</div>
    }
    if (errorMsg !== null)
     
        {
            return   <div>Error accoured</div>
            }
            
       
  return (
               
    <div className="imageSlider">
      <h1>Image Slider</h1>
                   {images.length > 0 && (
                               <img
                                 src={images[CurrentSlide]}
                                  alt={`slide-${CurrentSlide}`}
                                  width="500"
                                  className="slideImage"
                                  />
                     )}
    <div className="navigation">
          <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}>⬅ Prev</button>
          <button onClick={() => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>Next ➡</button>
    </div>
    <div className="dots">
        {images.map((_, index) => (
           <span
             key={index}
             className={CurrentSlide === index ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(index)}
            ></span>
           ))}
     </div>
  </div>)
                 
}
export default ImageSlider;
