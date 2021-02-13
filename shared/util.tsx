import fs from 'fs'
import path from 'path'

export function getPostsList() {
  try {
    const postsDir = path.join(process.cwd(), 'pages/posts')

    return fs
    .readdirSync(postsDir)
    .map( filename => (
      filename.substring(0, filename.indexOf('.'))
    ))
  } catch {
    console.warn(' Trere no posts')
    return []
  }
}