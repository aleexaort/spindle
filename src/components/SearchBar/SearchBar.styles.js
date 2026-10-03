import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.inputBg};
  padding: 4px 6px 4px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  width: 360px;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SearchIcon = styled.span`
  font-size: 0.85rem;
  opacity: 0.5;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const SearchSubmitBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFFFFF;
  border: none;
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: 6px 14px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;