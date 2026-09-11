import type { Link, LinkGroup } from './links';
import { AdditionalLinkType, getIconURIForLinkType } from './links';
import vpn from './vpn';
import services from './services';
import shortcuts from './shortcut';
import assos from './assos';
import active_clubs from './active_clubs';
import lists from './lists';
import channels from './channels';
import dormant_clubs from './dormant_clubs';

const links: LinkGroup[] = [vpn, services, shortcuts, assos, active_clubs, lists, channels, dormant_clubs];

export { AdditionalLinkType, getIconURIForLinkType, links };

export type { Link, LinkGroup };
