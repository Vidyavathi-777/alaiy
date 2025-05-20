import React from 'react'
import logo from "/home/jtd/Documents/alaiy-practice-projects/react/staticpage/src/assets/react.svg"

const Maincomponent = () => {
    return (
        <div>
            <header>
                <nav>
                    <img src={logo} alt="" width="50px" className='logo' />
                    <h2 className='title'>ReactFacts</h2>
                </nav>
            </header>
            <main>

                <h1 className='body-title'>Fun facts about React</h1>
                <ul className='list-div'>
                    <li>was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thuand of enterprise apps,including mobile apps</li>
                </ul>
            </main>
        </div>
    )
}

export default Maincomponent
