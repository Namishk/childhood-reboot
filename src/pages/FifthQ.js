import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useSound from 'use-sound';
import sound from './../assets/minion.m4a'
import './FifthQ.css';
import background from './../assets/minion.jpg'

const FifthQ = () =>{

    const router = useHistory();
    const [val, setVal] = useState('');
    const [play, { stop }] = useSound(sound);
    let ans = "minions";
    let ans1 = "minion"
    const handelInp = () =>{
        if (val.toLowerCase() === ans || val.toLowerCase() === ans1){
            router.push("/FinalAnsForm09221414517453528yug87erh97rgy91441rf2151e"); 
            stop(); 
        }
    };

    return(
        
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center fullPage" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'100% 100%'
        }} >
            <form onSubmit={e => e.preventDefault()}>
                    <p className= ""></p>
                    <input onChange={e => setVal(e.target.value)} className="input" />
                    <button className="button" 
                    onMouseEnter={() => play()} 
                    onMouseLeave={() => stop()}
                    onClick={handelInp}
                    >
                        OK
                    </button>
                </form>
        </div>
    );
}

export default FifthQ;