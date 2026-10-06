import { render, screen, fireEvent } from './test-utils';
import '@testing-library/jest-dom';
import Header from '../components/Header/Header';

describe('Pruebas en el componente Header', () => {
  test('debe renderizar el encabezado correctamente', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('debe permitir escribir en el campo de búsqueda de SearchBar', () => {
    render(<Header />);
    
    // Busca el input del buscador dentro del Header
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();

    // Simula que el usuario escribe un término de búsqueda
    fireEvent.change(searchInput, { target: { value: 'Rock' } });
    expect(searchInput.value).toBe('Rock');
  });
});