import { links } from './data'
export type SectionName = (typeof links)[number]['hash']

export type Link = {
  nameEng: string
  hash: string
}

export type ProjectInfo = {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link: string
}
