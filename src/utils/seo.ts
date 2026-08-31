export function seo(opts: {
  title: string
  description?: string
  image?: string
}) {
  const { title, description, image } = opts
  return [
    { title },
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    ...(image
      ? [
          { name: 'og:image', content: image },
          { name: 'twitter:image', content: image },
        ]
      : []),
  ]
}
