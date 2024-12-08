import { useLocation } from 'react-router';
import FrontPageComponent from './components/frontPage.component';
import HeaderComponent from './header/header.component';
import { HomeContainer } from './home.style';
import PostCartComponent from './components/PostCart.component';

const HomeComponent = () => {
  const location = useLocation();

  const isPostPage = location.pathname.startsWith('/posts/');

  return (
    <HomeContainer>
      <HeaderComponent />
      {isPostPage ? <PostCartComponent /> : <FrontPageComponent />}
    </HomeContainer>
  );
};

export default HomeComponent;
