import React,{useState} from 'react'

function Nav() {
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    return (
        <div>
            <nav className="navbar">
                <div className="left-side-menu">
                    <button className="hamburger" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                </div>

                <div className="navbar-links">
                    <a href="#">Featured</a>
                    <a href="#">What to Watch</a>
                    <a href="#">Latest News and Reviews</a>
                </div>

                <div className="search-bar-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
            </nav>

            {/* Menu Overlay */}
            {menuActive && <div className="menu-overlay" onClick={toggleMenu}></div>}

            {/* Menu Items */}
            <div className={`menu-items ${menuActive ? 'active' : ''}`}>
                <button className="close-button" onClick={toggleMenu}>✖</button>
                <a href="#">Featured</a>
                <a href="#">What to Watch</a>
                <a href="#">Latest News and Reviews</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">About Us</a>
                <a href="#">Fact Checking Policy</a>
                <a href="#">Corrections Policy</a>
                <a href="#">Ethics Policy</a>
                <a href="#">DMCA Take Down Policy</a>
                <a href="#">Editorial Policy</a>
                <a href="#">Ownership Policy</a>
                <a href="#">Terms of Use</a>
            </div>
        </div>
    )
}

export default Nav