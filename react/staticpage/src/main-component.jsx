import React from 'react'
import logo from "/home/jtd/Documents/alaiy-practice-projects/react/staticpage/src/assets/react.svg"

const Maincomponent = (props) => {
    return (
        <div>
            <header>
                <nav className={props.darkMode ? "dark" : ""}>
                    
                    <img src={logo} alt="" width="50px" className='logo' />
                    <h2 className='title'>ReactFacts</h2>
                    <div className="toggler">
                        <p className="toggler-light">Light</p>
                        <div className="toggler-slider" onClick={props.toggleDarkMode}>
                            <div className='toggler-slider-circle'>

                            </div>


                        </div>
                        <p className="toggler-dark">Dark</p>
                    </div>
                </nav>
            </header>
            <main className={props.darkMode ? "dark" : ""}>

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
