import React from 'react'
import { Zoom, useScrollTrigger } from "@material-ui/core";

const styles = {
    position: `fixed`,
    bottom: `50px`,
    right: `100px`,
    zIndex: `99`
  }
const BackToTop = ({children}) => {
    const trigger =useScrollTrigger()
    const handleClick =e=>{
        const anchor= (e.target.ownerDocument || document).querySelector("#back-to-top-anchor")
        if(anchor){
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    
        }
    }

    
    return ( <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" style={styles}>
          {children}
        </div>
      </Zoom> );
}
 
export default BackToTop;