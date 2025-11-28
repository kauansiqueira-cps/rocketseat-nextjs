import { MovieGrid } from '@/components/movie-grid';
import { TopicsList } from '@/components/topics-list';
import { MovieService } from '@/services/movie-service';

const staticBenefits = [
  'As páginas são geradas durante a compilação',
  'Carregamento de páginas o mais rápido possível',
  'Perfeito para SEO(Search Engine Optimization)',
  'Ótimo para conteúdo que não muda com frequência',
  'Pode ser revalidado com ISR (Regeneração Estática Incremental)',
];

export default async function StaticPage() {
  const movies = await MovieService.getAll({
    options: {
      revalidate: 60,
    }
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Geração de Sites Estáticos</h1>

      <TopicsList title="Abordagem de geração estática do Next.js. Benefícios:" topics={staticBenefits} />

      <MovieGrid movies={movies} />
    </div>
  );
}
