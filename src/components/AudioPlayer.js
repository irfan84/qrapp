import React from "react";
const AudioPlayer  = ({result, scanned}) => {
        if(scanned === 'false'){
                return <p className='f4 white'>Please Scan QR Code</p>
        }
        else if (scanned === 'true') {
                return (
                    <audio src={result} controls autoPlay/>
                )
        }
}

export default AudioPlayer;
