import React from 'react';
export function Footer() {
  return (
     <footer>
        <div className='footer-wrapper'>
          <div>
            <span>Term of Service | </span>
            <span>Privacy Policy | </span>
            <span>Subscription Policy</span>
          </div>
          <div>
            <span>©Copyright © 2020 PlantIn. All rights reserved</span>
          </div>
        </div>
        <div className='footer-wrapper-mini'>
          <div>
            <span>Term of Service</span>
            <span>Privacy Policy</span>
            <span>Subscription Policy</span>
          </div>
          <div>
            <span>©Copyright © 2020 PlantIn. All rights reserved</span>
          </div>
        </div>
      </footer>
  )
}
