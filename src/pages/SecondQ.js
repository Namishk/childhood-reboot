import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './SecondQ.css';
import image from './../assets/Kick.svg';

const SecondQ = () => {
    const router = useHistory();

    const [val, setVal] = useState('');
    let ans = "kick buttowski";
    
    const handelInp = () =>{
        if(ans === val.toLowerCase()){
            router.push("/ThirdQ");
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column back">
                <img src={image} className="mx-auto image"/>
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

export default SecondQ;