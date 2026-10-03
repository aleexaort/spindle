import styled from 'styled-components';

export const SearchSection = styled.section`
  flex: 1.2;
`;

export const SectionHeader = styled.div`
  h2 {
    font-size: 1.35rem;
    margin: 0 0 4px 0;
    color: ${({ theme }) => theme.colors.textMain};
  }

  p {
    margin: 0 0 20px 0;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StatusBox = styled.div`
  background-color: ${({ isError, theme }) => (isError ? theme.colors.errorBg : theme.colors.cardBg)};
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: 30px;
  text-align: center;
  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.errorBorder : theme.colors.border)};

  p {
    margin: 0 0 ${({ isError }) => (isError ? '12px' : '0')}; 0;
    color: ${({ isError, theme }) => (isError ? theme.colors.errorText : theme.colors.textSecondary)};
    font-weight: 500;
  }
`;

export const RetryBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFFFFF;
  border: none;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: 600;
  cursor: pointer;
`;