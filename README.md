# rocketseat-nextjs
Projeto: https://www.youtube.com/live/rdLEeCmIFOY?si=2hXkY9iuIwtg0jgF
#Tipos de Renderização no React e Next.js
Este projeto foi desenvolvido com o objetivo de estudar e demonstrar os principais modelos de renderização utilizados em aplicações modernas com React e Next.js.
Aqui você encontra exemplos práticos de:
  - Client Side Rendering (CSR)
  - Server Side Rendering (SSR)
  - Static Site Generation (SSG)
  - Incremental Static Regeneration (ISR)

Cada abordagem possui características próprias e é utilizada conforme a necessidade da aplicação.
Abaixo está um resumo de cada uma delas.

# Client Side Rendering (CSR)
No Client Side Rendering, toda a lógica de renderização acontece diretamente no navegador do usuário.
O servidor envia apenas um HTML básico.
O JavaScript é carregado e então busca os dados necessários.
A página só aparece completamente após o JavaScript executar.

### Vantagens
Altamente interativo.
Ideal para dashboards, apps com muita lógica no cliente e interfaces dinâmicas.

### Desvantagens
Tela inicial em branco até o JS carregar.
SEO prejudicado, pois o conteúdo não vem pronto no HTML.

# Server Side Rendering (SSR)
No Server Side Rendering, os dados são processados no servidor antes do envio ao cliente.
O usuário recebe um HTML completo logo no primeiro carregamento.
Funciona mesmo com JavaScript desativado.
Melhora SEO e tempo de percepção de carregamento.

### Vantagens
Conteúdo visível imediatamente.
Melhor indexação em mecanismos de busca.

### Desvantagens
Maior custo no servidor, pois cada acesso gera uma renderização.
Pode ser mais lento em páginas muito acessadas.

# Static Site Generation (SSG)
O Static Site Generation gera o HTML durante o build do projeto.
As páginas são pré-renderizadas e servidas diretamente por uma CDN.
Extremamente rápido e barato.
Ideal para conteúdo pouco dinâmico.

### Vantagens
Desempenho máximo.
Custo muito baixo, praticamente zero de processamento por acesso.

### Desvantagens
Requer rebuild para atualizar conteúdos.
Não é ideal para dados que mudam constantemente.

# Incremental Static Regeneration (ISR)
O Incremental Static Regeneration combina a performance do SSG com atualizações automáticas.
Você define um tempo de revalidação (ex.: 60s).
Dentro desse período, todos os usuários recebem a mesma versão em cache.
Após o tempo expirar, o Next.js recria a página em background e atualiza o cache para todos.

### Vantagens
Conteúdo estático com atualização automática.
Escalabilidade muito alta.

### Desvantagens
Atualização não é imediata (depende do tempo de revalidação).
Requer infraestrutura de CDN compatível.

# Tecnologias Utilizadas
React
Next.js
OMDb API (para exemplos de requisições)

# Objetivo do Projeto
Este repositório serve como estudo e demonstração prática dessas diferentes formas de renderização, explicando na prática como cada abordagem funciona e em quais cenários ela deve ser utilizada.
