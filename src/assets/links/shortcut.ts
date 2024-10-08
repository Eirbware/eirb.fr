import type { LinkGroup } from './links';

const shortcuts: LinkGroup = {
  id: 'shortcuts',
  name: 'Raccourcis pratiques',
  links: [
    {
      name: 'ENSEIRB-MATMECA',
      description: "Site officiel de l'école",
      url: 'https://ens.eirb.fr/',
      icon: 'various/x128/enseirb-matmeca.png',
    },
    {
      name: 'Webmail “Partage”',
      description: "Webmail de l'école",
      url: 'https://mail.eirb.fr/',
      icon: 'icons/mail.svg',
    },
    {
      name: 'Planning “ADE”',
      description: "Emploi du temps de l'école",
      url: 'https://ade.eirb.fr/',
      icon: 'icons/timetable.svg',
    },
    {
      name: 'Moodle',
      description: 'Plateforme pédagogique de Bordeaux INP',
      url: 'https://moodle.bordeaux-inp.fr/',
      icon: 'various/x128//moodle.png',
    },
    {
      name: 'Guide 1A',
      description: "Le guide de l'étudiant de première année",
      url: 'https://bde.eirb.fr/guide',
      icon: 'icons/book.svg',
    },
    {
      name: 'ENT',
      description: 'Espace numérique de travail',
      url: 'https://ent.eirb.fr/',
      icon: 'icons/tools.svg',
    },
    {
      name: 'Thor',
      description: 'Serveur pédagogique (dépôts Git, gestion de projet...)',
      url: 'https://thor.enseirb-matmeca.fr/',
      icon: 'various/x128/thor.png',
    },
    {
      name: 'Spagobi',
      description: 'Relevés de notes et certificats de scolarité',
      url: 'https://spagobi.eirb.fr/',
      icon: 'various/x128/spagobi.png',
    },
    {
      name: 'Apogée',
      description: 'Réinscription, notes et résultats',
      url: 'https://apogee.eirb.fr/',
      icon: 'icons/graduation.svg',
    },
    {
      name: 'JobTeaser',
      description: 'Career Center ENSEIRB-MATMECA',
      url: 'https://jobteaser.eirb.fr/',
      icon: 'various/x128/jobteaser.png',
    },
    {
      name: 'Listes mail',
      description: 'Listes de diffusion',
      url: 'https://listes.eirb.fr/',
      icon: 'icons/mail-list.svg',
    },
    {
      name: 'Relations internationales',
      description: 'Service relations internationales',
      url: 'https://international.eirb.fr/',
      icon: 'icons/globe.svg',
    },
    {
      name: 'Stages',
      description: 'Tout savoir sur les stages',
      url: 'https://stages.eirb.fr/',
      icon: 'icons/internship.svg',
    },
    {
      name: 'Syllabus',
      description: 'Les cours, modules et coefficients',
      url: 'https://syllabus.eirb.fr/',
      icon: 'icons/books.svg',
    },
    {
      name: 'GLPI / Helpdesk',
      description: "« Faites un ticket » Support informatique de l'école",
      url: 'https://ticketinfo.eirb.fr/',
      icon: 'icons/life-buoy.svg',
    },
    {
      name: 'AIDEM',
      description: "L'Association des Ingénieurs Diplômés de l'ENSEIRB-MATMECA",
      url: 'https://aidem.eirb.fr/',
      icon: 'various/x128/aidem.png',
    },
  ],
};

export default shortcuts;
