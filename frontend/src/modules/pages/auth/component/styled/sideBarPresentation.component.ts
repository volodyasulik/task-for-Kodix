import styled from '@emotion/styled';
import { COLORS } from '../../../../theme/colors.const';
import { SIZES, WEIGHTS } from '../../../../theme/fonts.const';

export const PresentationContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;

  h3 {
    color: ${COLORS.white};
    font-weight: ${WEIGHTS.bold};
    font-size: ${SIZES.s};
    margin: 0;
  }

  p {
    margin: 0;
    text-align: left;
  }

  img {
    margin-right: 0.5rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
