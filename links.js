/* Altera apenas os valores de "url". Deixa "" enquanto não houver link.
   Domínios permitidos: youtube.com, youtu.be, drive.google.com e docs.google.com. */
window.NATAL_LINKS = {
  playlists: [
    { id: "playlist_classicos", name: "Clássicos de Natal", icon: "🎅", description: "As canções que fazem parte da tradição." , url: "" },
    { id: "playlist_portugues", name: "Natal em Português", icon: "🎶", description: "Músicas natalícias na nossa língua.", url: "" },
    { id: "playlist_instrumental", name: "Natal Instrumental", icon: "🎹", description: "Melodias suaves para criar ambiente.", url: "" },
    { id: "playlist_criancas", name: "Natal das Crianças", icon: "🧸", description: "Canções alegres para os mais pequenos.", url: "" },
    { id: "playlist_festa_angolana", name: "Festa Angolana", icon: "🥁", description: "Ritmo e alegria com sabor angolano.", url: "" },
    { id: "playlist_gospel", name: "Natal Gospel", icon: "✨", description: "Louvor, fé e celebração.", url: "" },
    { id: "playlist_virada_ano", name: "Virada do Ano", icon: "🎆", description: "Música para receber o novo ano.", url: "" }
  ],
  films: [
    { id: "trailer_criancas", title: "Natal para Crianças", category: "Crianças", age: "A partir dos 3 anos", description: "Uma escolha divertida para os mais pequenos.", icon: "🧸", url: "" },
    { id: "trailer_familia", title: "Natal em Família", category: "Família", age: "A partir dos 6 anos", description: "Histórias para assistir juntos.", icon: "🏡", url: "" },
    { id: "trailer_comedia", title: "Comédias de Natal", category: "Comédia", age: "A partir dos 10 anos", description: "Boas gargalhadas para animar a noite.", icon: "😂", url: "" },
    { id: "trailer_classicos", title: "Clássicos de Natal", category: "Clássicos", age: "A classificação varia", description: "Histórias intemporais para rever.", icon: "🎬", url: "" }
  ],
  bonuses: [
    { id: "bonus_ebook_pdf", name: "E-book em PDF", icon: "📘", description: "O guia para organizar o teu Natal." , url: "" },
    { id: "bonus_kit_imprimivel", name: "Kit Imprimível", icon: "🖨️", description: "Materiais práticos para imprimir.", url: "" },
    { id: "bonus_orcamento_sheets", name: "Orçamento de Natal", icon: "📊", description: "Organiza os gastos com mais controlo.", url: "" },
    { id: "bonus_jogos", name: "Jogos de Natal", icon: "🎲", description: "Ideias para divertir toda a família.", url: "" },
    { id: "bonus_cartoes", name: "Cartões de Natal", icon: "💌", description: "Mensagens especiais para oferecer.", url: "" },
    { id: "bonus_receitas_video", name: "Receitas em Vídeo", icon: "🍲", description: "Inspiração para a mesa de Natal.", url: "" }
  ]
};

/* Opcional: mantém false. Um código aqui no front-end não é segurança real. */
window.NATAL_ACCESS_CODE_ENABLED = false;
window.NATAL_ACCESS_CODE = "";