import video from './video/1022.mp4'
import Navbar from './components/Navbar';
import React, { useEffect, useRef } from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <div className='Home'>
            <Navbar />
            <video loop muted ref={videoEl} className='Cover_video'>
                <source src={video} type="video/mp4" />
            </video>
            <Link to="/original_office" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className='Start_demo_text'>
                    Start Demo
                </p>
            </Link>
        </div>
    );
};

export default Home;