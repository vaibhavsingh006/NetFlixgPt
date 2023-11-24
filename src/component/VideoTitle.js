import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{overview}</p>
            <div>
                <button>more</button>
                <button>button</button>
            </div>
        </>
    )
}

export default VideoTitle;
