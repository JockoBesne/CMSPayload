import payload from 'payload'
import path from 'path'

// Assure-toi que ce chemin correspond à l'emplacement réel de ton fichier de configuration Payload
import config from './payload.config'

const PORT = process.env.PORT || 3000

const start = async () => {
  // Payload init va démarrer son propre serveur Express et l'écouter
  await payload.init({
    // La config est toujours passée ici
    config: config,
    // onInit est facultatif mais utile pour logger
    onInit: async (cms) => {
      cms.logger.info(`Payload Admin URL: ${cms.getAdminURL()}`)
    },
    // Tu peux ajouter des custom Express routes si tu en as besoin, mais pas obligatoire
    // express: app // Pas nécessaire si Payload gère l'écoute
  })

  // Si tu veux une redirection de la racine vers /admin, tu devras intercepter
  // cela AVANT que Payload ne prenne le contrôle de toutes les routes.
  // Cependant, le comportement par défaut de Payload est de rediriger vers /admin s'il n'y a pas de route /
  // Pour ton cas simple, tu pourrais même ne pas avoir besoin de ça.
  // Si tu veux une redirection explicite, il faut un app.use() AVANT payload.init()
  // ou utiliser l'option `express` dans `payload.init()` comme suit:

  // --- Si tu veux une redirection explicite de la racine vers /admin ---
  // Tu devrais créer une instance d'Express, lui ajouter ta redirection, puis la passer à Payload.
  // Voir l'Option 2 ci-dessous si tu veux garder ton express app.
  // Sinon, avec l'Option 1, Payload gérera par défaut la redirection vers l'admin.
}

// Payload s'occupe d'app.listen() et du reste quand tu lui passes juste la config.
// Il utilise les ports et autres paramètres de la configuration.
// Si tu as défini `serverURL` dans `payload.config.ts`, il l'utilisera.

start()
