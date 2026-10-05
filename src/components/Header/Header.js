import React from 'react';
import { useDispatch } from 'react-redux';
import { resetResults } from '../../redux/slices/searchSlice';
import SearchBar from '../SearchBar/SearchBar';
import {
  Navbar,
  LogoLink,
  LogoContainer,
  LogoCircle,
  BrandTextWrapper,
  BrandText,
  SloganText,
  UserAvatar
} from './Header.styles';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(resetResults());
  };

  return (
    <Navbar>
      <LogoLink to="/" onClick={handleLogoClick}>
        <LogoContainer>
          <LogoCircle>
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="32" fill="none" stroke="#FFFFFF" strokeWidth="6" />
              <circle cx="50" cy="50" r="10" fill="#FFFFFF" />
              <circle cx="50" cy="50" r="3" fill="#FF6584" />
              <path d="M 32 38 A 22 22 0 0 1 42 28" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
              <path d="M 68 62 A 22 22 0 0 1 58 72" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </LogoCircle>
          <BrandTextWrapper>
            <BrandText>Spindle</BrandText>
            <SloganText>Dale vuelta a tu música</SloganText>
          </BrandTextWrapper>
        </LogoContainer>
      </LogoLink>

      <SearchBar />

      <div>
        <UserAvatar>A</UserAvatar>
      </div>
    </Navbar>
  );
};

export default Header;