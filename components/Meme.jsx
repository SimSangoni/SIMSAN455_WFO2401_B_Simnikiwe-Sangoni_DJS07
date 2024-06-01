import memesData from "../memesData.js"
import React from "react";

function Meme() {


    const [memeImage, memeFunction] = React.useState("")
    
    function randomImageURL(){
        const memes = memesData.data.memes;
        const random = Math.floor(Math.random() * memes.length);
        memeFunction(memes[random].url)
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
            <img className="meme--image" src={memeImage}></img>
        </main>
    )
}

export default Meme