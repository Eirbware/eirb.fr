import { AdditionalLinkType, protectRedirectURL, type LinkGroup } from './links';

const clubs: LinkGroup = {
  id: 'dormant_clubs',
  name: 'Clubs inactifs',
  links: [
    {
      name: "CheriF'eirb",
      description: 'Club de radio',
      url: 'https://radio.eirb.fr/',
      icon: 'associations/x128/cherifeirb.png',
    },
    {
      name: "Cycl'eirb",
      description: 'Club de vélo',
      icon: 'associations/x128/cycleirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramCycleirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Cycl'eirb",
      },
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
    {
      name: "Financi'eirb",
      description: 'Club de finance',
      icon: 'associations/x128/financeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramFinancieirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Financi'eirb",
      },
    },
    {
      name: "Journal'eirb",
      description: "Club de journalisme",
      icon: 'associations/x128/journaleirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramJournaleirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Journal'eirb",
      },
    },
    {
      name: "Planet'eirb",
      description: "Club de sensibilisation à l'écologie",
      icon: 'associations/x128/planeteirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramPlaneteirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Planet'eirb",
      },
    },
    {
      name: "Solid'eirb",
      description: 'Club de solidarité',
      icon: 'associations/x128/solideirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramSolideirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de la Solideirb',
      },
    },
    {
      name: "Youtub'eirb",
      description: 'Club Youtube',
      url: 'https://www.youtube.com/@eirbYouTube',
      icon: 'associations/x128/youtubeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramYoutubeirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Youtub'eirb",
      },
    },
  ],
};

export default clubs;
