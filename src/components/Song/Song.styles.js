import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VinylSleeveCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const CoverArt = styled.div`
  width: 76px;
  height: 76px;
  border-radius: ${({ theme }) => theme.radii.small};
  background-color: ${({ coverBg }) => coverBg || '#E2D9F3'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
`;

export const AlbumCoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VinylCenterSticker = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: 4px solid #ffffff;
`;

export const VinylCardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SongTitleLink = styled(Link)`
  text-decoration: none;
`;

export const SongTitle = styled.h4`
  margin: 0 0 2px 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMain};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SongArtist = styled.p`
  margin: 0 0 2px 0;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const SongMeta = styled.p`
  margin: 0 0 10px 0;
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DetailsLink = styled(Link)`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SpindlePillBtn = styled.button`
  background-color: ${({ isAdded, theme }) => 
    isAdded ? theme.colors.badgeBg : theme.colors.primary};
  color: ${({ isAdded, theme }) => 
    isAdded ? theme.colors.badgeText : '#FFFFFF'};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 6px 14px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: ${({ isAdded }) => (isAdded ? 'default' : 'pointer')};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ isAdded, theme }) => 
      isAdded ? theme.colors.badgeBg : theme.colors.primaryHover};
  }
`;