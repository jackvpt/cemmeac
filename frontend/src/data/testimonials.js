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
    date: "2026-01-28",
    content:
      "Renouvellement de classe une récent. Cabinet de médecine aéronautique très bien équipé, notamment pour la vision, qui permet un suivi de grande qualité. Médecin au riche passé aéronautique, passionné et à l’écoute, je recommande particulièrement.",
    rating: 5,
  },
]

export const testimonials = [...rawTestimonials].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
)
