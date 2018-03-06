import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavMenu from './nav-menu';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      mobile: true,
      menu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    if(this.state.menu === false) {
      this.setState({menu: true})
      window.scrollTo(0, 0)
      return
    }
    this.setState({menu: false})
  }

  render() {
    return (
        <header>
          <nav className={this.state.navClasses}>
            <Link to='/'><img className='logo' src={require('../assets/bighorn-logo.png')}/></Link>
            <div className='nav-items'>
              <ul className='nav-links'>
                <li><Link to='/townhomes'>{'TOWNHOMES'}</Link></li>
                <li><Link to='/condos'>{"CONDOS"}</Link></li>
                <li><Link to='/neighborhood'>{"NEIGHBORHOOD"}</Link></li>
              </ul>
              <div className="nav-menu" onClick={this.toggleMenu}>
                <span>{'MENU'}</span>
                <img src={require('../assets/hamburger.png')}/>
              </div>
            </div>
          </nav>
          { this.state.menu &&
            <NavMenu toggleMenu={this.toggleMenu} />
          }
          </header>
          )
          }
}

export default Header
