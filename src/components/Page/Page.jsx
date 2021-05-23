import React,{Fragment} from 'react'
import Section from './Section.jsx'

const Page = () => {
    return ( 
    <Fragment>
          <Section 
            title="Home"
            id="home"
            />
             <Section 
            title="About"
            id="about"
            />
            <Section 
            title="Skills"
            id="product"
            />
            <Section 
            title="Contact"
            id="contact"
            />



    </Fragment>

     );
}
 
export default Page;