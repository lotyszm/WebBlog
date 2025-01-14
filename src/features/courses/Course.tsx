import React from "react"
import { SiteMeta } from "../../utils/SiteMeta"
import { Course } from "../../models"
import { CourseContent } from "./containers"
import { AllDataResponse } from "../../api"

interface Props {
  pageContext: AllDataResponse & {
    course: Course
  }
}

export default function ({
  pageContext: { course, articles, site, translationObject },
}: Props) {
  const t = translationObject["en"]

  return (
    <SiteMeta
      siteName={site.siteName}
      siteLang={site.langs.en.html}
      gaPage={course.gaPage}
      url={course.gaPage + "/"}
      robots="index,follow,max-image-preview:large"
      title={course.name}
      type="article"
      author={course.author.firstName + " " + course.author.lastName}
      description={course.description}
      image={course.thumbnail.src}
    >
      <CourseContent course={course} articles={articles} site={site} t={t} />
    </SiteMeta>
  )
}
