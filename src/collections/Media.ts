import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Médias',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'uploads', // dossier où les fichiers seront stockés
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
}
