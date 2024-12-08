import StubBG from '../../../../assets/image/stub.png';
import getCurrentDate from '../../../shared/getCurrentDate.shared';
import FacebookIcon from '../../../../assets/icons/facebook.icon.svg';
import YoutubeIcon from '../../../../assets/icons/youtube.icon.svg';
import TwiterIcon from '../../../../assets/icons/x.icon.svg';

import {
  CircleDiv,
  DateDiv,
  InfoContainer,
  NameContainer,
  PresentPostContainer,
  ShareContainer,
  TextContainer,
} from './styled/presentPost.styled';
import { useLocation } from 'react-router';

const PresentPost: React.FC<{
  title: string;
  body: string;
  email: string;
}> = ({ title, body, email }) => {
  const location = useLocation();

  const isPostPage = location.pathname.startsWith('/posts/');

  return (
    <PresentPostContainer
      style={isPostPage ? { alignItems: 'flex-start' } : undefined}
    >
      <TextContainer
        style={
          isPostPage ? { padding: 0, alignItems: 'flex-start' } : undefined
        }
      >
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{body}</p>
      </TextContainer>
      <InfoContainer>
        <DateDiv>{getCurrentDate()}</DateDiv>
        <NameContainer>
          <CircleDiv />
          <h3>{email}</h3>
        </NameContainer>
      </InfoContainer>
      <img src={StubBG} alt="Styb" />

      <ShareContainer>
        <p>Share to</p>

        <img src={FacebookIcon} alt="Facebook" />
        <img src={TwiterIcon} alt="Twiter" />
        <img src={YoutubeIcon} alt="Youtube" />
      </ShareContainer>
    </PresentPostContainer>
  );
};

export default PresentPost;
