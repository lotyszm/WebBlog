import { formatDistanceStrict } from "date-fns"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Loadable from "react-loadable"
import styled from "styled-components"
import Badge from "../../../components/article/Badge"
import { AuthorBadge } from "../../../components/badges/AuthorBadge"
import MobileNavigation from "../../../components/navigation/MobileNavigation"
import Navbar from "../../../components/navigation/Navbar"
import theme from "../../../utils/theme"
import { L_DOWN, SM_DOWN } from "../../../utils/viewport"
import { CourseChapters } from "../../courses/components/course-chapters/CourseChapters"
import { useLessonProvider } from "../LessonProvider"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

deckDeckGoHighlightElement()

const ProgressDisplayer = Loadable({
  loader: () =>
    import("../../../components/article/ProgressDisplayer").then(
      m => m.ProgressDisplayer
    ),
  loading: () => null,
})

const Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  padding: 80px 24px 100px 24px;
  margin: 0 auto;
  max-width: 1400px;

  @media ${L_DOWN} {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
    gap: 0;
  }
`

const Author = styled.div`
  display: flex;
  align-items: center;
`

const Dates = styled.div`
  display: flex;
  flex-flow: wrap;
`

const Content = styled.div`
  ${Dates} {
    margin: 32px 0 40px 0;

    & > * {
      margin: 0 10px 10px 0;

      @media ${SM_DOWN} {
        width: 100%;
        margin: 0 0 10px 0;
        text-align: center;
      }
    }
  }
`

const CourseChaptersWrapper = styled.div`
  position: relative;

  & > * {
    position: sticky;
    top: 0;
    right: 0;
    padding-top: 20px;
    background: ${theme.bg};
  }
`

export const LessonContent = () => {
  const { course, chapter, lesson } = useLessonProvider()

  return (
    <>
      <ProgressDisplayer />
      <Navbar />
      <MobileNavigation />
      <Layout>
        <Content>
          <MDXRenderer>{lesson.body}</MDXRenderer>
          <Author>
            <AuthorBadge author={course.author} />
          </Author>
          <Dates>
            <Badge color={theme.secondary}>
              created:{" "}
              {formatDistanceStrict(new Date(course.createdAt), new Date())} ago
            </Badge>
            <Badge color={theme.secondary}>
              updated:{" "}
              {formatDistanceStrict(new Date(course.modifiedAt), new Date())}{" "}
              ago
            </Badge>
          </Dates>
        </Content>
        <CourseChaptersWrapper>
          <CourseChapters
            activeChapterId={chapter.id}
            activeLessonId={lesson.id}
            chapters={course.chapters}
          />
        </CourseChaptersWrapper>
      </Layout>
    </>
  )
}
