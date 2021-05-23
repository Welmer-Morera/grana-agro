const HeaderStyles = () => ({
  root:{
    flexGrow: 1,
  },
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
      },
      navListDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
      },
      navListDisplayFlexGA: {
        display: `flex`,
        justifyContent: 'flexstart'
      },
      linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        //color: `white`,
        display: `flex`,
        fontSize:'25px'
      },
      linkTextGA: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`,
        fontSize:'25px'
      },
      appIntial:{
        background: 'transparent',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        color:'white'

        
    },

    appScroll:{
        background: '#e2d6ac',
        color:'#da7472',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        
    },
})
 
export default HeaderStyles;