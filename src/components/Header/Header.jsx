import {StyledHeader, StyledLogo, NavigationItems, NavigationItem, NavigationLink} from "./styled";

const Header = () => {
    return (
        <StyledHeader className='Header'>
            <StyledLogo className='logo'>Calculator App</StyledLogo>
            <nav className='navigation'>
                <NavigationItems className='navigation__items'>
                    <NavigationItem className='navigation__item'><NavigationLink href="#" className='navigation__link'>Home</NavigationLink></NavigationItem>
                    <NavigationItem className='navigation__item'><NavigationLink href="#" className='navigation__link'>Settings</NavigationLink></NavigationItem>
                </NavigationItems>
            </nav>
        </StyledHeader>
    )
}

export default Header;
