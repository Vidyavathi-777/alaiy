import React from 'react'

import Card from './card'
import img1 from "/home/jtd/Documents/alaiy-practice-projects/airbnb-clone/src/assets/94828e805b8276d0107c051ebf1f83bddb196691.png"      
import img2 from "/home/jtd/Documents/alaiy-practice-projects/airbnb-clone/src/assets/ddae79e6cc27c7a29d19484fc16a88a858818a64.jpg"      
import img3 from  "/home/jtd/Documents/alaiy-practice-projects/airbnb-clone/src/assets/ead6b7302e14ab487375450939adb37a55c58038.jpg"      

const Home = () => {
    return (
        <div className='home-section'>
            <div className='main-img'>
                {/* <img src={img} alt="" /> */}
            </div>
            <div className='main-content'>
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
            <div className='footer-card'>
                 <Card
                img= {img1}
                rating='5.0'
                country='USA'
                name='Life lessons with  Kaie Zaferes'
                price='$136'

            />
             <Card
                img= {img2}
                rating='5.0'
                country='USA'
                name='Learn Wedding Photography'
                price='$125'
            />
             <Card
                img={img3}
                rating='4.8'
                country='USA'
                name='Group Mountain Biking'
                price='$50'
            />
        

            </div>
           
        </div>
    )
}

export default Home


