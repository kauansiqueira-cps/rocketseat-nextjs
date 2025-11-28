'use client';

import { useEffect, useState } from 'react';
import { MovieGrid } from '@/components/movie-grid';
import { TopicsList } from '@/components/topics-list';
import { Movie } from '../types/movies';

const clientSideIssues = [
  'Possíveis problemas de CORS com algumas APIs',
  'Chave de API exposta no código do lado do cliente',
  'Requisições de rede adicionais do lado do cliente',
  'Estados de carregamento visíveis',
];

export default function ClientSidePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=avengers&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
        );
        const data = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(data.Error || 'Não foi possível obter os filmes.');
        }
      } catch (error) {
        setError(
          'Erro ao buscar filmes: Isso demonstra possíveis problemas de CORS ao buscar diretamente do lado do cliente!'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Obtenção de dados no lado do cliente</h1>

      <TopicsList
        title="Traditional React approach using useEffect and useState. Issues to note:"
        topics={clientSideIssues}
      />

      {isLoading && <div>Loading movies...</div>}
      {!isLoading && !error && <MovieGrid movies={movies} />}
      {!isLoading && error && <div className="text-red-500">{error}</div>}

    </div>
  );
}
