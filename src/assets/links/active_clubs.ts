import { AdditionalLinkType, protectRedirectURL, type LinkGroup } from './links';

const clubs: LinkGroup = {
  id: 'active_clubs',
  name: 'Clubs actifs',
  links: [
    {
      name: "Apicult'eirb",
      description: "Club d'apiculture",
      url: "https://apicult.eirb.fr/",
      icon: 'associations/x128/apiculteirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramApicultureirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel d'Apicult'eirb",
      },
    },
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
      name: "Littér'eirb",
      description: 'Club de littérature',
      icon: 'associations/x128/littereirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramLittereirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Littér'eirb",
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
      name: "Cook'eirb",
      description: 'Club de cuisine',
      icon: 'associations/x128/cookeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramCook'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Cook'eirb",
      },
    },
    {
      name: "Coutur'eirb",
      description: 'Club de couture',
      url: 'https://coutur.eirb.fr/',
      icon: 'associations/x128/coutureirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramCouturieirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Coutur'eirb",
      },
    },
    {
      name: "Chorale",
      description: 'Club de chant en chorale',
      url: protectRedirectURL("discordChorale"),
      icon: 'associations/x128/chorale.png',
      additionalLink: {
        url: protectRedirectURL('discordChorale'),
        type: AdditionalLinkType.DISCORD,
        description: "Discord de la Chorale",
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
      name: "L'EGH",
      description: "Club de jeux vidéos",
      icon: 'associations/x128/egh.png',
      additionalLink: {
        url: protectRedirectURL('discordEGH'),
        type: AdditionalLinkType.DISCORD,
        description: "Discord de l'EGH",
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
      name: 'Essaim',
      url: 'https://essaim.eirb.fr/',
      description: "Club de sensibilisation au respect d'autrui",
      icon: 'associations/x128/essaim.png',
      additionalLink: {
        url: protectRedirectURL('telegramEssaim'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de l'Essaim",
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
      name: "Gala Mos'fête",
      description: "Équipe d'organisation du gala",
      icon: 'associations/x128/gala.png',
    },
    {
      name: "GCC",
      description: "Club de création de jeux vidéo",
      icon: 'associations/x128/gcc.png',
      url: 'https://gcc.eirb.fr/',
      additionalLink: {
        url: protectRedirectURL('discordGCC'),
        type: AdditionalLinkType.DISCORD,
        description: "Discord officiel de GCC",
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
        description: "Telegram officiel d'Ingenib",
      },
    },
    {
      name: "INPride",
      description: "Club de mise en valeur de la culture queer",
      icon: 'associations/x128/inpride.png',
      additionalLink: {
        url: protectRedirectURL('discordInpride'),
        type: AdditionalLinkType.DISCORD,
        description: "Discord officiel de INPride",
      },
    },
    {
      name: "Nlog'eirb",
      description: 'Club de programmation compétitive',
      url: 'https://nlog.eirb.fr/',
      icon: 'associations/x128/nlogeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramNlogeirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Nlog'eirb",
      },
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
      description: 'Club de palet',
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
      name: "Pok'eirb",
      description: "Club de poker",
      icon: 'associations/x128/pokeirb.png',
      additionalLink: {
        url: protectRedirectURL('telegramPokeirb'),
        type: AdditionalLinkType.TELEGRAM,
        description: "Telegram officiel de Pokeirb",
      },
    },
    {
      name: "Rap'eirb",
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
      name: "Support'eirb",
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
