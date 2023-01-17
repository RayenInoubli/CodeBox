import {useNavigate} from 'react-router-dom';
import '../styles/logout.css';

const Logout = () => {

    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('userId');
        navigate("/");
    }

    return(
        <li>
            <button id='logoutBtn' onClick={handleLogout}>
                log out
            </button>
        </li>
    )
}

export default Logout;