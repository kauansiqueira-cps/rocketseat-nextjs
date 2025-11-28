import { MovieGrid } from '@/components/movie-grid';
import { TopicsList } from '@/components/topics-list';
import { MovieService } from '@/services/movie-service';

const serverBenefits = [
  'Os dados são obtidos no servidor',
  'Não é necessário estado de carregamento (espera do servidor)',
  'Melhor SEO (os dados são incluídos no HTML inicial)',
  'Cache de dados automático',
];

export default async function ServerSidePage() {
  const movies = await MovieService.getAll({
    options: {
      cache: 'force-cache',
    }
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Renderização do lado do servidor</h1>

      <TopicsList
        title="Abordagem dos componentes de servidor do Next.js App Router. Benefícios:"
        topics={serverBenefits}
      />

      <MovieGrid movies={movies} />
    </div>
  );
}
