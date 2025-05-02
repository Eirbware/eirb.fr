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
      name: 'Connect',
      description: 'Console administrateur de keycloak',
      url: 'https://adminconnect.vpn.eirb.fr/admin/eirb/console',
      icon: 'icons/connect.svg',
    },
    {
      name: "What's up docker",
      description: 'Mises à jour des conteneurs',
      url: 'https://wud.vpn.eirb.fr',
      icon: 'icons/wud.svg',
    },
    {
      name: 'Monitor',
      description: 'Statistiques à propos du serveur',
      url: 'https://monitor.vpn.eirb.fr',
      icon: 'icons/monitor.svg',
    },
  ],
};

export default vpn;
