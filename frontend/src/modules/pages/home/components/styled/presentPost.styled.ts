import styled from '@emotion/styled';
import { SIZES, WEIGHTS } from '../../../../theme/fonts.const';
import { COLORS } from '../../../../theme/colors.const';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const PresentPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8.3rem;
  text-align: center;

  h2 {
    font-weight: ${WEIGHTS.bold};
    font-size: 2rem;
    letter-spacing: -0.05em;
    color: ${COLORS.pureBlack};
    margin: 0;
  }

  p {
    font-weight: ${WEIGHTS.normal};
    font-size: ${SIZES.s};
    letter-spacing: -0.05em;
    text-align: left;
    color: ${COLORS.mediumGray};
    margin-bottom: 1.25rem;
    width: 34.56rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const DateDiv = styled.div`
  font-weight: ${WEIGHTS.medium};
  font-size: 0.75rem;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  margin-right: 1.25rem;
  color: ${COLORS.mediumGray};
`;

export const NameContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  border-radius: 6.19rem;
  padding: 0.31rem 0.5rem 0.31rem 0.31rem;
  min-width: 6.5rem;
  height: 2.12rem;
  align-items: center;
  justify-content: space-around;

  h3 {
    font-weight: ${WEIGHTS.medium};
    font-size: ${SIZES.s};
    letter-spacing: -0.05em;
    color: ${COLORS.pureBlack};
  }
`;

export const CircleDiv = styled.div`
  border-radius: 4.12rem;
  width: 1.5rem;
  height: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  margin-right: 0.5rem;
`;

export const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem 0 3rem 0;
  p {
    font-weight: ${WEIGHTS.normal};
    font-size: ${SIZES.s};
    letter-spacing: -0.05em;
    color: ${COLORS.pureBlack};
    margin-right: 0.75rem;
  }

  img {
    margin-right: 0.55rem;
  }
`;

export const CartContainer = styled(RouterNavLink)`
  display: flex;
  flex-direction: column;
  margin-right: 1.25rem;
  text-decoration: none;
  img {
    width: 15.38rem;
    height: 8.5rem;
    margin-bottom: 1.25rem;
  }

  p {
    font-weight: ${WEIGHTS.normal};
    font-size: ${SIZES.s};
    letter-spacing: -0.05em;
    color: ${COLORS.mediumGray};
    width: 15.38rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

export const CartBody = styled.h4`
  width: 15.38rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 1.25rem 0 0 0;
  font-weight: ${WEIGHTS.bold};
  font-size: 1.06rem;
  letter-spacing: -0.05em;
  color: ${COLORS.pureBlack};
`;

export const CartHorizontally = styled(CartContainer)`
  flex-direction: row;
  align-items: center;

  img {
    width: 14.12rem;
    height: 8.5rem;
  }
`;

export const HorizontallContainer = styled.div`
  margin-left: 1.25rem;
`;
