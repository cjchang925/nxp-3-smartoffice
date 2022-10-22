import LevelSixImage from './image/office_level_6.png'
import Navbar from './components/Navbar';
import './LevelOne.css'
import './LevelSix.css'
import { Link } from "react-router-dom";

const LevelSix = () => {
    return (
        <div className='Office'>
            <Navbar />
            <img src={LevelSixImage} className='original_image' alt='original office' />
            <p className='level_six_text'>
                Opens the door and shows the<br/>evacuation route. 
            </p>
            <Link to="/select_level" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className='level_six_next_step'>
                    Back to Menu
                </p>
            </Link>
        </div>
    );
};

export default LevelSix;