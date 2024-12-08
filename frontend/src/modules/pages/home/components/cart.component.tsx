import { useLocation } from 'react-router';
import StubBG from '../../../../assets/image/stub.png';
import { ROUTER_KEYS } from '../../../const/app-keys.const';
import getCurrentDate from '../../../shared/getCurrentDate.shared';
import {
  CartContainer,
  DateDiv,
  CartBody,
  CartHorizontally,
  HorizontallContainer,
} from './styled/presentPost.styled';

const CartComponent: React.FC<{ body: string; id: number; name: string }> = ({
  body,
  id,
  name,
}) => {
  const location = useLocation();

  const isPostPage = location.pathname.startsWith('/posts/');

  return (
    <>
      {isPostPage ? (
        <CartHorizontally to={`/${ROUTER_KEYS.post}/${id}`}>
          <img src={StubBG} alt="Stub" />
          <HorizontallContainer>
            <DateDiv>{getCurrentDate()}</DateDiv>
            <CartBody>{body}</CartBody>
            <p>{name}</p>
          </HorizontallContainer>
        </CartHorizontally>
      ) : (
        <CartContainer to={`/${ROUTER_KEYS.post}/${id}`}>
          <img src={StubBG} alt="Stub" />
          <div>
            <DateDiv>{getCurrentDate()}</DateDiv>
            <CartBody>{body}</CartBody>
            <p>{name}</p>
          </div>
        </CartContainer>
      )}
    </>
  );
};

export default CartComponent;
