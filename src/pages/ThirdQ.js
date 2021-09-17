import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useSound from 'use-sound';
import sound from './../assets/wimpy.mp3';
import gif from './../assets/popeye-eating.gif';
import './ThirdQ.css';

import background from './../assets/image.jpg';

const ThirdQ = () =>{

    const router = useHistory();
    const [play, { stop }] = useSound(sound);
    const [val, setVal] = useState('');
    let ans = "wimpy";
    const handelInp = () =>{
        if (val.toLowerCase() === ans){
            router.push("/FourthQ");
            stop(); 
        }
    };

    return(
        <div className="fullPage container-fluid d-flex flex-column justify-content-center align-items-center" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'100% 100%'
        }}>
            <img src={gif} className="mx-auto " onMouseEnter={() => play()} 
        onMouseLeave={() => stop()}/>
            <form onSubmit={e => e.preventDefault()}>
                    <input onChange={e => setVal(e.target.value)} className="input" />
                    <button className="button" 
                    onClick={handelInp}
                    >
                        OK
                    </button>
                </form>
        </div>
    );
}

export default ThirdQ;