import type { LinkGroup } from './links';

const services: LinkGroup = {
  id: 'services',
  name: 'Services Eirbware',
  links: [
    {
      name: "Tind'eirb",
      description: "Mise en relation entre parrains/marraines et fillot.e.s",
      url: 'https://tind.eirb.fr',
      icon: 'icons/tinder.svg',
    },
    {
      name: 'Wiki',
      description: "Encyclopédie collaborative de l'école",
      url: 'https://wiki.eirb.fr',
      icon: 'icons/wiki.svg',
    },
    {
      name: 'Vote',
      description: 'Site de vote pour les campagnes BDE et BDS',
      url: 'https://vote.eirb.fr',
      icon: 'icons/vote.svg',
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
      name: "Com",
      description: 'Utilitaire pour écrire des com telegram en markdown',
      url: 'https://com.eirb.fr',
      icon: 'icons/com.png',
    },
    {
      name: "Documentation",
      description: "Documentation d'Eirbware, pour Eirbware et les respos web",
      url: 'https://docs.eirb.fr',
      icon: 'icons/docs.png',
    },
    {
      name: 'Github Eirbware',
      description: "Organisation d'Eirbware sur github",
      url: 'https://github.com/Eirbware',
      icon: 'icons/github.svg',
    },
    /*{
              "name": "Scan'eirb",
              "description": "Application de gestion de billeterie et d'encaissement d'événements",
              "url": "https://scan.eirb.fr",
              "icon": "icons/scan.svg"
          }*/
  ],
};

export default services;
