import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <section className='footer'>
        <div className='bottom-nav'>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/townhomes'>TOWNHOMES</Link></li>
            <li><Link to='/condos'>CONDOS</Link></li>
            <li><Link to='/neighborhood'>THE NEIGHBORHOOD</Link></li>
            <li><Link to='/blog'>BIGHORN BLOG</Link></li>
          </ul>
        </div>
        <div className='addresses'>
          <div className='address'>
            <h4>{'BIGHORN CROSSING'}</h4>
            <p>{'Georgetown Lake'}</p>
            <p>{'Georgetown, CO '}</p>
          </div>
          <div className='address'>
            <h4>{'SALES CENTER'}</h4>
            <p>{'Argent Real Estate'}</p>
            <p>{'612 6th St Unit B'}</p>
            <p>{'Georgetown, CO '}</p>
            <p>{'(303) 569 2699'}</p>
          </div>
          <div className='address'>
            <h4>{'CONTACT US'}</h4>
            <p>{'hello@bighorncrossing.com'}</p>
          </div>
        </div>

      </section>
    )
  }
}
