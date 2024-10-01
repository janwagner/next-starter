import { NextSeo } from 'next-seo'

type SeoProps = {
  title?: string
  description?: string
  name?: string
  url?: string
  image?: string
  imageName?: string
  imageType?: string
  imageWidth?: number
  imageHeight?: number
  theme?: string
  noindex?: boolean
  nofollow?: boolean
}

const DEFAULT_TITLE = ''
const DEFAULT_DESCRIPTION = ''
const DEFAULT_NAME = ''
const DEFAULT_URL = ''
const DEFAULT_IMAGE = ''
const DEFAULT_IMAGE_NAME = 'Share image'
const DEFAULT_IMAGE_TYPE = 'image/png'
const DEFAULT_IMAGE_WIDTH = 2400
const DEFAULT_IMAGE_HEIGHT = 1260
const DEFAULT_THEME = 'light'
const DEFAULT_NOINDEX = false
const DEFAULT_NOFOLLOW = false

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  name = DEFAULT_NAME,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  imageName = DEFAULT_IMAGE_NAME,
  imageType = DEFAULT_IMAGE_TYPE,
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  theme = DEFAULT_THEME,
  noindex = DEFAULT_NOINDEX,
  nofollow = DEFAULT_NOFOLLOW,
}: SeoProps) => (
  <NextSeo
    title={title}
    description={description}
    additionalLinkTags={[
      {
        rel: 'icon',
        href: 'favicon.ico',
      },
    ]}
    themeColor={theme}
    noindex={noindex}
    nofollow={nofollow}
    openGraph={{
      type: 'website',
      locale: 'en_EN',
      url: url,
      title: title,
      site_name: title,
      description: description,
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt: imageName,
          type: imageType,
        },
      ],
    }}
    additionalMetaTags={[
      {
        name: 'viewport',
        content: 'initial-scale=1.0, width=device-width',
      },
      {
        name: 'application-name',
        content: name,
      },
      {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1',
      },
    ]}
  />
)

export default Seo
