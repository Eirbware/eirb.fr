import type { LinkGroup } from './links';

const vpn: LinkGroup = {
  id: 'vpn',
  name: 'vpn Eirbware',
  links: [
    {
      name: 'Portainer',
      description: 'Gestion des conteneurs',
      url: 'https://portainer.vpn.eirb.fr',
      icon: 'icons/portainer.svg',
    },
    {
      name: 'adminconnect',
      description: 'Console administrateur de keycloak',
      url: 'https://adminconnect.vpn.eirb.fr',
      icon: 'icons/adminconnect.svg',
    },
    {
      name: 'docs',
      description: "Documentation d'Eirbware",
      url: 'https://docs.vpn.eirb.fr',
      icon: 'icons/docs.svg',
    },
    {
      name: 'wud',
      description: 'Mises à jour des conteneurs',
      url: 'https://wud.vpn.eirb.fr',
      icon: 'icons/wud.svg',
    },
    {
      name: 'monitor',
      description: 'Statistiques à propos du serveur',
      url: 'https://monitor.vpn.eirb.fr',
      icon: 'icons/monitor.svg',
    },
  ],
};

export default vpn;
