import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px 60px 24px;
`;

export const MainGrid = styled.main`
  display: flex;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;