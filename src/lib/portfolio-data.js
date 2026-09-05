export const projects = [
  {
    slug: 'hiresense',
    number: '01',
    name: 'HireSense',
    summary: 'AI-powered resume screening and candidate ranking platform.',
    category: 'AI / ML',
    tags: ['AI/ML', 'Full Stack'],
    problem: 'Recruiting teams need a faster way to understand how resumes map to a job description.',
    solution: 'A focused analysis workflow that turns resume and role information into a clearer shortlist.',
    features: ['Resume screening', 'Candidate ranking', 'Job-description analysis'],
    previewImage: undefined,
  },
  {
    slug: 'nano-nanny',
    number: '02',
    name: 'Nano-Nanny',
    summary: 'AI-powered healthcare monitoring application.',
    category: 'AI / ML',
    tags: ['AI/ML', 'Healthcare'],
    problem: 'Healthcare monitoring benefits from timely, understandable signals.',
    solution: 'An application concept centered on intelligent monitoring and actionable information.',
    features: ['Monitoring workflow', 'AI-assisted insights', 'Care-focused interface'],
    previewImage: undefined,
  },
  {
    slug: 'weather-intelligence',
    number: '03',
    name: 'Weather Intelligence',
    summary: 'Real-time weather intelligence and analytics platform.',
    category: 'Data Science',
    tags: ['Data Science', 'Full Stack'],
    problem: 'Raw weather data is difficult to interpret at a glance.',
    solution: 'A dashboard direction for turning live conditions into useful intelligence.',
    features: ['Real-time weather data', 'Analytics view', 'Location-aware insights'],
    previewImage: undefined,
  },
  {
    slug: 'fake-news-detection',
    number: '04',
    name: 'Fake News Detection',
    summary: 'Machine-learning based fake news classification application.',
    category: 'AI / ML',
    tags: ['AI/ML', 'Data Science'],
    problem: 'Readers need help evaluating the credibility of written claims.',
    solution: 'A classification experience for analyzing news text with a machine-learning model.',
    features: ['Text classification', 'Model-driven analysis', 'Simple result feedback'],
    previewImage: undefined,
  },
  {
    slug: 'skillscreen',
    number: '05',
    name: 'SkillScreen',
    summary: 'AI-assisted resume and job-description analysis.',
    category: 'Full Stack',
    tags: ['AI/ML', 'Full Stack'],
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

export const social = { github: '', linkedin: '', resume: '', email: '' }

export const getProject = (slug) => projects.find((project) => project.slug === slug)
