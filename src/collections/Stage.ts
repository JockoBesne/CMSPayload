// payload.config.ts ou collections/Stage.ts
import { CollectionConfig } from 'payload'

const Stage: CollectionConfig = {
  slug: 'stage',
  labels: {
    singular: 'Stage',
    plural: 'Stages',
  },
  admin: {
    useAsTitle: 'nom_entreprise',
  },
  access: {
    read: () => true, // lecture publique
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'nom_entreprise',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'lien',
      type: 'text',
    },
    {
      name: 'semaine',
      type: 'array',
      fields: [
        { name: 'numero', type: 'text', required: true }, // ex: "Semaine 1"
        { name: 'taches', type: 'textarea' },
        { name: 'competences', type: 'textarea' },
        {
          name: 'annexes',
          type: 'upload',
          relationTo: 'media',
          hasMany: true,
        },
      ],
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media', // collection Media pour images
      required: false,
      hasMany: true,
    },
    {
      name: 'bilan',
      type: 'textarea',
    },
    {
      name: 'bilan_pdf',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export default Stage
