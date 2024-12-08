import styled from '@emotion/styled';
import { SIZES, WEIGHTS } from '../../theme/fonts.const';
import { COLORS } from '../../theme/colors.const';

export const SignContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  padding-bottom: 2.5rem;
`;

export const ModalContainer = styled.div`
  display: grid;
  border: 1px solid #000;
  border-radius: 1.56rem;
  min-width: 46.94rem;
  overflow: hidden;
  grid-template-areas: 'main main sidebar';

  h1 {
    line-height: 142%;
    font-weight: ${WEIGHTS.bold};
    font-size: ${SIZES.l};
    color: ${COLORS.black};
  }

  input {
    font-size: ${SIZES.s};
    /* font-weight: ${WEIGHTS.normal}; */
  }

  a {
    font-weight: ${WEIGHTS.medium};
    font-size: ${SIZES.s};
    color: ${COLORS.green};
    text-decoration: none;
    margin: 1.5rem 0 2rem 0.25rem;
  }

  p {
    font-weight: ${WEIGHTS.medium};
    font-size: ${SIZES.s};
    color: ${COLORS.black};
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.div`
  font-weight: ${WEIGHTS.medium};
  font-size: ${SIZES.s};
  color: ${COLORS.black};
  margin-top: 1.438rem;
  margin-bottom: 0.75rem;
`;

export const FormContainer = styled.div`
  grid-area: main;
  padding: 2rem;
  height: 100%;
`;

export const SideBar = styled.div`
  grid-area: sidebar;
  background-color: ${COLORS.pureBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18.31rem;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
  }

  img {
    margin-left: 0.68rem;
  }

  p {
    font-weight: ${WEIGHTS.normal};
    font-size: 0.88rem;
    line-height: 171%;
    text-align: center;
    color: ${COLORS.darkGray} !important;
    margin: 1rem 0 1.5rem 0;
  }

  a {
    font-weight: ${WEIGHTS.medium};
    font-size: 1rem;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-align: center;
    color: ${COLORS.brightGreen};
    margin: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`;
export const CallUs = styled.div`
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.bold};
  font-size: ${SIZES.s};

  a {
    color: ${COLORS.brightGreen};
    text-decoration: none;
  }
`;
