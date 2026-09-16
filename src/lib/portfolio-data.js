/**
 * Single source of truth for portfolio content.
 *
 * Per project:
 *   stack  — technology badges shown on cards. Leave empty to fall back to `tags`.
 *   github — repository URL. The "Code" button only renders when this is set.
 *   demo   — live deployment URL. The "Live demo" button only renders when set.
 *   year   — shown in the project ledger so work reads chronologically.
 */
export const projects = [
  {
    slug: 'hiresense',
    number: '01',
    name: 'HireSense',
    year: '2025',
    summary: 'AI-powered resume screening and candidate ranking platform.',
    category: 'AI / ML',
    tags: ['AI/ML', 'Full Stack'],
    stack: [],
    github: '',
    demo: '',
    problem: 'Recruiting teams need a faster way to understand how resumes map to a job description.',
    solution: 'A focused analysis workflow that turns resume and role information into a clearer shortlist.',
    features: ['Resume screening', 'Candidate ranking', 'Job-description analysis'],
    previewImage: undefined,
  },
  {
    slug: 'nano-nanny',
    number: '02',
    name: 'Nano-Nanny',
    year: '2025',
    summary: 'AI-powered healthcare monitoring application.',
    category: 'AI / ML',
    tags: ['AI/ML', 'Healthcare'],
    stack: [],
    github: '',
    demo: '',
    problem: 'Healthcare monitoring benefits from timely, understandable signals.',
    solution: 'An application concept centered on intelligent monitoring and actionable information.',
    features: ['Monitoring workflow', 'AI-assisted insights', 'Care-focused interface'],
    previewImage: undefined,
  },
  {
    slug: 'weather-intelligence',
    number: '03',
    name: 'Weather Intelligence',
    year: '2025',
    summary: 'Real-time weather intelligence and analytics platform.',
    category: 'Data Science',
    tags: ['Data Science', 'Full Stack'],
    stack: [],
    github: '',
    demo: '',
    problem: 'Raw weather data is difficult to interpret at a glance.',
    solution: 'A dashboard direction for turning live conditions into useful intelligence.',
    features: ['Real-time weather data', 'Analytics view', 'Location-aware insights'],
    previewImage: undefined,
  },
  {
    slug: 'fake-news-detection',
    number: '04',
    name: 'Fake News Detection',
    year: '2024',
    summary: 'Machine-learning based fake news classification application.',
    category: 'AI / ML',
    tags: ['AI/ML', 'Data Science'],
    stack: [],
    github: '',
    demo: '',
    problem: 'Readers need help evaluating the credibility of written claims.',
    solution: 'A classification experience for analyzing news text with a machine-learning model.',
    features: ['Text classification', 'Model-driven analysis', 'Simple result feedback'],
    previewImage: undefined,
  },
  {
    slug: 'skillscreen',
    number: '05',
    name: 'SkillScreen',
    year: '2024',
    summary: 'AI-assisted resume and job-description analysis.',
    category: 'Full Stack',
    tags: ['AI/ML', 'Full Stack'],
    stack: [],
    github: '',
    demo: '',
    problem: 'Candidates and teams need a clearer view of skill alignment.',
    solution: 'A practical analysis tool that compares role expectations with resume content.',
    features: ['Skill extraction', 'Resume comparison', 'Role analysis'],
    previewImage: undefined,
  },
]

export const skills = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'SQL'] },
  { label: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'REST APIs'] },
  { label: 'AI / ML', items: ['Machine Learning', 'Data Analysis', 'Generative AI'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

export const experience = [
  {
    label: 'Focus',
    title: 'Software engineering, data science and AI/ML',
    detail: 'Building a foundation across intelligent products, full-stack development and practical machine learning.',
  },
  {
    label: 'Practice',
    title: 'Projects that turn data into decisions',
    detail: 'Exploring interfaces and systems that make complex information easier to understand and act on.',
  },
  {
    label: 'Direction',
    title: 'Internships, hackathons and research',
    detail: 'Open to opportunities where careful engineering and curiosity can create something useful.',
  },
]

/* Contact + profile links. Empty values are skipped everywhere they're used,
   so filling one in is all it takes to make it appear across the site. */
export const social = {
  github: 'https://github.com/LakshayAggarwal12',
  linkedin: '',
  resume: '',
  email: 'hello@lakshay.dev',
}

export const getProject = (slug) => projects.find((project) => project.slug === slug)

export const getProjectNeighbours = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: null, next: null }
  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
