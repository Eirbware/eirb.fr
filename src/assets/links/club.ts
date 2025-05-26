import { AdditionalLinkType, protectRedirectURL, type LinkGroup } from './links';

const clubs: LinkGroup = {
  id: 'clubs',
  name: 'Clubs',
  links: [
    {
      name: "Bill'eirb",
      description: 'Club de billard',
      url: 'https://bill.eirb.fr/',
      icon: 'associations/x128/billeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramBilleirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de Billeirb',
      },
    },
    {
      name: "Cook'eirb",
      description: 'Club de cuisine',
      url: 'https://cook.eirb.fr/',
      icon: 'associations/x128/cookeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramCook'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Cook'eirb",
      },
    },
    {
      name: "Couturi'eirb",
      description: 'Club de couture',
      url: 'https://couturi.eirb.fr/',
      icon: 'associations/x128/couturieirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramCouturieirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Couturi'eirb",
      },
    },
    {
      name: "CheriF'eirb",
      description: 'Club de radio',
      url: 'https://radio.eirb.fr/',
      icon: 'associations/x128/cherifeirb.png',
    },
    {
      name: 'Eirbline',
      description: "Club d'aviation",
      url: 'https://eirbline.eirb.fr/',
      icon: 'associations/x128/eirbline.png',
      additionalLink: {
        url: protectRedirectURL('telegramEirbline'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'Eirbline",
      },
    },
    {
      name: 'EMK',
      description: 'Club de Hip-Hop',
      url: 'https://emk.eirb.fr/',
      icon: 'associations/x128/emk.png',
      additionalLink: {
        url: protectRedirectURL('telegramEMK'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'EMK",
      },
    },
    /*{
              "name": "Foyer",
              "description": "Club de jeux de rôle et de société",
              "url": "https://foyer.eirb.fr/",
              "icon": "associations/x128/foyer.png"
          },*/
    {
      name: 'Game Creation Club',
      description: 'Club de création de jeux vidéo',
      url: 'https://gcc.eirb.fr/',
      icon: 'associations/x128/gcc.png',
      additionalLink: {
        url: protectRedirectURL('discordGCC'),
        type: AdditionalLinkType.DISCORD,
        description: 'Discord officie GCC',
      },
    },
    {
      name: "Eirb'IA",
      description: "Club d'intelligence artificielle",
      url: 'https://ia.eirb.fr/',
      icon: 'associations/x128/eirbia.png',
      additionalLink: {
        url: protectRedirectURL('telegramEirbia'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'Eirb'IA",
      },
    },
    {
      name: "Nlog'eirb",
      description: 'Club de programmation compétitive',
      url: 'https://nlog.eirb.fr/',
      icon: 'associations/x128/nlogeirb.png',
    },
    {
      name: 'Œno',
      description: "Club d'œnologie",
      url: 'https://oeno.eirb.fr/',
      icon: 'associations/x128/oeno.png',
      additionalLink: {
        url: protectRedirectURL('telegramOeno'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel du club Œno',
      },
    },
    {
      name: 'PixEirb',
      description: 'Club de photographie',
      url: 'https://pix.eirb.fr/',
      icon: 'associations/x128/pixeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramPixeirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de PixEirb',
      },
    },
    {
      name: 'Club Théâtre',
      description: 'Club de théâtre',
      url: 'https://theatre.eirb.fr/',
      icon: 'associations/x128/theatre.png',
      additionalLink: {
        url: protectRedirectURL('telegramTheatre'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel Du Club Théâtre',
      },
    },
    {
      name: 'Unlock',
      description: 'Club de sécurité informatique',
      url: 'https://unlock.eirb.fr/',
      icon: 'associations/x128/unlock.png',
      additionalLink: {
        url: protectRedirectURL('discordUnlock'),
        type: AdditionalLinkType.DISCORD,
        description: "Discord officiel d'Unlock",
      },
    },
    {
      name: 'VOST',
      description: 'Club vidéo',
      url: 'https://vost.eirb.fr/',
      icon: 'associations/x128/vost.png',
      additionalLink: {
        url: protectRedirectURL('telegramVost'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de VOST',
      },
    },
    {
      name: 'Zik',
      description: 'Club de musique',
      url: 'https://zik.eirb.fr/',
      icon: 'associations/x128/zik.png',
      additionalLink: {
        url: protectRedirectURL('telegramZik'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel du Zik',
      },
    },
  ],
};

export default clubs;
