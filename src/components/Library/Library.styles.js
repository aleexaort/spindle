import styled from 'styled-components';

export const LibrarySection = styled.section`
  flex: 1;
`;

export const LibraryCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radii.large};
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  min-height: 400px;
`;

export const LibraryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    font-size: 1.25rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.textMain};
  }
`;

export const CountBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.78rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.small};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.bgApp};
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 2px dashed ${({ theme }) => theme.colors.border};
  margin-top: 10px;
`;

export const EmptyVinylIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
  opacity: 0.6;
`;

export const EmptyTitle = styled.p`
  margin: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const EmptySub = styled.p`
  margin: 6px 0 0 0;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const LibraryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;