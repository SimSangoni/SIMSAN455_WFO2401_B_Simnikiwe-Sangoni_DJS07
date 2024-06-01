import React from 'react'


function Meme() {
    return (
        <main className='main'>
            <form className='form'>
            <label>Top Text
                <input 
                className='form--input' 
                type="text" 
                placeholder="Top text" 
                />
            </label>
            <label>Bottom Text
                <input 
                className='form--input' 
                type="text" 
                placeholder="Bottom text"
                />
            </label>
                <button className='form--button' >Get a new meme image 🖼</button>
            </form>
        </main>
    )
}

export default Meme