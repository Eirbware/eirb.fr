
import type { Link, LinkGroup } from "./links";
import services from "./services";
import shortcuts from "./shortcut";
import assos from "./assos";
import clubs from "./club";
import lists from "./lists";
import channels from "./channels";

const links: LinkGroup[] = [
  services,
  shortcuts,
  assos,
  clubs,
  lists,
  channels,
];

export default links;

export type { Link, LinkGroup };
