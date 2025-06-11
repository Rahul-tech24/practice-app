import { useState } from "react";
import  "./styles.css";

function RandomColour() {

    const [typeOfColour, setTypeOfColour] = useState("hex");
    const [colour, setColour] = useState("#000000");
    const [copied, setCopied] = useState(false); 
    const [history, setHistory] = useState([]);
    
    function updateColour(newColour) {
        setColour(newColour);
      
        setHistory(prev => {
          const updated = [newColour, ...prev];
          return updated.slice(0, 5); // Only keep last 5
        });
      }
      
     
    function handlerandomutily(length) {
       return (Math.floor(Math.random()*length))
   }
    function handleHexColour() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColour = "#";
        for (let i = 0; i < 6; i++){
            hexColour+= hex[handlerandomutily(hex.length)]
        }
        setColour(hexColour);
        updateColour(hexColour);
   }
    function handleRgbColour() {
        let r = handlerandomutily(256);
        let g = handlerandomutily(256);
        let b = handlerandomutily(256);
        let rgbColour = `rgb(${r},${g},${b})`;
        setColour(rgbColour); 
        updateColour(rgbColour);
    }
    function copyToClipboard() {
        navigator.clipboard.writeText(colour).then(() => {
          setCopied(true); // Show "Copied!"
          setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
        });
    }
    

    return (
        <div className="randomcolour"
        style={{
            width: "100vw" ,
            height: "100vh",
            background:colour,
            margin: "0 auto",
           }}>
            <button onClick={()=> setTypeOfColour("hex")} >generate hex colour</button>
            <button onClick={()=> setTypeOfColour("rgb")} >generate rgb colour</button>
            <button onClick={typeOfColour === "hex" ? handleHexColour : handleRgbColour} >generate random colour</button>
            <div className="colourType">
                <h3>{typeOfColour === "hex" ? "Hex colour" : "rgb colour"}</h3>
                <h1>{colour}</h1>
                <button onClick={copyToClipboard}>Copy</button>
                {copied && <p style={{ color: "#fff" }}>Copied!</p>}

            </div>
            <div className="history">
                 <h3>Last 5 Colors</h3>
                 <div className="history-colors">
                       {history.map((c, index) => (
                       <div key={index} className="color-box" style={{ background: c }} title={c}></div>
                   ))}
                  </div>
            </div>

        </div>
    )
    
}
export default RandomColour;