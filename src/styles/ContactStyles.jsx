import  Image from '../img/home2.jpg'
const ContactStyles= () => ({
  

    container:{
      display:'flex',
        justifyContent: 'flexstart',
    },
    textOne:{
        fontSize: '25px',
        color: '#0E2431',
        marginTop:'10px',
      },
    textTwo:{
        color: '#0E2431',
        fontSize: '75px',
        fontWeight: '600',
        marginTop:'20px',
        marginLeft: '10px',
        
        
      },
      containerTextS:{
     
        marginLeft:'10px',
        marginTop:'20%',
        borderRadius:'5px',
       
      },
    imgContainer: {
      height: '100vh',
     // width: '100%',
      backgroundImage: `url(${Image})`,
      //backgroundRepeat: "no-repeat",
			backgroundPosition: "right",
			backgroundSize: "960px  960px",
			backgroundAttachment: "fixed",
  }, 
  containerText:{
    alignItems: 'center',
    //background: '#ABEBC6',
    borderRadius:'10px'

  },
  button:{
    marginTop:'10px',
    fontSize: '25px',
    background:' #4070f4',
    color: '#fff',
    textTransform:'none',
    cursor: 'pointer',
  border: '2px solid transparent',
  transition: 'all 0.4s ease'
  }


})
 
export default ContactStyles