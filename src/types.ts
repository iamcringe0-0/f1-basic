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
  image: string;
  imageAlt: string;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'f1-basics',
    route: '/f1-basics',
    title: 'How F1 Works: Formula 1 Basics for Beginners',
    kicker: 'Core Fundamentals',
    readTime: '10 min read',
    summary: 'The ultimate starting line: how the championship works, car anatomy, aerodynamics, pit stops, and essential vocabulary.',
    number: '01',
    image: '/images/f1-basics.jpg',
    imageAlt: 'Formula 1 racing car demonstrating aerodynamic front wing, halo cockpit safety, and slick tyres',
  },
  {
    slug: 'understanding-f1-race-weekends',
    route: '/understanding-f1-race-weekends',
    title: 'F1 Race Weekend Explained: Practice, Qualifying and Race',
    kicker: 'Session Breakdown',
    readTime: '11 min read',
    summary: 'From Friday practice through knockout qualifying to Sunday’s Grand Prix, plus Sprint schedules, flags, and safety cars.',
    number: '02',
    image: '/images/f1-race-weekend.jpg',
    imageAlt: 'Formula 1 pit crew executing a high-speed wheel change during a Grand Prix pit stop',
  },
  {
    slug: 'f1-teams-and-drivers',
    route: '/f1-teams-and-drivers',
    title: 'Formula 1 Teams and Drivers: How the Grid Works',
    kicker: 'Paddock Dynamics',
    readTime: '10 min read',
    summary: 'Constructors, 20 drivers, teammate rivalry, the pit wall strategists, development races, and how to pick your team.',
    number: '03',
    image: '/images/f1-teams-drivers.jpg',
    imageAlt: 'Formula 1 starting grid with cars, drivers, and mechanics lined up before the race start',
  },
];
