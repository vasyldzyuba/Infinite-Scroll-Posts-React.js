import React from 'react';

export function ScrollCards() {
  return( <div className='row'>
                <div className='container'>
                  <div className='grid-row grid-4-4'>
                    <div className='cards'>
                      <div className='card_image loading'></div>
                      <div className='card_title loading'></div>
                      <div className='card_description loading'></div>
                    </div>
                    <div className='cards hide2'>
                      <div className='card_image loading'></div>
                      <div className='card_title loading'></div>
                      <div className='card_description loading'></div>
                    </div>
                    <div className='cards hide'>
                      <div className='card_image loading'></div>
                      <div className='card_title loading'></div>
                      <div className='card_description loading'></div>
        </div>
                  </div>
                </div>
              </div>)
}
