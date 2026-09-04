const rawTestimonials = [
  {
    name: "Pierre P",
    date: "2025-12-15",
    content:
      "Excellent accueil de la part du docteur Lely et de son équipe, un centre très bien équipé (et décoré également).",
    rating: 5,
  },
  {
    name: "Jacques V",
    date: "2025-11-10",
    content:
      "Je connais le Dr Lely depuis de nombreuses années et je suis toujours très satisfait de ses services professionnels et attentionnés.",
    rating: 5,
  },
  {
    name: "JD V",
    date: "2026-01-05",
    content:
      "Renouvellement de classe une récent. Cabinet de médecine aéronautique très bien équipé, notamment pour la vision, qui permet un suivi de grande qualité. Médecin au riche passé aéronautique, passionné et à l’écoute, je recommande particulièrement.",
    rating: 5,
  },
  {
    name: "Louis J",
    date: "2026-06-04",
    content:
      "Renouvellement d’aptitude médicale 1 ce jour. Accueil très agréable puis 1h30 à enchaîner les examens avec le docteur Lely. Fort d’une grand expérience, j’ai trouvé les échanges très agréables et intéressants. C’est un médecin professionnel, sympathique et passionné par la chose aéronautique. La visite se fait dans de bonnes conditions et en confiance. Je recommande.",
    rating: 5,
  },
  {
    name: "Gwendal B",
    date: "2026-06-24",
    content:
      "Très bonne expérience au cabinet du docteur Laurent Lely. Le cabinet est agréable, accueillant, et décoré dans un esprit clairement aéronautique. On sent tout de suite que cet univers n’est pas là par hasard, mais qu’il reflète une vraie passion, ce qui est particulièrement appréciable pour le personnel navigant. L’accueil par le secrétariat médical est également très professionnel, avec une prise en charge attentive et efficace dès la prise de rendez-vous. Le docteur Lely prend le temps de recevoir, d’écouter et d’expliquer les choses clairement. Il sait de quoi il parle, avec une vraie compétence et une connaissance approfondie du monde aéronautique. Le cabinet est aussi très bien équipé, ce qui renforce l’impression de sérieux lors des examens réalisés sur place. On sent que les choses sont faites correctement, avec méthode et rigueur. J’ai également apprécié son approche personnalisée : on n’a pas du tout l’impression d’être traité “à la chaîne”. Il prend le temps d’étudier chaque situation, de répondre aux questions et de rendre les explications accessibles, sans jargon médical incompréhensible. Un médecin compétent, sérieux, pédagogue et humain. Je recommande sans hésiter.",
    rating: 5,
  },
  {
    name: "Sylvain B",
    date: "2026-08-08",
    content:
      "",
    rating: 5,
  },
]

export const testimonials = [...rawTestimonials].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
)
