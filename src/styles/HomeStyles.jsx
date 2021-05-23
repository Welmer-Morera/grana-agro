import Image from '../img/home5.jpg'
const HomeStyles = () => ({
    imgContainer: {
        height: '100vh',
        width: '100%',
        //position:'relative',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1540px  973px",
        backgroundAttachment: "fixed",
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        color: '#FFFFFF',
        marginLeft: '10px',

    },

    header: {
        opacity: '80%',
        background:'#e2d6ac',
        border: 'black 5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        fontSize: '30px',
        color: '#da7472',
        '&:hover': {
            opacity: '90%',
         },
    },

    h1:{
        textAlign: 'center',
    }
})

export default HomeStyles