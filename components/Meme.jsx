import memesData from "../memesData.js"
import React from "react";

function Meme() {


    const [meme, memeFunction] = React.useState({       
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg",
        })

    const [allMemeImages, memeImagesFunc] = React.useState(memesData)
    
    function randomImageURL(){
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
                />
            </label>
            <label className='form--label'>Bottom Text
                <input 
                className='form--input' 
                type="text" 
                placeholder="Bottom text"
                />
            </label>
                <button className='form--button'
                onClick={randomImageURL} >
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="meme--image" src={meme.randomImage}></img>
        </main>
    )
}

export default Meme