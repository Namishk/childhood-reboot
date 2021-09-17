import React from 'react';
import background from './../assets/20-Awesome-Cartoons-2000s-Kids.png';
import { Link } from 'react-router-dom';
import './HomePage.css'
const HomePage = () => (
    <>

        <div className="homepage container-fluid d-flex justify-content-center fullPage" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'100% 100%'
        }}>
            <div className="d-flex flex-column justify-content-center align-items-center w-75 me-3"  style={{
            }}>
            <h1 className="fw-bolder homeHead ps-5 ">Welcome to Childhood Reboot</h1>
            <Link to="/FirstQ" className="homeHeadBtn">
                Start
            </Link>
            </div>
            

        </div>

    </>
);

export default HomePage;