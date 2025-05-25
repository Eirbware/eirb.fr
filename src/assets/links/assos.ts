import { AdditionalLinkType, type LinkGroup } from './links';

const protectRedirectURL = (id: string) => `https://eirb.fr/protect/link.php?name=${id}`;

const assos: LinkGroup = {
  id: 'associations',
  name: 'Associations',
  links: [
    {
      name: 'BDE',
      description: 'Bureau des élèves',
      url: 'https://bde.eirb.fr/',
      icon: 'associations/x128/bde.png',
    },
    {
      name: 'BDS',
      description: 'Bureau des sports',
      url: 'https://bds.eirb.fr/',
      icon: 'associations/x128/bds.png',
    },
    {
      name: 'BDA',
      description: 'Bureau des arts',
      url: 'https://bda.eirb.fr/',
      icon: 'associations/x128/bda.png',
    },
    {
      name: 'BAE',
      description: 'Bureau des alternants',
      url: 'https://bae.eirb.fr/',
      icon: 'associations/x128/bae.png',
    },
    {
      name: 'Le Bar',
      description: 'Caféteria',
      url: 'https://bar.eirb.fr/',
      icon: 'associations/x128/bar.png',
    },
    {
      name: 'Eirbware',
      description: "Association d'assistance et formation informatique",
      url: 'https://eirbware.eirb.fr/',
      icon: 'associations/x128/eirbware.png',
    },
    {
      name: 'AEI',
      description: 'Junior Entreprise',
      url: 'https://aei.eirb.fr/',
      additionalLink: {
        description: 'Linktree AEI',
        url: protectRedirectURL('linktreeAEI'),
        type: AdditionalLinkType.LINKTREE,
      },
      icon: 'associations/x128/aei.png',
    },
    {
      name: 'Eirbot',
      description: 'Association de robotique',
      url: 'https://eirbot.eirb.fr/',
      icon: 'associations/x128/eirbot.png',
    },
    {
      name: 'EirLab',
      description: 'Fablab',
      url: 'https://eirlab.eirb.fr/',
      icon: 'associations/x128/eirlab.png',
    },
    {
      name: 'EirSport',
      description: 'Association multisport',
      url: 'https://eirsport.eirb.fr/',
      icon: 'associations/x128/eirsport.png',
    },
    {
      name: 'EirSpace',
      description: "Association d'aérospatial",
      url: 'https://eirspace.eirb.fr/',
      icon: 'associations/x128/eirspace.png',
    },
    {
      name: "Gala Mos'fête",
      description: "Équipe d'organisation du gala",
      url: 'https://gala.eirb.fr/',
      icon: 'associations/x128/gala.png',
    },
    {
      name: 'F6KQH',
      description: 'Club radioamateur',
      url: 'https://f6kqh.enseirb-matmeca.fr/',
      icon: 'associations/x128/f6kqh.png',
    },
  ],
};

export default assos;
