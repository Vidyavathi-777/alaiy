import React from 'react'

const Content = () => {
  return (
    <div className='content'>
        <div className='image'>
            <img src="/home/jtd/Documents/alaiy-practice-projects/travel-journal/src/assets/image1.png" alt="mount fuji"/>
        </div>
        <div className='country'>
            <div>
                <p>Japan</p>
                <a href="">Google Maps</a>
            </div>
            <div className='place-name'>
                Mount Fuji
            </div>
            <div className='calendar'>
                <p>jan-feb</p>
            </div>
            <div className='description'>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Content
