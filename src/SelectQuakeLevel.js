import Navbar from "./components/Navbar";
import OriginalImage from './image/office_ac.png'
import './SelectQuakeLevel.css'
import { Link } from "react-router-dom";

const SelectQuakeLevel = () => {
    return (
        <div className='Select_level'>
            <Navbar />
            <img src={OriginalImage} className='original_image' alt='original office' />
            <p className="question">
                Select Earthquake Level
            </p>
            <Link to="/level_one" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className="level_1">
                    Level 1
                </p>
            </Link>
            <Link to="/level_four" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className="level_4">
                    Level 4
                </p>
            </Link>
            <Link to="/level_six" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className="level_6strong">
                    Level 6-Strong
                </p>
            </Link>
            <Link to="/" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className="back">
                    End Demo
                </p>
            </Link>
        </div>
    );
}

export default SelectQuakeLevel;