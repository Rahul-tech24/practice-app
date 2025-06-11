
import  "./styles.css";
import { useState } from "react";
import  data  from "./data";
 function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        
        setSelected(getCurrentId===selected ? null : getCurrentId );
     }
     function handleMultiSelection(getCurrentId) {
        const isAlreadyOpen = multiple.includes(getCurrentId);
    
        if (isAlreadyOpen) {
          // Remove from list
          setMultiple(prev => prev.filter(id => id !== getCurrentId));
        } else {
          // Add to list
          setMultiple(prev => [...prev, getCurrentId]);
        }
      }
    
     

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} >
            {enableMultiSelection ? "Switch to Single Selection" : "Enable Multi Selection"}
            </button>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div key={dataItem.id} className="item">
                            <div onClick={enableMultiSelection ?  ()=>handleMultiSelection(dataItem.id) : ()=> handleSingleSelection(dataItem.id) } className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                               
                            </div>
                            {(enableMultiSelection
                                ? multiple.includes(dataItem.id)
                                   : selected === dataItem.id) && (
                                        <div className="content">{dataItem.answer}</div>
                      )}  

                        </div> )
                     : <div>No data found</div>
               }
            </div>
        </div>
        
       )
};
export default Accordion;

