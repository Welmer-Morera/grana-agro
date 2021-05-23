import React from 'react'

import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Product from '../Product/Product'
const Section = ({id}) => {

   const wiew=()=>{
       switch (id) {
           case "home":return <Home />;
           case "about": return <About />
           case "contact":return <Contact/>
           case "product": return <Product />

           
           default:
            return <h1>No project match</h1>
       }
   }
    return ( 
        
        <div >
      <div  id={id}>
          {wiew()}
              </div>
    </div>
 
     );
}
 
export default Section;