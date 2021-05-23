import React from 'react'
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
const Product = () => {
    return ( <div className="App">
    <Container maxWidth="md">
      <h1>Products</h1>
      <h2>Add Side Drawer to Material-UI Navbar</h2>
      <Grid item xs={6} sm={3}>welmer</Grid>
      <Grid item xs={6} sm={3}>welmer</Grid>
      <Grid item xs={6} sm={3}>welmer</Grid>
    </Container>
  </div> );
}
 
export default Product;