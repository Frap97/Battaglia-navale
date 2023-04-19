import { handleMenuToggle } from "../utils/handleMenuToggle";
import { Link, useNavigate } from "react-router-dom";

const handleLogout = async (navigate) => {
  try {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      // Logout successful, navigate to the homepage
      navigate('/');
    } else {
      console.error('Logout failed', response);
    }
  } catch (error) {
    console.error('Logout failed', error);
  }
};

const ToggleMenu = () => {
  const navigate = useNavigate();

  return (
    <div id="topnav">
      <div id="myLinks">
        <Link to="/profile">PROFILO</Link>
        <Link to="#" onClick={() => handleLogout(navigate)}>LOGOUT</Link>
      </div>

      <button className="user" onClick={handleMenuToggle}></button>
    </div>
  );
};

export default ToggleMenu;
