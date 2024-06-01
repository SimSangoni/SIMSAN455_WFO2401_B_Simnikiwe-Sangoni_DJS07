function Meme() {
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
                <button className='form--button' >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}

export default Meme