import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailPageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px 60px 24px;
`;

export const DetailMainCard = styled.main`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radii.large};
  padding: 36px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const BackButton = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export const AlbumDetailContent = styled.div`
  display: flex;
  gap: 36px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AlbumCoverStage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: ${({ theme }) => theme.radii.medium};
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
`;

export const DetailCoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AlbumInfoStage = styled.div`
  flex: 1;
`;

export const GenrePill = styled.span`
  background-color: ${({ theme }) => theme.colors.badgeBg};
  color: ${({ theme }) => theme.colors.badgeText};
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.small};
  font-size: 0.8rem;
  font-weight: 600;
`;

export const DetailAlbumTitle = styled.h1`
  font-size: 2.2rem;
  margin: 12px 0 4px 0;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const DetailArtistName = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 20px 0;
  font-weight: 600;
`;

export const DetailMetaGrid = styled.div`
  p {
    margin: 6px 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.95rem;
  }
`;

export const AlbumDescription = styled.div`
  margin-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 16px;

  h3 {
    font-size: 1rem;
    margin: 0 0 8px 0;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    line-height: 1.5;
    max-height: 180px;
    overflow-y: auto;
  }
`;

export const StatusNotice = styled.div`
  padding: 30px;
  border-radius: ${({ theme }) => theme.radii.medium};
  text-align: center;
  background-color: ${({ isError, theme }) => (isError ? theme.colors.errorBg : theme.colors.inputBg)};
  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.errorBorder : theme.colors.border)};
  color: ${({ isError, theme }) => (isError ? theme.colors.errorText : theme.colors.textSecondary)};

  p {
    margin: 0 0 12px 0;
    font-weight: 600;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.radii.pill};
    font-weight: 600;
    cursor: pointer;
  }
`;