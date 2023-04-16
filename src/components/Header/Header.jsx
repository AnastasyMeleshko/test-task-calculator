import HeaderStyles from "./HeaderStyles.css";

const Header = () => {
    return (
        <header className='Header'>
            <p className='logo'>Calculator App</p>
            <nav className='navigation'>
                <ul className='navigation__items'>
                    <li className='navigation__item'><a href="#" className='navigation__link'>Home</a></li>
                    <li className='navigation__item'><a href="#" className='navigation__link'>Settings</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
