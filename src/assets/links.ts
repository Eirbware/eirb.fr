interface Link {
  name: string;
  description: string;
  url: string;
  icon: string;
}

interface LinkGroup {
  id: string;
  name: string;
  links: Link[];
}

const links: LinkGroup[] = [
  {
    id: 'services',
    name: 'Services Eirbware',
    links: [
      {
        name: 'Wiki',
        description: "Encyclopédie collaborative de l'école",
        url: 'https://wiki.eirb.fr',
        icon: 'icons/wiki.svg'
      },
      {
        name: 'Vote',
        description: 'Site de vote pour les campagnes BDE et BDS',
        url: 'https://vote.eirb.fr',
        icon: 'icons/vote.svg'
      },
      /*{
                "name": "EirbAuth",
                "description": "Service d'authentification fédérée Eirbware",
                "url": "https://auth.eirb.fr",
                "icon": "icons/lock.svg"
            },
            {
                "name": "Shotgun",
                "description": "Gestion de biletteries d'événements “premier arrivé, premier servi”",
                "url": "https://shotgun.eirb.fr",
                "icon": "icons/target.svg"
            },*/
      {
        name: "FTP'eirb",
        description: 'Accès FTP pour la gestion des sites web hébergés par Eirbware',
        url: 'https://ftp.eirb.fr',
        icon: 'icons/ftp.svg'
      }
      /*{
                "name": "Scan'eirb",
                "description": "Application de gestion de billeterie et d'encaissement d'événements",
                "url": "https://scan.eirb.fr",
                "icon": "icons/scan.svg"
            }*/
    ]
  },
  {
    id: 'shortcuts',
    name: 'Raccourcis pratiques',
    links: [
      {
        name: 'ENSEIRB-MATMECA',
        description: "Site officiel de l'école",
        url: 'https://ens.eirb.fr/',
        icon: 'various/x128/enseirb-matmeca.png'
      },
      {
        name: 'Webmail “Partage”',
        description: "Webmail de l'école",
        url: 'https://mail.eirb.fr/',
        icon: 'icons/mail.svg'
      },
      {
        name: 'Planning “ADE”',
        description: "Emploi du temps de l'école",
        url: 'https://ade.eirb.fr/',
        icon: 'icons/timetable.svg'
      },
      {
        name: 'Moodle',
        description: 'Plateforme pédagogique de Bordeaux INP',
        url: 'https://moodle.bordeaux-inp.fr/',
        icon: 'various/x128//moodle.png'
      },
      {
        name: 'Guide 1A',
        description: "Le guide de l'étudiant de première année",
        url: 'https://bde.eirb.fr/guide',
        icon: 'icons/book.svg'
      },
      {
        name: 'ENT',
        description: 'Espace numérique de travail',
        url: 'https://ent.eirb.fr/',
        icon: 'icons/tools.svg'
      },
      {
        name: 'Thor',
        description: 'Serveur pédagogique (dépôts Git, gestion de projet...)',
        url: 'https://thor.enseirb-matmeca.fr/',
        icon: 'various/x128/thor.png'
      },
      {
        name: 'Spagobi',
        description: 'Relevés de notes et certificats de scolarité',
        url: 'https://spagobi.eirb.fr/',
        icon: 'various/x128/spagobi.png'
      },
      {
        name: 'Apogée',
        description: 'Réinscription, notes et résultats',
        url: 'https://apogee.eirb.fr/',
        icon: 'icons/graduation.svg'
      },
      {
        name: 'JobTeaser',
        description: 'Career Center ENSEIRB-MATMECA',
        url: 'https://jobteaser.eirb.fr/',
        icon: 'various/x128/jobteaser.png'
      },
      {
        name: 'Listes mail',
        description: 'Listes de diffusion',
        url: 'https://listes.eirb.fr/',
        icon: 'icons/mail-list.svg'
      },
      {
        name: 'Relations internationales',
        description: 'Service relations internationales',
        url: 'https://international.eirb.fr/',
        icon: 'icons/globe.svg'
      },
      {
        name: 'Stages',
        description: 'Tout savoir sur les stages',
        url: 'https://stages.eirb.fr/',
        icon: 'icons/internship.svg'
      },
      {
        name: 'Syllabus',
        description: 'Les cours, modules et coefficients',
        url: 'https://syllabus.eirb.fr/',
        icon: 'icons/books.svg'
      },
      {
        name: 'GLPI / Helpdesk',
        description: "« Faites un ticket » Support informatique de l'école",
        url: 'https://ticketinfo.eirb.fr/',
        icon: 'icons/life-buoy.svg'
      },
      {
        name: 'AIDEM',
        description: "L'Association des Ingénieurs Diplômés de l'ENSEIRB-MATMECA",
        url: 'https://aidem.eirb.fr/',
        icon: 'various/x128/aidem.png'
      }
    ]
  },
  {
    id: 'associations',
    name: 'Associations',
    links: [
      {
        name: 'AEI',
        description: 'Junior Entreprise',
        url: 'https://aei.eirb.fr/',
        icon: 'associations/x128/aei.png'
      },
      {
        name: 'BAE',
        description: 'Bureau des alternants',
        url: 'https://bae.eirb.fr/',
        icon: 'associations/x128/bae.png'
      },
      {
        name: 'BDA',
        description: 'Bureau des arts',
        url: 'https://bda.eirb.fr/',
        icon: 'associations/x128/bda.png'
      },
      {
        name: 'BDE',
        description: 'Bureau des élèves',
        url: 'https://bde.eirb.fr/',
        icon: 'associations/x128/bde.png'
      },
      {
        name: 'BDS',
        description: 'Bureau des sports',
        url: 'https://bds.eirb.fr/',
        icon: 'associations/x128/bds.png'
      },
      {
        name: 'Eirbot',
        description: 'Association de robotique',
        url: 'https://eirbot.eirb.fr/',
        icon: 'associations/x128/eirbot.png'
      },
      {
        name: 'Eirbware',
        description: "Association d'assistance et formation informatique",
        url: 'https://eirbware.eirb.fr/',
        icon: 'associations/x128/eirbware.png'
      },
      {
        name: 'EirLab',
        description: 'Fablab',
        url: 'https://eirlab.eirb.fr/',
        icon: 'associations/x128/eirlab.png'
      },
      {
        name: 'EirSpace',
        description: "Association d'aérospatial",
        url: 'https://eirspace.eirb.fr/',
        icon: 'associations/x128/eirspace.png'
      },
      {
        name: 'EirSport',
        description: 'Association multisport',
        url: 'https://eirsport.eirb.fr/',
        icon: 'associations/x128/eirsport.png'
      },
      {
        name: 'F6KQH',
        description: 'Club radioamateur',
        url: 'https://f6kqh.enseirb-matmeca.fr/',
        icon: 'associations/x128/f6kqh.png'
      },
      {
        name: "Gala Mos'fête",
        description: "Équipe d'organisation du gala",
        url: 'https://gala.eirb.fr/',
        icon: 'associations/x128/gala.png'
      },
      {
        name: 'Le Bar',
        description: 'Caféteria',
        url: 'https://bar.eirb.fr/',
        icon: 'associations/x128/bar.png'
      }
    ]
  },
  {
    id: 'clubs',
    name: 'Clubs',
    links: [
      {
        name: "Bill'eirb",
        description: 'Club de billard',
        url: 'https://bill.eirb.fr/',
        icon: 'associations/x128/billeirb.png'
      },
      {
        name: "Cook'eirb",
        description: 'Club de cuisine',
        url: 'https://cook.eirb.fr/',
        icon: 'associations/x128/cookeirb.png'
      },
      {
        name: "CheriF'eirb",
        description: 'Club de radio',
        url: 'https://radio.eirb.fr/',
        icon: 'associations/x128/cherifeirb.png'
      },
      {
        name: 'Eirbline',
        description: "Club d'aviation",
        url: 'https://eirbline.eirb.fr/',
        icon: 'associations/x128/eirbline.png'
      },
      {
        name: 'EMK',
        description: 'Club de Hip-Hop',
        url: 'https://emk.eirb.fr/',
        icon: 'associations/x128/emk.png'
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
        icon: 'associations/x128/gcc.png'
      },
      {
        name: 'Œno',
        description: "Club d'œnologie",
        url: 'https://oeno.eirb.fr/',
        icon: 'associations/x128/oeno.png'
      },
      {
        name: 'PixEirb',
        description: 'Club de photographie',
        url: 'https://pix.eirb.fr/',
        icon: 'associations/x128/pixeirb.png'
      },
      {
        name: 'Club Théâtre',
        description: 'Club de théâtre',
        url: 'https://theatre.eirb.fr/',
        icon: 'associations/x128/theatre.png'
      },
      {
        name: 'Unlock',
        description: 'Club de sécurité informatique',
        url: 'https://unlock.eirb.fr/',
        icon: 'associations/x128/unlock.png'
      },
      {
        name: 'Zik',
        description: 'Club de musique',
        url: 'https://zik.eirb.fr/',
        icon: 'associations/x128/zik.png'
      }
    ]
  },
  {
    id: 'lists',
    name: 'Listes',
    links: [
      {
        name: "Mafi'eirb",
        description: 'Liste BDE 2024/2025 perdante',
        url: 'https://mafi.eirb.fr/',
        icon: 'lists/x128/mafieirb.png'
      },
      {
        name: "Dionys'eirb",
        description: 'Liste BDE 2024/2025 gagnante',
        url: 'https://dionys.eirb.fr/',
        icon: 'lists/x128/dionyseirb.png'
      },
      {
        name: "Atlant'eirb",
        description: 'Liste BDS 2024/2025 gagnante',
        url: 'https://atlant.eirb.fr/',
        icon: 'lists/x128/atlanteirb.png'
      },
      {
        name: "Olymp'eirb",
        description: 'Liste BDS 2024/2025 perdante',
        url: 'https://olymp.eirb.fr/',
        icon: 'lists/x128/olympeirb.png'
      },
      {
        name: "Occult'eirb",
        description: 'Liste BDA 2024/2025',
        url: 'https://occult.eirb.fr/',
        icon: 'lists/x128/occulteirb.png'
      },
      {
        name: "Croisi'eirb",
        description: 'Liste BDE 2023/2024 gagnante',
        url: 'https://croisi.eirb.fr/',
        icon: 'lists/x128/croisieirb.png'
      },
      {
        name: "Valhall'eirb",
        description: 'Liste BDE 2023/2024 perdante',
        url: 'https://valhall.eirb.fr/',
        icon: 'lists/x128/valhalleirb.png'
      },
      {
        name: "Samour'eirb",
        description: 'Liste BDS gagnante 2023/2024',
        url: 'https://samour.eirb.fr/',
        icon: 'lists/x128/samoureirb.png'
      },
      {
        name: "US'eirb",
        description: 'Liste BDS perdante 2023/2024',
        url: 'https://us.eirb.fr/',
        icon: 'lists/x128/useirb.png'
      },
      {
        name: "Enchant'eirb",
        description: 'Liste BDA 2023/2024',
        url: 'https://enchant.eirb.fr/',
        icon: 'lists/x128/enchanteirb.png'
      },
      {
        name: "Univ'eirb",
        description: 'Liste BDE 2022/2023 gagnante',
        url: 'https://univ.eirb.fr/',
        icon: 'lists/x128/univeirb.png'
      },
      {
        name: "Rams'eirb",
        description: 'Liste BDE 2022/2023 perdante',
        url: 'https://rams.eirb.fr/',
        icon: 'lists/x128/ramseirb.png'
      },
      {
        name: "Explorat'eirb",
        description: 'Liste BDS 2022/2023',
        url: 'https://explorat.eirb.fr/',
        icon: 'lists/x128/explorateirb.png'
      },
      {
        name: "West'eirb",
        description: 'Liste BDE 2021/2022 gagnante',
        url: 'https://west.eirb.fr/',
        icon: 'lists/x128/westeirb.png'
      },
      {
        name: "Revolutionn'eirb",
        description: 'Liste BDE 2021/2022 perdante',
        url: 'https://revolution.eirb.fr/',
        icon: 'lists/x128/revolutionneirb.png'
      },
      {
        name: "Milit'eirb",
        description: 'Liste BDS 2021/2022',
        url: 'https://milit.eirb.fr/',
        icon: 'lists/x128/militeirb.png'
      },
      {
        name: "Cors'eirb",
        description: 'Liste BDS 2020/2021',
        url: 'https://cors.eirb.fr/',
        icon: 'lists/x128/corseirb.png'
      }
    ]
  }
];

export default links;

export type { Link, LinkGroup };
