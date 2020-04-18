import React from 'react'
// import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2> */}
    {/* <br /> */}
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Tous droits réservés. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
