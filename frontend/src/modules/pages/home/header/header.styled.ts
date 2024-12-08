import styled from '@emotion/styled';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { COLORS } from '../../../theme/colors.const';
import { SIZES, WEIGHTS } from '../../../theme/fonts.const';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  font-size: ${SIZES.s};
  letter-spacing: -0.05em;
  text-align: center;
  color: ${COLORS.mediumGray};
  margin-left: 2rem;

  &.active {
    color: ${COLORS.black};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export const NavButton = styled(RouterNavLink)`
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  width: 7.12rem;
  height: 2.62rem;
  margin-left: 0.56rem;
  font-weight: ${WEIGHTS.bold};
  font-size: ${SIZES.s};
  transition: background-color 0.3s ease, color 0.3s ease;

  color: ${COLORS.black};
  background-color: transparent;

  &:hover {
    background-color: ${COLORS.green};
    color: ${COLORS.white};
  }

  &.active {
    background-color: ${COLORS.green};
    color: ${COLORS.white};
  }
`;
