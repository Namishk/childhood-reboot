import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './FirstQ.css'
import useSound from 'use-sound';
import sound from './../assets/spongbob.mp3';

const FirstQ = () => {
    const router = useHistory();
    const [play, { stop }] = useSound(sound);
    const [val, setVal] = useState('');
    let ans = "spongebob";
    let ans1 = "spongebob squarepants"
    const handelInp = () =>{
        if (val.toLowerCase() === ans || val.toLowerCase() === ans1){
            console.log("OK");
            router.push("/SecondQ");
            stop(); 
        }
    };
    return(
    
        <form className="container-fluid d-flex justify-content-center align-items-center fullPage q1Page" onSubmit={e => e.preventDefault()}>
        
        <input className="input" 
        onChange={e => setVal(e.target.value)}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        />
        <button className="button" 
        onMouseEnter={() => play()} 
        onMouseLeave={() => stop()}
        onClick={handelInp}
        >Aye Aye</button>
        </form>
    )
    };


export default FirstQ;