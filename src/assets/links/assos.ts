import { AdditionalLinkType, protectRedirectURL, type LinkGroup } from './links';

const assos: LinkGroup = {
  id: 'associations',
  name: 'Associations',
  links: [
    {
      name: 'BDE',
      description: 'Bureau des élèves',
      url: 'https://bde.eirb.fr/',
      icon: 'associations/x128/bde.png',
      additionalLink: {
        url: protectRedirectURL('telegramBDE'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel du BDE',
      },
    },
    {
      name: 'BDS',
      description: 'Bureau des sports',
      url: 'https://bds.eirb.fr/',
      icon: 'associations/x128/bds.png',
      additionalLink: {
        url: protectRedirectURL('telegramBDS'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Canal des escrocs',
      },
    },
    {
      name: 'BDA',
      description: 'Bureau des arts',
      url: 'https://bda.eirb.fr/',
      icon: 'associations/x128/bda.png',
      additionalLink: {
        url: protectRedirectURL('linktreeBDA'),
        type: AdditionalLinkType.LINKTREE,
        description: 'Linktree du meilleur Bureau',
      },
    },
    {
      name: 'BAE',
      description: 'Bureau des alternants',
      url: 'https://bae.eirb.fr/',
      icon: 'associations/x128/bae.png',
      additionalLink: {
        url: protectRedirectURL('telegramBAE'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel du BAE',
      },
    },
    {
      name: 'Le Bar',
      description: 'Caféteria',
      url: 'https://bar.eirb.fr/',
      icon: 'associations/x128/bar.png',
      additionalLink: {
        url: protectRedirectURL('telegramBAR'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Le channel du Q',
      },
    },
    {
      name: 'Eirbware',
      description: "Association d'assistance et formation informatique",
      url: 'https://eirbware.eirb.fr/',
      icon: 'associations/x128/eirbware.png',
      additionalLink: {
        url: protectRedirectURL('telegramEirbware'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'Eirbware",
      },
    },
    {
      name: 'AEI',
      description: 'Junior Entreprise',
      url: 'https://aei.eirb.fr/',
      icon: 'associations/x128/aei.png',
      additionalLink: {
        description: 'Linktree AEI',
        url: protectRedirectURL('linktreeAEI'),
        type: AdditionalLinkType.LINKTREE,
      },
    },
    {
      name: 'Eirbot',
      description: 'Association de robotique',
      url: 'https://eirbot.eirb.fr/',
      icon: 'associations/x128/eirbot.png',
      additionalLink: {
        url: protectRedirectURL('telegramEirbot'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'Eirbot",
      },
    },
    {
      name: 'EirLab',
      description: 'Fablab',
      url: 'https://eirlab.eirb.fr/',
      icon: 'associations/x128/eirlab.png',
      additionalLink: {
        url: protectRedirectURL('telegramEirlab'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'Eirlab",
      },
    },
    {
      name: 'EirSport',
      description: 'Association multisport',
      url: 'https://eirsport.eirb.fr/',
      icon: 'associations/x128/eirsport.png',
      additionalLink: {
        url: protectRedirectURL('telegramEirsport'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'Eirsport",
      },
    },
    {
      name: 'EirSpace',
      description: "Association d'aérospatial",
      url: 'https://eirspace.eirb.fr/',
      icon: 'associations/x128/eirspace.png',
      additionalLink: {
        url: protectRedirectURL('telegramEirspace'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'EirbSpace",
      },
    },
    {
      name: "Gala Mos'fête",
      description: "Équipe d'organisation du gala",
      icon: 'associations/x128/gala.png',
    },
    {
      name: 'F6KQH',
      description: 'Club radioamateur',
      url: 'https://f6kqh.enseirb-matmeca.fr/',
      icon: 'associations/x128/f6kqh.png',
    },
    {
      name: "CluBee",
      description: 'Club de voyage',
      icon: 'associations/x128/clubee.png',
      additionalLink: {
        url: protectRedirectURL('telegramCluBee'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de CluBee",
      },
    },
  ],
};

export default assos;
