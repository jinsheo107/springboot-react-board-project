import React from 'react';
import './style.css';

// component: footer layout
export default function Footer() {

  // render: footer layout landering
  return (
    <div id='footer'>
      <div className='footer-container'>
        <div className='footer-top'>
          <div className='footer-logo-box'>
            <div className='icon-box'>
              <div className='icon logo-light-icon'></div>
            </div>
            <div className='footer-logo-text'>{'Jin\'s Board'}</div>
          </div>
          <div className='footer-link-box'>
            <div className='footer-email-link'>{'jinsheo107@gamil.com'}</div>
            <div className='icon-button'>
              <div className='icon insta-icon'></div>
            </div>
            <div className='icon-button'>
              <div className='icon naver-blog-icon'></div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>{'Copyring @ 2025 Jinsheo107. All Rights Reserved.'}</div>
        </div>
      </div>
    </div>
  )
}
