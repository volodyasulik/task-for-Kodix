import styled from '@emotion/styled';
import HobeBGImame from '../../../assets/image/bgHome.image.png';
import { SIZES, WEIGHTS } from '../../theme/fonts.const';
import { COLORS } from '../../theme/colors.const';

export const HomeContainer = styled.div`
  background-image: url(${HobeBGImame});
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 8.125rem;
  width: 100%;
  /* height: 100%; */
  margin: 0;
`;

export const HomeLogoContainer = styled.div`
  display: flex;

  h1 {
    font-weight: ${WEIGHTS.medium};
    font-size: ${SIZES.m};
    letter-spacing: -0.05em;
    color: ${COLORS.pureBlack};
    margin-left: 0.5rem;
  }
`;

export const CartsContainer = styled.div`
  background-color: ${COLORS.white};
  display: flex;
  justify-content: center;
  border: 1px solid #d6d6d6;
  border-radius: 1.5rem;
  padding: 1.25rem;
  width: fit-content;
`;

export const CartsContainerVertical = styled(CartsContainer)`
  flex-direction: column;
  border: none;
  background-color: transparent;
`;
