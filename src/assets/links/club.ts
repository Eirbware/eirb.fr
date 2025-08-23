import { AdditionalLinkType, protectRedirectURL, type LinkGroup } from './links';

const clubs: LinkGroup = {
  id: 'clubs',
  name: 'Clubs',
    links: [
	{
      name: "Arte",
      description: 'Club artistique',
      icon: 'associations/x128/arte.png',
      additionalLink: {
        url: protectRedirectURL('telegramArte'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de Arte',
      },
    },
    {
      name: "Bill'eirb",
      description: 'Club de billard',
      icon: 'associations/x128/billeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramBilleirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de Billeirb',
      },
    },
    {
      name: "Bouquin'eirb",
      description: 'Club de littérature',
      icon: 'associations/x128/bouquineirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramBouquineirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Bouquin'eirb",
      },
    },
    {
      name: "Cin'eirb",
      description: 'Club de cinéma',
      icon: 'associations/x128/cineirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramCineirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Cin'eirb",
      },
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
      name: "Chorale",
      description: 'Club de couture',
      url: protectRedirectURL("discordChorale"),
      icon: 'associations/x128/chorale.png',
      additionalLink: {
        url: protectRedirectURL('discordChorale'),
        type: AdditionalLinkType.DISCORD,
        description: "Discord de la Chorale",
      },
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
      name: "Dans'eirb",
      description: 'Club de danse',
      icon: 'associations/x128/danseirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramDanseirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Dans'eirb",
      },
    },
    {
      name: "EGH",
      description: "Club de jeux vidéos",
      icon: 'associations/x128/egh.png',
      additionalLink: {
        url: protectRedirectURL('discordEGH'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Discord de EGH",
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
      name: 'Eirbees',
      description: 'Club de Cheerleading',
      icon: 'associations/x128/pompoms.png',
      additionalLink: {
        url: protectRedirectURL('telegramEirbees'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de Eirbees',
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
      name: 'Essaim',
      description: "Club de sensibilisation au respect d'autrui",
      icon: 'associations/x128/essaim.png',
      additionalLink: {
        url: protectRedirectURL('telegramEssaim'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de Essaim',
      },
    },
    {
      name: 'FatCap',
      description: 'Club de graf',
      icon: 'associations/x128/fatcap.png',
      additionalLink: {
        url: protectRedirectURL('telegramFatCap'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de FatCap',
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
      name: "Formul'eirb",
      description: 'Club de sports motorisés',
      icon: 'associations/x128/formuleirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramFormuleirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Formul'eirb",
      },
    },
    {
      name: "Foyer",
      description: 'Club de jeux de sociétés',
      icon: 'associations/x128/foyer.png',
      additionalLink: {
        url: protectRedirectURL('discordFoyer'),
        type: AdditionalLinkType.DISCORD,
        description: "Discord du Foyer",
      },
    },
    {
      name: "Grimp'eirb",
      description: "Club d'escalade",
      icon: 'associations/x128/grimpeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramGrimpeirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Grimp'eirb",
      },
    },
    {
      name: "Ingenib",
      description: "Forum de recrutement pour les étudiants",
      icon: 'associations/x128/ingenib.png',
      additionalLink: {
        url: protectRedirectURL('telegramIngenib'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Ingenib",
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
      name: "Pal'eirb",
      description: 'Club de palais',
      icon: 'associations/x128/paleirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramPaleirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Pal'eirb",
      },
    },
    {
      name: "Pet'eirb",
      description: 'Club de pétanque',
      icon: 'associations/x128/peteirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramPeteirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Pet'eirb",
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
      name: "Pokeirb",
      description: "Club de poker",
      icon: 'associations/x128/pokeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramPokeirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Pokeirb",
      },
    },
    {
      name: "Rapeirb",
      description: "Club de rap",
      icon: 'associations/x128/rapeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramRapeirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Rapeirb",
      },
    },
    {
      name: 'Ruche',
      description: 'Club de mix',
      icon: 'associations/x128/ruche.png',
      additionalLink: {
        url: protectRedirectURL('telegramRuche'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de la Ruche',
      },
    },
    {
      name: 'Solideirb',
      description: 'Club de solidarité',
      icon: 'associations/x128/solideirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramSolideirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de la Solideirb',
      },
    },
    {
      name: 'Supporteirb',
      description: 'Club de soutien aux associations',
      icon: 'associations/x128/supporteirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramSupporteirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: 'Telegram officiel de la Supporteirb',
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
