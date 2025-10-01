// payload.config.ts ou collections/Activites.ts
import { CollectionConfig } from 'payload'

const Activites: CollectionConfig = {
  slug: 'activites',
  labels: {
    singular: 'Activité',
    plural: 'Activités',
  },
  admin: {
    useAsTitle: 'description',
  },
  access: {
    read: () => true, // lecture publique
    create: () => true, // admin peut créer
    update: () => true, // admin peut modifier
    delete: () => true, // admin peut supprimer
  },
  fields: [
    {
      name: 'mois',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'lieu',
      type: 'text',
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media', // collection Media pour images
      required: false,
      hasMany: true,
    },
    {
      name: 'audio',
      type: 'upload',
      relationTo: 'media', // collection Media pour fichiers audio
      required: false,
    },
    {
      name: 'liens',
      type: 'text',
    },
  ],
}

export default Activites
