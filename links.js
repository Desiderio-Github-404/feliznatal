/* Altera apenas os valores de "url". Deixa "" enquanto não houver link.
   Domínios permitidos: youtube.com, youtu.be, drive.google.com e docs.google.com. */
window.NATAL_LINKS = {
  playlists: [
    { id: "playlist_classicos", name: "Clássicos de Natal", icon: "🎅", description: "As canções que fazem parte da tradição." , url: "" },
    { id: "playlist_portugues", name: "Natal em Português", icon: "🎶", description: "Músicas natalícias na nossa língua.", url: "https://youtube.com/playlist?list=PLCwAHfhr-Gc-GAB61potMEXOD9So7CrRR&si=DLe_bSS-Jx9wjDgc" },
    { id: "playlist_instrumental", name: "Natal Instrumental", icon: "🎹", description: "Três seleções de música instrumental natalícia para criar um ambiente especial.", url: "https://youtube.com/playlist?list=PLBm7O-LjARXj0kqXC7xmPiD78mmBayB3g&si=Nh4NluDXngwTjvau", extraLinks: [ { id: "playlist_instrumental_video_1", name: "Instrumental Natal 1", url: "https://youtu.be/9DlD7-TykIU?si=JUgXyreLUb8qknrV" }, { id: "playlist_instrumental_video_2", name: "Instrumental Natal 2", url: "https://youtu.be/mxm_VhOLVI0?si=W7K7Ywr5Y-yjh-ch" } ] },
    { id: "playlist_criancas", name: "Natal das Crianças", icon: "🧸", description: "Músicas infantis gospel e canções natalícias com coreografias para os mais pequenos.", url: "https://youtube.com/playlist?list=PLbNqMENsivpFiA5U0JUvTDTBQbBZgQjI6&si=wDr0E0stV_FxRUFJ", extraLinks: [ { id: "playlist_criancas_coreografias", name: "Músicas de Natal e Coreografias", url: "https://youtube.com/playlist?list=PLUN4t2BVZBbYY8vLa13_qDlzt5CIaDGul&si=QYJzggHF-99XRZUD" } ] },
    { id: "playlist_festa_angolana", name: "Festa Angolana", icon: "🥁", description: "Kizomba natalícia para dar ritmo à celebração.", url: "https://youtu.be/f3GnkzDHj2E?si=lVE6G5PSFj3ltexb" },
    { id: "playlist_gospel", name: "Natal Gospel", icon: "✨", description: "Selecção de músicas e compilações gospel para celebrar o Natal.", url: "https://youtube.com/playlist?list=PLnkieDfYiaprEeikItM1V37mPpPcsRziA&si=nEdyDQKWEXq0oc8N", extraLinks: [ { id: "playlist_gospel_video_1", name: "Compilação Gospel de Natal", url: "https://youtu.be/ZZgcmdzYrC4?si=L6QTIEsyRpuoq1ww" }, { id: "playlist_gospel_playlist_2", name: "Outra playlist Gospel de Natal", url: "https://youtube.com/playlist?list=PLC7uEPZt0yFgGqULuJ28pYyUZrPXvUPOh&si=Q0M1gtf8V9-1HX8b" } ] },
    { id: "playlist_virada_ano", name: "Virada do Ano", icon: "🎆", description: "Mix de kizomba e semba para receber o Ano Novo.", url: "https://youtu.be/GPSzTCKnsrY?si=SJfZORXxouM1dNyo" }
  ],
  films: [
    { id: "trailer_criancas", title: "Natal para Crianças", category: "Crianças", age: "A partir dos 3 anos", description: "Uma escolha divertida para os mais pequenos.", icon: "🧸", url: "" },
    { id: "trailer_familia", title: "Filmes de Natal em Família", category: "Família", age: "A partir dos 6 anos", description: "Filmes e uma playlist especial para reunir a família no Natal.", icon: "🏡", url: "https://youtube.com/playlist?list=PLVtndw4ZBKHV6YtMJZ3hVfjeLnXFcVhP4&si=VXRnFl3Sb7QstFej", extraLinks: [ { id: "trailer_familia_video_1", name: "Filme de Natal em Família 1", url: "https://youtu.be/mXm3IzkwhGc?si=lQiZXmU_RvDNGR3E" }, { id: "trailer_familia_video_2", name: "Filme de Natal em Família 2", url: "https://youtu.be/ihbR2JfqnR0?si=CDMeKv7fujrwOO8c" }, { id: "trailer_familia_video_3", name: "Filme de Natal em Família 3", url: "https://youtu.be/8LeOut2662g?si=xpWVilu8RKVyYEH7" } ] },
    { id: "trailer_comedia", title: "Comédias de Natal", category: "Comédia", age: "A partir dos 10 anos", description: "Boas gargalhadas para animar a noite.", icon: "😂", url: "" },
    { id: "trailer_classicos", title: "Esqueceram de Mim (1990)", category: "Clássicos", age: "A classificação varia", description: "Vídeo do clássico de Natal.", icon: "🎬", buttonLabel: "Abrir vídeo ↗", url: "https://youtu.be/ajsMaZxSBkA?si=DxhzSBcTpShGfIiR" }
  ],
  bonuses: [
    { id: "bonus_ebook_pdf", name: "E-book em PDF", icon: "📘", description: "O guia para organizar o teu Natal." , url: "" },
    { id: "bonus_kit_imprimivel", name: "Kit Imprimível", icon: "🖨️", description: "Materiais práticos para imprimir.", url: "" },
    { id: "bonus_orcamento_sheets", name: "Orçamento de Natal", icon: "📊", description: "Organiza os gastos com mais controlo.", url: "" },
    { id: "bonus_jogos", name: "Jogos de Natal", icon: "🎲", description: "Playlist e vídeos com ideias de jogos para animar a família.", url: "https://youtube.com/playlist?list=PLFeUcBVfwIo3H-jEeiyG5bxVym1CNLu31&si=OmOcSD7sx1sd-IKQ", extraLinks: [ { id: "bonus_jogos_video_1", name: "Ideia de jogo 1", url: "https://youtube.com/shorts/LrXwiFAMl4o?si=LZRufYpix5OxppXJ" }, { id: "bonus_jogos_video_2", name: "Ideia de jogo 2", url: "https://youtube.com/shorts/NGUlh35pAOo?si=2cwXK4MN3AS8OtHN" }, { id: "bonus_jogos_video_3", name: "Ideia de jogo 3", url: "https://youtu.be/ZmhvZYHk0pE?si=PdgLjWLEzQLSpDy0" } ] },
    { id: "bonus_cartoes", name: "Cartões de Natal", icon: "💌", description: "Mensagens especiais para oferecer.", url: "" },
    { id: "bonus_receitas_video", name: "Receitas em Vídeo", icon: "🍲", description: "Receitas de guloseimas, ceia completa, sobremesas e ideias para o menu de Natal.", url: "https://youtu.be/WNNZwia9mng?si=Wl57hx7pwba5ptgZ", extraLinks: [ { id: "bonus_receitas_ceia_cardapio", name: "Ceia de Natal: explicação e cardápio", url: "https://youtu.be/21zWGcSdxYQ?si=wisR3C3CNYPlgDbw" }, { id: "bonus_receitas_sorvete", name: "Sorvete para o Natal", url: "https://youtu.be/D2wGAyN2Pi8?si=PsZyGnMRNXH0upi7" }, { id: "bonus_receitas_ceia_completa", name: "Passo a passo: ceia de Natal completa", url: "https://youtu.be/ER6bnQWqiDc?si=HLOlsmdY9US0JCf1" } ] }
  ]
};

/* Opcional: mantém false. Um código aqui no front-end não é segurança real. */
window.NATAL_ACCESS_CODE_ENABLED = false;
window.NATAL_ACCESS_CODE = "";