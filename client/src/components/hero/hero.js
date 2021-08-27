import React from 'react';
import { Header } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'


const HeaderExamplePage = () => (
    <div style={{margin:"auto", paddingRight:"10px"}}>
      <Header as='h2' style={{textAlign: "center", fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-seri", fontWeight:"100", marginBottom:"0.5em"}}>Freddie Brewin</Header>
      <Header as='h2' style={{textAlign: "center", fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-seri", fontWeight:"100", margin:"0.5em"}}>Full Stack Web Developer</Header>
      <Header as='h2' style={{textAlign: "center", fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-seri", fontWeight:"100", margin:"0.5em"}}>Engineer</Header>
      <Header as='h2' style={{textAlign: "center", fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-seri", fontWeight:"100", margin:"0.5em"}}>Based in UK</Header>
      <Divider  style={{maxWidth:"1000px", margin:"auto"}}/>
    </div>
    
  )
  
  export default HeaderExamplePage