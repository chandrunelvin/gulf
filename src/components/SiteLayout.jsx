import siteCss from '../styles/site.css?inline'
import useScopedStyle from '../hooks/useScopedStyle.js'
import useScrollReveal from '../hooks/useScrollReveal.js'
import PageHeader from './PageHeader.jsx'
import PageFooter from './PageFooter.jsx'

/**
 * Layout for every Gulf Supply & Services sub-page: mounts the site stylesheet
 * (scoped to this route), the shared header/footer, and the scroll-reveal observer.
 */
export default function SiteLayout({ active, children }) {
  useScopedStyle(siteCss)
  useScrollReveal([children])

  return (
    <>
      <PageHeader active={active} />
      {children}
      <PageFooter />
    </>
  )
}
