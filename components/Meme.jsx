import memesData from "../memesData.js"
import React from "react";

function Meme() {


    const [meme, memeFunction] = React.useState({       
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg",
        })

    function handleMemeText(event){
        const {name, value} = event.target
        memeFunction(prevText => {
            return {
                ...prevText,
                [name]: value
            }
        })
    }

    const [allMemeImages, memeImagesFunc] = React.useState(memesData)
    
    function randomImageURL(){
        event.preventDefault()
        const memes = allMemeImages.data.memes;
        const random = Math.floor(Math.random() * memes.length);
        const memeURL = memes[random].url
        memeFunction(prevMeme => ({
            ...prevMeme, 
            randomImage: memeURL}))
        // console.log(randomMeme.url)
    }


    return (
        <main className='main'>
            <div className='form'>
            <label className='form--label'>Top Text
                <input 
                className='form--input' 
                type="text" 
                placeholder="Top text" 
                onChange={handleMemeText}
                name="topText"
                value={meme.topText}
                />
            </label>
            <label className='form--label'>Bottom Text
                <input 
                className='form--input' 
                type="text" 
                placeholder="Bottom text"
                onChange={handleMemeText}
                name="bottomText"
                value={meme.bottomText}
                />
            </label>
                <button className='form--button'
                onClick={randomImageURL} >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme