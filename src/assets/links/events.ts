import type { LinkGroup } from './links';

const startShowEvent = new Date('1970-01-01T00:00:00Z');
const startEvent = new Date('1970-01-01T00:00:00Z');
const endEvent = new Date('1970-01-01T00:00:00Z');

const eventTitle = 'VIDE';

const events: LinkGroup = {
  id: 'events',
  name: 'Événements',
  links: [
    // Exemple, ne pas supprimer
    // {
    //   name: 'Ingénib',
    //   description: 'Forum Ingénib et Opportunités de stages',
    //   url: 'https://ingenib-stages.eirb.fr/',
    //   icon: 'icons/ingenib.png',
    // },
  ],
};

export { events, startShowEvent, startEvent, endEvent, eventTitle };
