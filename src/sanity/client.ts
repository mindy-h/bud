import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '8uw8hdz2',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-02-18',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}