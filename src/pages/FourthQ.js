import React, { useState } from 'react';
import { useHistory } from 'react-router';
import background from './../assets/ice.jpg'
import './FourthQ.css';
const FourthQ = () =>{

    const router = useHistory();
    const [val, setVal] = useState('');
    let ans = "scrat";
    const handelInp = () =>{
        if (val.toLowerCase() === ans){
            router.push("/FifthQ"); 
        }
    };

    return(
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center back" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'100% 100%'
        }} >
            <form onSubmit={e => e.preventDefault()}>
                    <p className= "">I am the first squirell to land on the Moon.</p>
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

export default FourthQ;