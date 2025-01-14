import React from "react"

import Layout from "../../components/layout/Layout"
import Grid from "../../components/article/Grid"
import { SiteMeta } from "../../utils/SiteMeta"
import { Content } from "../../ui"
import { AllDataResponse } from "../../api"

interface ArticlesPageProps {
  pageContext: AllDataResponse
}

const ArticlesPage = ({
  pageContext: { articles, site, translationObject, footerArticles },
}: ArticlesPageProps) => {
  const t = translationObject["en"]

  return (
    <SiteMeta
      siteName={site.siteName}
      siteLang={site.langs.en.html}
      gaPage={site.routes.articles.gaPage}
      url={site.routes.articles.to}
      robots="index,follow"
      title={`${site.siteName} articles: Learn with us.`}
      description="Browse through our articles and find something suitable for you."
      type="website"
      image="/icon-192x192.png"
    >
      <Layout articles={footerArticles} t={t} routes={site.routes}>
        <Content paddingY>
          <Grid articles={articles} />
        </Content>
      </Layout>
    </SiteMeta>
  )
}

export type { ArticlesPageProps }

export default ArticlesPage
