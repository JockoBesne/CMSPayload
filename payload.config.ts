// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import Stage from './src/collections/Stage'
import Activites from './src/collections/Activites'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Stage, Activites],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
  cors: [
    'http://localhost:3000', // L'URL de ton Payload admin
    'http://localhost:8080', // L'URL de ton frontend cian.html
    'http://127.0.0.1:8080',
    'https://jockobesne.github.io/Nada-Portefolio/cian.html',
  ], // <-- déplacer ici
})
