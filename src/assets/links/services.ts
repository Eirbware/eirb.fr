import type { LinkGroup } from './links';

const services: LinkGroup = {
  id: 'services',
  name: 'Services Eirbware',
  links: [
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
      name: "FTP'eirb",
      description: 'Accès FTP pour la gestion des sites web hébergés par Eirbware',
      url: 'https://ftp.eirb.fr',
      icon: 'icons/ftp.svg',
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
