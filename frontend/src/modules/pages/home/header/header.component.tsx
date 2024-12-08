import { useEffect, useState } from 'react';
import KodixLogo from '../../../../assets/image/kodex.svg';
import { HeaderContainer, NavButton, NavLink } from './header.styled';
import { useNavigate } from 'react-router-dom';
import { KEYS_WORDS, ROUTER_KEYS } from '../../../const/app-keys.const';

const HeaderComponent = () => {
  const [activeButton, setActiveButton] = useState(ROUTER_KEYS.signUp);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(KEYS_WORDS.jwt);
    if (token) {
      setAuth(true);
    }
  }, [auth]);

  const handleMouseEnter = (button: string) => {
    setActiveButton(button);
  };

  const handleMouseLeave = () => {
    setActiveButton(ROUTER_KEYS.signUp);
  };

  const handleSignOut = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    localStorage.removeItem(KEYS_WORDS.jwt);
    navigate(`/${ROUTER_KEYS.auth}/${ROUTER_KEYS.signIn}`);
  };

  return (
    <HeaderContainer>
      <div>
        <NavLink to={`/${ROUTER_KEYS.home}`}>Home</NavLink>
        <NavLink to={`/${ROUTER_KEYS.signIn}`}>Feature</NavLink>
        <NavLink to={`/${ROUTER_KEYS.signIn}`}>Blog</NavLink>
        <NavLink to={`/${ROUTER_KEYS.signIn}`}>Testimonis</NavLink>
      </div>
      <img src={KodixLogo} alt="Kodix Logo" />

      <div>
        {auth ? (
          <NavButton
            to={`/${ROUTER_KEYS.auth}/${ROUTER_KEYS.signIn}`}
            onClick={handleSignOut}
          >
            Sign Out
          </NavButton>
        ) : (
          <>
            <NavButton
              to={`/${ROUTER_KEYS.auth}/${ROUTER_KEYS.signIn}`}
              onMouseEnter={() => handleMouseEnter(ROUTER_KEYS.signIn)}
              onMouseLeave={handleMouseLeave}
              className={activeButton === ROUTER_KEYS.signIn ? 'active' : ''}
            >
              Sign In
            </NavButton>
            <NavButton
              to={`/${ROUTER_KEYS.auth}/${ROUTER_KEYS.signUp}`}
              className={activeButton === ROUTER_KEYS.signUp ? 'active' : ''}
              onMouseEnter={() => handleMouseEnter(ROUTER_KEYS.signUp)}
            >
              Sign Up
            </NavButton>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;
