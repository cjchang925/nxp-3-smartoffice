import OriginalImage from './image/office_ac.png'
import Navbar from './components/Navbar';
import './OriginalOffice.css'
import { Link } from "react-router-dom";

const OriginalOffice = () => {
    return (
        <div className='Office'>
            <Navbar />
            <img src={OriginalImage} className='original_image' alt='original office' />
            <p className='original_office_title'>
                Original Office
            </p>
            <Link to="/select_level" style={{ textDecoration: 'none', cursor: 'default' }}>
                <p className='original_next_step'>
                    Next Step
                </p>
            </Link>

        </div>
    );
};

export default OriginalOffice;