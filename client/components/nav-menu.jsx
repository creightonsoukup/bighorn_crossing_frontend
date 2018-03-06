import React from 'react';
import {Link} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

class NavMenu extends React.Component {
  render() {
    return (
      <section className='menu'>
        <img onClick={this.props.toggleMenu} className='menu-icon'src={require('../assets/x.png')}/>
        <ul onClick={this.props.toggleMenu}>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/townhomes'>townhomes</Link></li>
          <li><Link to='/condos'>condos</Link></li>
          <li><Link to='/neighborhood'>the neighborhood</Link></li>
          <li><Link to='/blog'>bighorn blog</Link></li>
        </ul>
        <img className='menu-logo'src={require('../assets/bighorn-logo.png')}/>
      </section>
      )
    }
  }
export default NavMenu
