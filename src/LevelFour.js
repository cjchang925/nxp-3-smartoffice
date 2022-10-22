import LevelFourImage from './image/office_level_4.png'
import Navbar from './components/Navbar';
import './LevelOne.css'
import './LevelFour.css'
import { Link } from "react-router-dom";

const LevelFour = () => {
    return (
        <div className='Office'>
            <Navbar />
            <img src={LevelFourImage} className='original_image' alt='original office' />
            <p className='level_four_text'>
                Turns off the lamps and the<br/>air conditioners.
            </p>
            <Link to="/select_level" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className='level_four_next_step'>
                    Back to Menu
                </p>
            </Link>

        </div>
    );
};

export default LevelFour;