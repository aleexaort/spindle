import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const defaultCatalog = [
  {
    id: '2113118',
    title: 'Heathen Chemistry',
    artist: 'Oasis',
    album: 'Indie (2002)',
    genre: 'Indie',
    year: '2002',
    coverImg: 'https://www.theaudiodb.com/images/media/album/thumb/e3lkdt1788171576.jpg',
    coverBg: '#E2D9F3',
    description: 'Heathen Chemistry is the fifth studio album by the English rock band Oasis, released in 2002 through Big Brother Records.'
  },
  {
    id: '2109614',
    title: 'A Rush of Blood to the Head',
    artist: 'Coldplay',
    album: 'Pop-Rock (2002)',
    genre: 'Pop-Rock',
    year: '2002',
    coverImg: 'https://r2.theaudiodb.com/images/media/album/thumb/vsusvs1521243711.jpg',
    coverBg: '#FFE082',
    description: 'A Rush of Blood to the Head is the second studio album by British alternative rock band Coldplay, released in August 2002.'
  },
  {
    id: '2111763',
    title: 'Plastic Beach',
    artist: 'Gorillaz',
    album: 'Alternative Rock (2010)',
    genre: 'Alternative Rock',
    year: '2010',
    coverImg: 'https://r2.theaudiodb.com/images/media/album/thumb/qw3spr1606728409.jpg',
    coverBg: '#FFCCD5',
    description: 'Plastic Beach is the third studio album by British virtual band Gorillaz, released in March 2010 on Parlophone and Virgin Records.'
  },
  {
    id: '2112342',
    title: 'Discovery',
    artist: 'Daft Punk',
    album: 'Electronic (2001)',
    genre: 'Electronic',
    year: '2001',
    coverImg: 'https://r2.theaudiodb.com/images/media/album/thumb/discovery-4e33d0263f458.jpg',
    coverBg: '#C3E8DD',
    description: 'Discovery is the second studio album by French electronic music duo Daft Punk, released in March 2001.'
  }
];

export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (artistName, { rejectWithValue }) => {
    try {
      // AQUÍ ESTÁ EL CAMBIO: cambiamos 'json/2/' por 'json/123/'
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(artistName)}`
      );

      if (!response.ok) {
        throw new Error('Error de conexión con la API');
      }

      const data = await response.json();

      if (!data.album) {
        return [];
      }

      return data.album.map((item) => ({
        id: item.idAlbum,
        title: item.strAlbum,
        artist: item.strArtist,
        album: `${item.strGenre || 'Álbum'} (${item.intYearReleased || 'N/A'})`,
        genre: item.strGenre || 'Música',
        year: item.intYearReleased || 'N/A',
        coverImg: item.strAlbumThumb || 'https://via.placeholder.com/150',
        coverBg: '#E2D9F3',
        description: item.strDescriptionES || item.strDescriptionEN || 'Sin reseña disponible.'
      }));
    } catch (err) {
      return rejectWithValue(err.message || 'Error al obtener canciones');
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: defaultCatalog,
    loading: false,
    error: null,
    currentArtist: 'Catálogo Destacado'
  },
  reducers: {
    resetResults: (state) => {
      state.results = defaultCatalog;
      state.loading = false;
      state.error = null;
      state.currentArtist = 'Catálogo Destacado';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.currentArtist = action.meta.arg;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Ocurrió un error al buscar';
      });
  }
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;