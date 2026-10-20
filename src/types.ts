export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface ArticleMeta {
  slug: string;
  route: string;
  title: string;
  kicker: string;
  readTime: string;
  summary: string;
  number: string;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'f1-basics',
    route: '/f1-basics',
    title: 'Formula 1 Explained: A Beginner’s Guide',
    kicker: 'Core Fundamentals',
    readTime: '9 min read',
    summary: 'The ultimate starting line: how the championship works, car anatomy, aerodynamics, pit stops, and essential vocabulary.',
    number: '01',
  },
  {
    slug: 'understanding-f1-race-weekends',
    route: '/understanding-f1-race-weekends',
    title: 'How an F1 Race Weekend Works',
    kicker: 'Session Breakdown',
    readTime: '11 min read',
    summary: 'From Friday practice through knockout qualifying to Sunday’s Grand Prix, plus Sprint schedules, flags, and safety cars.',
    number: '02',
  },
  {
    slug: 'f1-teams-and-drivers',
    route: '/f1-teams-and-drivers',
    title: 'F1 Teams and Drivers: How the Grid Works',
    kicker: 'Paddock Dynamics',
    readTime: '10 min read',
    summary: 'Constructors, 20 drivers, teammate rivalry, the pit wall strategists, development races, and how to pick your team.',
    number: '03',
  },
];
