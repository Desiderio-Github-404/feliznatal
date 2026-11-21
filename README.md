# Como Preparar o Melhor Natal de Sempre

Site estático em HTML, CSS e JavaScript puros. Não precisa de instalações, frameworks, anúncios ou serviços externos.

## Como alterar um link

1. Abre o ficheiro `links.js` no GitHub.
2. Procura o botão pelo seu `id` (por exemplo, `playlist_portugues`).
3. Substitui o valor vazio de `url: ""` pelo link completo, mantendo as aspas.
4. Guarda a alteração com **Commit changes**.

Exemplo:

```js
{ id: "playlist_portugues", name: "Natal em Português", icon: "🎶", description: "Músicas natalícias na nossa língua.", url: "https://www.youtube.com/playlist?list=..." }
```

São aceites apenas links de `youtube.com`, `youtu.be`, `drive.google.com` e `docs.google.com`. Links de outros domínios não serão activados. Os botões sem link mostram **Em breve**.

## Checklist

O progresso da checklist é guardado localmente no próprio navegador/telemóvel através de `localStorage`. Se os dados do navegador forem apagados, o progresso também poderá desaparecer.

## Publicação

O projecto pode ser publicado directamente no GitHub Pages ou importado na Vercel como site estático. Na Vercel, usa a raiz do repositório como pasta do projecto e deixa os campos de build command e output directory vazios (não há etapa de build).

## Nota sobre o código de acesso

Existe uma opção desligada em `links.js`. Não é segurança real: qualquer código colocado no JavaScript fica visível para quem inspeccionar os ficheiros do site. Não uses esta opção para proteger conteúdo confidencial.
