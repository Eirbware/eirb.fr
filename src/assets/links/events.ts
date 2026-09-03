import type { LinkGroup } from './links';

const startShowEvent = new Date('2026-09-03T12:00:00Z');
const startEvent = new Date('2026-09-03T12:00:00Z');
const endEvent = new Date('2026-10-25T12:00:00Z');

const eventTitle = 'Intégration';

const events: LinkGroup = {
  id: 'events',
  name: 'Événements',
  links: [
    // Exemple, ne pas supprimer
    {
      name: 'Pokéwood',
      description: 'Collectionne des cartes des clubs et assos de l\'ENSEIRB-MATMECA!',
      url: 'https://pokewood.web.app/',
      icon: 'icons/pokewood.png',
    },
  ],
};

export { events, startShowEvent, startEvent, endEvent, eventTitle };
