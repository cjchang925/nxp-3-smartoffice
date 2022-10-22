import OriginalImage from './image/office_ac.png'
import Navbar from './components/Navbar';
import './LevelOne.css'
import { Link } from "react-router-dom";

const LevelOne = () => {
    return (
        <div className='Office'>
            <Navbar />
            <img src={OriginalImage} className='original_image' alt='original office' />
            <p className='level_one_text'>
                Nothing Changed.
            </p>
            <Link to="/select_level" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className='level_one_next_step'>
                    Back to Menu
                </p>
            </Link>

        </div>
    );
};

export default LevelOne;