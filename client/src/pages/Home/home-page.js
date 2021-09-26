import React, { Component } from 'react'
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import Nav from "../../components/navbar/navbar"
import Hero from "../../components/hero/hero"
import Bio from "../../components/bio/bio"
import Technologies from "../../components/tech/tech"
import Projects from "../../components/projects/projects"
import { Divider } from 'semantic-ui-react'

import {
  Segment,
  Sidebar,
  Visibility,
  Grid,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
            <Nav />
            <Hero/>
            <Divider  style={{maxWidth:"1000px", marginLeft:"auto",  marginRight:"auto", marginTop:"50px"}}/>
            <Projects/>
            {/* <Bio/>
            
            <Technologies/>
            <Divider  style={{maxWidth:"1000px", margin:"auto", marginRight:"auto", marginTop:"50px"}}/>
             */}
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  //accordian
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeIndex } = this.state

    return (
      <Media as={Sidebar.Pushable} at="mobile">

        <Segment
          textAlign='center'
          style={{ padding: "5em 0vw",  backgroundColor: "#fff" }}
        >
          <Nav />
          <Hero/>
          <Bio/>
          <Divider  style={{maxWidth:"1000px", margin:"auto",}}/>
          <Technologies/>
          <Divider  style={{maxWidth:"1000px", margin:"auto",}}/>
          <Projects/>
        </Segment>

        {children}


      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (

  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Home = () => {
  return (
    <div>
      <ResponsiveContainer/>
    </div>
  );
};

export default Home;