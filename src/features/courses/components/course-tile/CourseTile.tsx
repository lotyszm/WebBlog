import React from "react"
import styled from "styled-components"
import { Course } from "../../../../models"
import { CodeEditorTile, M, XL } from "../../../../ui"
import { Link as GatsbyLink } from "gatsby"
import AuthorAvatar from "../../../../components/article/AuthorAvatar"
import { CourseTimeBadge } from "../course-time-badge"
import { CourseStatusBadge } from "../course-status-badge/CourseStatusBadge"
import theme from "../../../../utils/theme"

const Container = styled.div`
  border-radius: 2px;

  .link {
    text-decoration: none;

    &:hover {
      ${XL} {
        color: ${theme.primary};
      }
    }
  }

  .components-stack {
    margin: 0;
  }

  ${M} {
    margin: 12px 0 20px 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`

const Badges = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;

  & > * {
    margin: 0 8px 8px 0;
  }

  & > *:last-child {
    margin-right: 0;
  }
`

export interface CourseTileProps {
  data: Course
}

export const CourseTile = ({ data }: CourseTileProps) => {
  return (
    <Container>
      <CodeEditorTile>
        <Content>
          <GatsbyLink className="link" to={data.path}>
            <XL>{data.name}</XL>
          </GatsbyLink>
          <M>{data.description}</M>
          <Badges>
            <CourseTimeBadge value={data.duration} />
            <CourseStatusBadge value={data.status} />
          </Badges>
        </Content>
      </CodeEditorTile>
    </Container>
  )
}
