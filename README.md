# Pulso Website

Site institucional da **Pulso Tecnologia e Serviços** — assistência técnica agrícola, agricultura de precisão e concessionária Topcon em Juara, MT.

**Domínio de produção:** [pulsotecnologiamt.com.br](https://www.pulsotecnologiamt.com.br)

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) 18 + TypeScript
- [React Router](https://reactrouter.com/) 6 (SPA)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Vitest](https://vitest.dev/) (testes)

## Desenvolvimento local

```bash
npm install
npm run dev
```

O servidor de desenvolvimento inicia em `http://localhost:8080` (configurado em `vite.config.ts`).

## Build e preview

```bash
npm run build
npm run preview
```

A saída de produção fica em `dist/`.

## Deploy na Vercel

1. Importe o repositório [magicpageweb/pulso-website](https://github.com/magicpageweb/pulso-website) na Vercel.
2. Use estas configurações:

| Campo | Valor |
|-------|--------|
| Framework Preset | Vite |
| Root Directory | `.` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

3. Após o primeiro deploy, adicione o domínio `pulsotecnologiamt.com.br` e `www.pulsotecnologiamt.com.br` em **Settings → Domains**.
4. Configure os registros DNS no Registro.br conforme indicado pela Vercel (sem alterar MX/TXT de e-mail Locaweb).

O arquivo `vercel.json` na raiz garante que todas as rotas da SPA (`/sobre`, `/servicos`, etc.) sirvam `index.html`.

## Estrutura principal

```
public/          # favicons, robots.txt, sitemap.xml, og-image
src/
  pages/         # Início, Sobre, Serviços, Marcas, Contato
  components/    # Header, Footer, Layout, etc.
```

## Licença

Projeto privado — Pulso Tecnologia e Serviços / RMX Agência.
