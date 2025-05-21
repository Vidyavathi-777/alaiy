import React, { useEffect, useState } from 'react'

const Meme = () => {
    const [meme, setMeme] = useState({
        topText : "One does not simply",
        bottomText : "Walk into mordor",
        randomImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-l_EZ3g82s-Qxlz65lEaUEJwhnA05gOtRqg&s"
    })

    const [allMemes,setAllMemes] = useState([])

    useEffect(() =>{
        fetch(" https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    // console.log(allMemes)

    function handleChange(event) {
        const { value, name } = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage (){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url
        }))
    }

    return (
        <main>
            <div className='form'>
                <div className="inputs-containers">
                    <label>
                    Top Text</label>
                    <input
                        type='text'
                        className='form-input'
                        name='topText'
                        placeholder='one does not simply '
                        value={meme.topText}
                        onChange={handleChange}
                    />
                
                </div>
                <div className="">
                <label>
                    Bottom Text </label>
                    <input
                        type='text'
                        className='form-input'
                        name='bottomText'
                        placeholder='walk into mordor'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    </div>
            
            </div>
            <div className="button-div"><button className='form-button' onClick={getMemeImage} >Get a new meme image </button></div>
            
            <div className='meme'>
                <img src={meme.randomImage} />
                <span className='top'>{meme.topText}</span>
                <span className='bottom'>{meme.bottomText}</span>

            </div>
        </main>
    )
}

export default Meme
