
const movies = [
  // ===== TERROR =====
  {
    id: 1,
    title: "Nosferatu",
    year: 2025,
    type: "movie",
    category: "Terror",
    rating: 7.9,
    featured: true,
    genres: ["Terror", "Drama", "Fantasía"],
    description: "Una obsesión gótica entre una joven acosada y el aterrador vampiro enamorado de ella, causando horror indecible a su paso.",
    poster: "https://image.tmdb.org/t/p/w500/hgA5hN1TjRfMgHxs4MChx8VMv3Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/vZm6Eo7MURipDkJu7BeAeM4hVFo.jpg",
    duration: "2h 12min",
    director: "Robert Eggers"
  },
  {
    id: 2,
    title: "The Monkey",
    year: 2025,
    type: "movie",
    category: "Terror",
    rating: 6.5,
    featured: false,
    genres: ["Terror", "Comedia"],
    description: "Cuando los hermanos gemelos Hal y Bill encuentran un mono de juguete de su padre, una serie de muertes horribles comienzan a ocurrir a su alrededor.",
    poster: "https://image.tmdb.org/t/p/w500/b7Y5p0hwhtdRO9iPGv7HqmEZ3Kp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/u0akMEfhZ5VCNiCP5VwLNsRLjTI.jpg",
    duration: "1h 38min",
    director: "Osgood Perkins"
  },
  {
    id: 3,
    title: "M3GAN 2.0",
    year: 2025,
    type: "movie",
    category: "Terror",
    rating: 6.8,
    featured: false,
    genres: ["Terror", "Sci-Fi", "Thriller"],
    description: "La muñeca robótica M3GAN regresa más inteligente, más fuerte y más mortífera que nunca en esta secuela de terror tecnológico.",
    poster: "https://image.tmdb.org/t/p/w500/mIDMvrgKj8JjSTaKJMf2s7NECdM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mIDMvrgKj8JjSTaKJMf2s7NECdM.jpg",
    duration: "1h 42min",
    director: "Gerard Johnstone"
  },
  {
    id: 4,
    title: "28 Years Later",
    year: 2025,
    type: "movie",
    category: "Terror",
    rating: 7.5,
    featured: true,
    genres: ["Terror", "Acción", "Drama"],
    description: "En una isla aislada conectada a tierra firme por una calzada, un grupo de supervivientes vive casi tres décadas después del virus de la rabia.",
    poster: "https://image.tmdb.org/t/p/w500/dT8knVOBbnduYXeMkzsCbx57tIy.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/pOHicTKjzVfDaaB2xGi97JjfEcL.jpg",
    duration: "2h 21min",
    director: "Danny Boyle"
  },
  {
    id: 5,
    title: "The Conjuring: Last Rites",
    year: 2026,
    type: "movie",
    category: "Terror",
    rating: 7.2,
    featured: false,
    genres: ["Terror", "Misterio", "Thriller"],
    description: "Ed y Lorraine Warren enfrentan su caso más aterrador hasta la fecha en la conclusión final de la saga de terror sobrenatural.",
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    duration: "2h 5min",
    director: "Michael Chaves"
  },

  // ===== SUSPENSE =====
  {
    id: 10,
    title: "Black Bag",
    year: 2025,
    type: "movie",
    category: "Suspense",
    rating: 7.4,
    featured: false,
    genres: ["Suspense", "Drama", "Thriller"],
    description: "Un espía de inteligencia descubre que su esposa podría ser una traidora y se ve obligado a elegir entre su deber y su amor.",
    poster: "https://image.tmdb.org/t/p/w500/cEwmXRkShveQFIJDPQIJMKfJF0v.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/cEwmXRkShveQFIJDPQIJMKfJF0v.jpg",
    duration: "1h 53min",
    director: "Steven Soderbergh"
  },
  {
    id: 11,
    title: "Mission: Impossible – The Final Reckoning",
    year: 2025,
    type: "movie",
    category: "Suspense",
    rating: 8.2,
    featured: true,
    genres: ["Acción", "Suspense", "Aventura"],
    description: "Ethan Hunt se enfrenta a su misión más peligrosa: una amenaza que pone en jaque a toda la humanidad en la conclusión épica de la saga.",
    poster: "https://image.tmdb.org/t/p/w500/z0GjufCxMjCPL4CmzPOofJN1vx0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/z0GjufCxMjCPL4CmzPOofJN1vx0.jpg",
    duration: "2h 49min",
    director: "Christopher McQuarrie"
  },
  {
    id: 12,
    title: "Liar's Circus",
    year: 2026,
    type: "movie",
    category: "Suspense",
    rating: 7.0,
    featured: false,
    genres: ["Suspense", "Drama"],
    description: "Un periodista infiltrado en un oscuro circo político descubre una conspiración que pone en peligro su vida y la democracia.",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
    duration: "2h 10min",
    director: "David Fincher"
  },
  {
    id: 13,
    title: "Wake Up Dead Man: A Knives Out Mystery",
    year: 2025,
    type: "movie",
    category: "Suspense",
    rating: 7.8,
    featured: true,
    genres: ["Suspense", "Misterio", "Comedia"],
    description: "El detective Benoit Blanc investiga un nuevo caso de asesinato entre un grupo de sospechosos en un entorno religioso aislado.",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    duration: "2h 15min",
    director: "Rian Johnson"
  },
  {
    id: 14,
    title: "The Woman in the Yard",
    year: 2025,
    type: "movie",
    category: "Suspense",
    rating: 6.9,
    featured: false,
    genres: ["Suspense", "Terror", "Drama"],
    description: "Una viuda en duelo es aterrorizada por una misteriosa mujer que aparece en su jardín y que parece conocer todos sus secretos.",
    poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
    duration: "1h 45min",
    director: "Jaume Collet-Serra"
  },

  // ===== DRAMA =====
  {
    id: 20,
    title: "The Alto Knights",
    year: 2025,
    type: "movie",
    category: "Drama",
    rating: 7.6,
    featured: false,
    genres: ["Drama", "Crimen"],
    description: "La rivalidad entre dos de los jefes mafiosos más poderosos de Nueva York, Frank Costello y Vito Genovese, interpretados por Robert De Niro.",
    poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
    duration: "2h 15min",
    director: "Barry Levinson"
  },
  {
    id: 21,
    title: "Sinners",
    year: 2025,
    type: "movie",
    category: "Drama",
    rating: 8.1,
    featured: true,
    genres: ["Drama", "Terror", "Fantasía"],
    description: "Dos hermanos gemelos regresan a su pueblo natal en el sur profundo para comenzar una nueva vida, pero descubren que un antiguo mal acecha la región.",
    poster: "https://image.tmdb.org/t/p/w500/dKFaECtqxkYnRYIKFBR4usEfOFP.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dKFaECtqxkYnRYIKFBR4usEfOFP.jpg",
    duration: "2h 17min",
    director: "Ryan Coogler"
  },
  {
    id: 22,
    title: "September 5",
    year: 2025,
    type: "movie",
    category: "Drama",
    rating: 7.5,
    featured: false,
    genres: ["Drama", "Historia"],
    description: "La historia de cómo un equipo de televisión de ABC Sports cubrió el ataque terrorista durante los Juegos Olímpicos de Múnich de 1972.",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/AaV1YIdWKRUzEMqMYTNDIVgSMSp.jpg",
    duration: "1h 35min",
    director: "Tim Fehlbaum"
  },
  {
    id: 23,
    title: "The Brutalist",
    year: 2025,
    type: "movie",
    category: "Drama",
    rating: 8.5,
    featured: true,
    genres: ["Drama"],
    description: "Un arquitecto judío húngaro emigra a Estados Unidos tras la Segunda Guerra Mundial y lucha por reconstruir su carrera y su vida.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK1DVfjko.jpg",
    duration: "3h 35min",
    director: "Brady Corbet"
  },
  {
    id: 24,
    title: "Anora",
    year: 2025,
    type: "movie",
    category: "Drama",
    rating: 8.0,
    featured: false,
    genres: ["Drama", "Comedia", "Romance"],
    description: "Una joven trabajadora sexual de Brooklyn se casa impulsivamente con el hijo de un oligarca ruso, desatando una cadena de eventos caóticos.",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fMBs5CXKF4lik8M1JAF20RQI8AG.jpg",
    duration: "2h 19min",
    director: "Sean Baker"
  },

  // ===== HISTÓRICAS =====
  {
    id: 30,
    title: "Gladiator II",
    year: 2025,
    type: "movie",
    category: "Históricas",
    rating: 7.8,
    featured: true,
    genres: ["Acción", "Drama", "Historia"],
    description: "Años después de presenciar la muerte de Máximo, Lucio se ve obligado a entrar en el Coliseo tras ser conquistado su hogar por tiranos emperadores.",
    poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    duration: "2h 28min",
    director: "Ridley Scott"
  },
  {
    id: 31,
    title: "Napoleon (Director's Cut)",
    year: 2025,
    type: "movie",
    category: "Históricas",
    rating: 7.3,
    featured: false,
    genres: ["Drama", "Historia", "Guerra"],
    description: "El corte extendido del director ofrece una visión más profunda de la ascensión y caída de Napoleón Bonaparte.",
    poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nez7S.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    duration: "3h 23min",
    director: "Ridley Scott"
  },
  {
    id: 32,
    title: "The Order",
    year: 2025,
    type: "movie",
    category: "Históricas",
    rating: 7.1,
    featured: false,
    genres: ["Drama", "Crimen", "Historia"],
    description: "Un agente del FBI investiga una serie de robos y asesinatos vinculados a un grupo supremacista blanco en los años 80 en el noroeste del Pacífico.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlMFUwHCmRBCFo.jpg",
    duration: "2h 0min",
    director: "Justin Kurzel"
  },
  {
    id: 33,
    title: "Pharaoh",
    year: 2026,
    type: "movie",
    category: "Históricas",
    rating: 7.4,
    featured: false,
    genres: ["Drama", "Historia", "Aventura"],
    description: "La épica historia de Ramsés II y su lucha por mantener el mayor imperio del mundo antiguo frente a enemigos internos y externos.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    duration: "2h 40min",
    director: "Denis Villeneuve"
  },

  // ===== COMEDIAS =====
  {
    id: 40,
    title: "Bridget Jones: Mad About the Boy",
    year: 2025,
    type: "movie",
    category: "Comedias",
    rating: 7.0,
    featured: false,
    genres: ["Comedia", "Romance", "Drama"],
    description: "Bridget Jones navega la vida como madre viuda mientras intenta encontrar el amor de nuevo en la era de las apps de citas y las redes sociales.",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlYj2O0gkHVcB0KMSIY7y.jpg",
    duration: "2h 5min",
    director: "Michael Morris"
  },
  {
    id: 41,
    title: "The Wedding Bandit",
    year: 2026,
    type: "movie",
    category: "Comedias",
    rating: 6.8,
    featured: false,
    genres: ["Comedia", "Romance"],
    description: "Una ladrona profesional se infiltra en bodas de lujo para robar regalos, pero todo se complica cuando se enamora de uno de los novios.",
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
    duration: "1h 48min",
    director: "Taika Waititi"
  },
  {
    id: 42,
    title: "Good Fortune",
    year: 2026,
    type: "movie",
    category: "Comedias",
    rating: 7.2,
    featured: true,
    genres: ["Comedia", "Drama"],
    description: "Un hombre que gana la lotería descubre que el dinero no puede comprar la felicidad en esta hilarante reflexión sobre la riqueza y los valores.",
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iICfelNPbQSOSi0pfGaw7xQrCAh.jpg",
    duration: "1h 55min",
    director: "Greta Gerwig"
  },
  {
    id: 43,
    title: "Karate Kid: Legends",
    year: 2025,
    type: "movie",
    category: "Comedias",
    rating: 6.9,
    featured: false,
    genres: ["Comedia", "Acción", "Familiar"],
    description: "Un joven prodigio del kung fu de Pekín se muda a Nueva York y une fuerzas con un nuevo mentor en esta mezcla de artes marciales y humor.",
    poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
    duration: "1h 54min",
    director: "Jonathan Entwistle"
  },

  // ===== INFANTILES =====
  {
    id: 50,
    title: "Elio",
    year: 2025,
    type: "movie",
    category: "Infantiles",
    rating: 7.5,
    featured: true,
    genres: ["Animación", "Aventura", "Sci-Fi"],
    description: "Un niño con una imaginación desbordante es transportado misteriosamente al espacio donde es confundido con el embajador de la Tierra.",
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsNBBngSAb6w2p70SQ7eR.jpg",
    duration: "1h 40min",
    director: "Adrian Molina"
  },
  {
    id: 51,
    title: "Dog Man",
    year: 2025,
    type: "movie",
    category: "Infantiles",
    rating: 7.3,
    featured: false,
    genres: ["Animación", "Comedia", "Acción"],
    description: "Un policía y su perro se fusionan en un superhéroe mitad humano, mitad perro que lucha contra el crimen y un gato villano llamado Petey.",
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    duration: "1h 31min",
    director: "Peter Hastings"
  },
  {
    id: 52,
    title: "Zootopia 2",
    year: 2025,
    type: "movie",
    category: "Infantiles",
    rating: 7.8,
    featured: true,
    genres: ["Animación", "Aventura", "Comedia"],
    description: "Judy Hopps y Nick Wilde regresan en una nueva aventura en Zootopia cuando una misteriosa amenaza pone en peligro la convivencia entre especies.",
    poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    duration: "1h 38min",
    director: "Byron Howard"
  },
  {
    id: 53,
    title: "How to Train Your Dragon",
    year: 2025,
    type: "movie",
    category: "Infantiles",
    rating: 7.6,
    featured: false,
    genres: ["Aventura", "Fantasía", "Familiar"],
    description: "La versión live-action de la historia de Hipo y Desdentao, un joven vikingo que desafía las tradiciones de su pueblo al hacerse amigo de un dragón.",
    poster: "https://image.tmdb.org/t/p/w500/b7Y5p0hwhtdRO9iPGv7HqmEZ3Kp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/u0akMEfhZ5VCNiCP5VwLNsRLjTI.jpg",
    duration: "1h 44min",
    director: "Dean DeBlois"
  }
];

const tvShows = [
  // ===== NETFLIX =====
  {
    id: 101,
    title: "Stranger Things 5",
    year: 2025,
    type: "series",
    platform: "Netflix",
    category: "Drama",
    rating: 9.0,
    featured: true,
    genres: ["Drama", "Fantasía", "Terror"],
    description: "La batalla final contra el Mundo del Revés llega a su conclusión épica. Eleven y sus amigos se enfrentan a su mayor amenaza.",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlYj2O0gkHVcB0KMSIY7y.jpg",
    seasons: 5,
    episodes: 8
  },
  {
    id: 102,
    title: "Wednesday S2",
    year: 2025,
    type: "series",
    platform: "Netflix",
    category: "Suspense",
    rating: 8.3,
    featured: true,
    genres: ["Comedia", "Crimen", "Fantasía"],
    description: "Wednesday Addams regresa a la Academia Nevermore para enfrentar nuevos misterios y una amenaza sobrenatural más oscura que nunca.",
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsNBBngSAb6w2p70SQ7eR.jpg",
    seasons: 2,
    episodes: 8
  },
  {
    id: 103,
    title: "Squid Game 3",
    year: 2025,
    type: "series",
    platform: "Netflix",
    category: "Suspense",
    rating: 8.5,
    featured: true,
    genres: ["Suspense", "Drama", "Thriller"],
    description: "La temporada final del fenómeno surcoreano. Gi-hun regresa para enfrentar las últimas y más mortales rondas del juego.",
    poster: "https://image.tmdb.org/t/p/w500/dKFaECtqxkYnRYIKFBR4usEfOFP.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dKFaECtqxkYnRYIKFBR4usEfOFP.jpg",
    seasons: 3,
    episodes: 7
  },
  {
    id: 104,
    title: "Black Mirror S7",
    year: 2025,
    type: "series",
    platform: "Netflix",
    category: "Suspense",
    rating: 8.1,
    featured: false,
    genres: ["Sci-Fi", "Drama", "Thriller"],
    description: "Nuevas historias distópicas que exploran el lado oscuro de la tecnología y la naturaleza humana en escenarios cada vez más perturbadores.",
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    seasons: 7,
    episodes: 6
  },

  // ===== HBO =====
  {
    id: 110,
    title: "The Last of Us S3",
    year: 2026,
    type: "series",
    platform: "HBO",
    category: "Drama",
    rating: 8.9,
    featured: true,
    genres: ["Drama", "Acción", "Aventura"],
    description: "Joel y Ellie continúan su viaje en un mundo post-apocalíptico mientras las consecuencias de sus decisiones pasadas los persiguen.",
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    seasons: 3,
    episodes: 8
  },
  {
    id: 111,
    title: "House of the Dragon S3",
    year: 2026,
    type: "series",
    platform: "HBO",
    category: "Drama",
    rating: 8.6,
    featured: true,
    genres: ["Drama", "Fantasía", "Acción"],
    description: "La Danza de los Dragones se intensifica mientras los Targaryen luchan por el Trono de Hierro en la batalla más devastadora de Poniente.",
    poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    seasons: 3,
    episodes: 8
  },
  {
    id: 112,
    title: "Euphoria S3",
    year: 2026,
    type: "series",
    platform: "HBO",
    category: "Drama",
    rating: 8.0,
    featured: false,
    genres: ["Drama"],
    description: "La esperada tercera temporada sigue a Rue y sus amigos mientras enfrentan las consecuencias de sus decisiones en la edad adulta temprana.",
    poster: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
    seasons: 3,
    episodes: 8
  },
  {
    id: 113,
    title: "The White Lotus S3",
    year: 2025,
    type: "series",
    platform: "HBO",
    category: "Comedias",
    rating: 8.4,
    featured: false,
    genres: ["Comedia", "Drama"],
    description: "Un nuevo grupo de huéspedes adinerados llega a un lujoso resort en Tailandia donde las tensiones y los secretos estallan bajo el sol tropical.",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fMBs5CXKF4lik8M1JAF20RQI8AG.jpg",
    seasons: 3,
    episodes: 8
  },

  // ===== MOVISTAR =====
  {
    id: 120,
    title: "La Mesías S2",
    year: 2025,
    type: "series",
    platform: "Movistar",
    category: "Drama",
    rating: 7.8,
    featured: false,
    genres: ["Drama", "Musical"],
    description: "La segunda temporada sigue el ascenso mediático de la familia y las consecuencias de la fama en una historia basada en hechos reales.",
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iICfelNPbQSOSi0pfGaw7xQrCAh.jpg",
    seasons: 2,
    episodes: 8
  },
  {
    id: 121,
    title: "Querer",
    year: 2025,
    type: "series",
    platform: "Movistar",
    category: "Drama",
    rating: 8.0,
    featured: true,
    genres: ["Drama", "Thriller"],
    description: "Una mujer decide denunciar a su marido por violación tras treinta años de matrimonio, desatando un terremoto familiar y social.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    seasons: 1,
    episodes: 6
  },
  {
    id: 122,
    title: "Celeste",
    year: 2025,
    type: "series",
    platform: "Movistar",
    category: "Suspense",
    rating: 7.5,
    featured: false,
    genres: ["Suspense", "Drama", "Musical"],
    description: "Una famosa cantante recibe amenazas de muerte y una periodista investiga el caso mientras descubre oscuros secretos de la industria musical.",
    poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
    seasons: 1,
    episodes: 6
  },

  // ===== APPLE TV+ =====
  {
    id: 130,
    title: "Severance S2",
    year: 2025,
    type: "series",
    platform: "Apple",
    category: "Suspense",
    rating: 9.1,
    featured: true,
    genres: ["Suspense", "Sci-Fi", "Drama"],
    description: "Mark Scout y sus compañeros de Lumon descubren las terribles consecuencias de la separación mientras intentan desentrañar los misterios de la empresa.",
    poster: "https://image.tmdb.org/t/p/w500/hgA5hN1TjRfMgHxs4MChx8VMv3Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/vZm6Eo7MURipDkJu7BeAeM4hVFo.jpg",
    seasons: 2,
    episodes: 10
  },
  {
    id: 131,
    title: "Silo S3",
    year: 2026,
    type: "series",
    platform: "Apple",
    category: "Suspense",
    rating: 8.5,
    featured: true,
    genres: ["Sci-Fi", "Drama", "Thriller"],
    description: "Juliette descubre la verdad sobre el mundo exterior mientras los habitantes del Silo se enfrentan a revelaciones que cambiarán todo lo que conocen.",
    poster: "https://image.tmdb.org/t/p/w500/b7Y5p0hwhtdRO9iPGv7HqmEZ3Kp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/u0akMEfhZ5VCNiCP5VwLNsRLjTI.jpg",
    seasons: 3,
    episodes: 10
  },
  {
    id: 132,
    title: "The Morning Show S4",
    year: 2025,
    type: "series",
    platform: "Apple",
    category: "Drama",
    rating: 7.9,
    featured: false,
    genres: ["Drama"],
    description: "El equipo de UBA Day se enfrenta a nuevos escándalos mediáticos y desafíos personales en la era de la inteligencia artificial y las fake news.",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
    seasons: 4,
    episodes: 10
  },

  // ===== PRIME VIDEO =====
  {
    id: 140,
    title: "Reacher S3",
    year: 2025,
    type: "series",
    platform: "Prime",
    category: "Suspense",
    rating: 8.1,
    featured: false,
    genres: ["Acción", "Suspense", "Crimen"],
    description: "Jack Reacher investiga una serie de asesinatos conectados a una organización criminal internacional en su aventura más peligrosa.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyFAJlMFUwHCmRBCFo.jpg",
    seasons: 3,
    episodes: 8
  },
  {
    id: 141,
    title: "The Lord of the Rings: The Rings of Power S3",
    year: 2026,
    type: "series",
    platform: "Prime",
    category: "Drama",
    rating: 8.3,
    featured: true,
    genres: ["Fantasía", "Drama", "Aventura"],
    description: "Sauron consolida su poder mientras los reinos de la Tierra Media se preparan para la guerra definitiva contra la oscuridad.",
    poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nez7S.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    seasons: 3,
    episodes: 8
  },
  {
    id: 142,
    title: "Fallout S2",
    year: 2026,
    type: "series",
    platform: "Prime",
    category: "Suspense",
    rating: 8.4,
    featured: true,
    genres: ["Sci-Fi", "Aventura", "Drama"],
    description: "Los supervivientes del páramo postapocalíptico exploran nuevas regiones y descubren los secretos de Vault-Tec en esta aclamada adaptación.",
    poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
    seasons: 2,
    episodes: 8
  },

  // ===== DISNEY+ =====
  {
    id: 150,
    title: "Andor S2",
    year: 2025,
    type: "series",
    platform: "Disney",
    category: "Drama",
    rating: 8.7,
    featured: true,
    genres: ["Sci-Fi", "Drama", "Acción"],
    description: "Los eventos que conducen directamente a Rogue One mientras Cassian Andor se convierte en el espía rebelde que cambiará la galaxia.",
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
    seasons: 2,
    episodes: 12
  },
  {
    id: 151,
    title: "Daredevil: Born Again",
    year: 2025,
    type: "series",
    platform: "Disney",
    category: "Suspense",
    rating: 8.5,
    featured: true,
    genres: ["Acción", "Crimen", "Drama"],
    description: "Matt Murdock y Wilson Fisk retoman su guerra en las calles de Nueva York en esta esperada continuación de la saga del Diablo de Hell's Kitchen.",
    poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    seasons: 1,
    episodes: 9
  },
  {
    id: 152,
    title: "Percy Jackson S2",
    year: 2026,
    type: "series",
    platform: "Disney",
    category: "Infantiles",
    rating: 7.8,
    featured: false,
    genres: ["Fantasía", "Aventura", "Familiar"],
    description: "Percy, Annabeth y Grover regresan en El Mar de los Monstruos, enfrentando nuevos retos mitológicos para salvar el Campamento Mestizo.",
    poster: "https://image.tmdb.org/t/p/w500/mIDMvrgKj8JjSTaKJMf2s7NECdM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mIDMvrgKj8JjSTaKJMf2s7NECdM.jpg",
    seasons: 2,
    episodes: 8
  }
];

// ===== EXPORTS =====
export const getMovies = () => movies;
export const getTvShows = () => tvShows;
export const getAllMedia = () => [...movies, ...tvShows];
export const getFeatured = () => getAllMedia().filter(m => m.featured);
export const getTrending = () => getAllMedia().sort((a, b) => b.rating - a.rating).slice(0, 10);
export const getMediaById = (id) => getAllMedia().find(m => m.id === id);

// Categorías de películas
export const getMovieCategories = () => ["Terror", "Suspense", "Drama", "Históricas", "Comedias", "Infantiles"];
export const getMoviesByCategory = (category) => movies.filter(m => m.category === category);

// Plataformas de series
export const getPlatforms = () => ["Netflix", "HBO", "Movistar", "Apple", "Prime", "Disney"];
export const getSeriesByPlatform = (platform) => tvShows.filter(s => s.platform === platform);

// Categorías de series
export const getSeriesCategories = () => [...new Set(tvShows.map(s => s.category))];

export const searchMedia = (query) => {
  const q = query.toLowerCase();
  return getAllMedia().filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genres.some(g => g.toLowerCase().includes(q)) ||
    (m.platform && m.platform.toLowerCase().includes(q)) ||
    (m.category && m.category.toLowerCase().includes(q))
  );
};

export const getYears = () => {
  const years = [...new Set(getAllMedia().map(m => m.year))];
  return years.sort((a, b) => b - a);
};
