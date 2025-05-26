import type { Link, LinkGroup } from './links';
import { AdditionalLinkType, getIconURIForLinkType } from './links';
import vpn from './vpn';
import services from './services';
import shortcuts from './shortcut';
import assos from './assos';
import clubs from './club';
import lists from './lists';
import channels from './channels';

const links: LinkGroup[] = [vpn, services, shortcuts, assos, clubs, lists, channels];

export { AdditionalLinkType, getIconURIForLinkType, links };

export type { Link, LinkGroup };
