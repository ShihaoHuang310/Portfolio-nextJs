import { Link, ProjectInfo } from './types'
export const links: Link[] = [
  {
    nameEng: 'Home',
    hash: '#home'
  },
  {
    nameEng: 'About',
    hash: '#about'
  },
  {
    nameEng: 'Projects',
    hash: '#projects'
  },
  {
    nameEng: 'Skills',
    hash: '#skills'
  },
  {
    nameEng: 'Contact',
    hash: '#contact'
  }
]

export const projectsData: ProjectInfo = [
  {
    title: 'Snowlake Theme',
    description:
      ' A theme for the popular social media platform, Snowlake. The theme is designed to provide a unique and engaging user experience, with a focus on simplicity and ease of use.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/boy.png',
    link: 'https://www.baidu.com/'
  },
  {
    title: 'Snowlake App',
    description: ' A theme for the popular social media platform, Snowlake. ',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/boy.png',
    link: 'https://www.baidu.com/'
  },
  {
    title: 'Hello World',
    description:
      ' A theme for the popular social media platform, Snowlake. The theme is designed to provide a unique and engaging user experience, with a focus on simplicity and ease of use.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/boy.png',
    link: 'https://www.baidu.com/'
  }
]

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'Git',
  'GitHub'
]
