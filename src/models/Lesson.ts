export interface LessonFrontmatter {
  name: string
  duration: number
}

export interface Lesson {
  id: string
  name: string
  duration: number
  slug: string
  path: string
  body: string
}
