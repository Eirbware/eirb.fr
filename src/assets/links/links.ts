enum AdditionalLinkType {
  ANY,
  LINKTREE,
  TELEGRAM,
  DISCORD,
  INSTAGRAM,
  WHATSAPP,
  FACEBOOK,
  LINKEDIN,
  MESSENGER,
  YOUTUBE,
}

const ICON_OF_LINK_TYPES: Record<AdditionalLinkType, string> = {
  [AdditionalLinkType.DISCORD]: 'discord.svg',
  [AdditionalLinkType.INSTAGRAM]: 'instagram.svg',
  [AdditionalLinkType.LINKTREE]: 'linktree.svg',
  [AdditionalLinkType.TELEGRAM]: 'telegram.svg',
  [AdditionalLinkType.WHATSAPP]: 'whatsapp.svg',
  [AdditionalLinkType.FACEBOOK]: 'facebook.svg',
  [AdditionalLinkType.LINKEDIN]: 'linkedin.svg',
  [AdditionalLinkType.MESSENGER]: 'messenger.svg',
  [AdditionalLinkType.ANY]: 'website.svg',
  [AdditionalLinkType.YOUTUBE]: 'youtube.svg',
};

function getIconURIForLinkType(linkType: AdditionalLinkType) {
  return `links/${ICON_OF_LINK_TYPES[linkType]}`;
}

interface AdditionalLink {
  url: string;
  description?: string;
  type: AdditionalLinkType;
}

interface Link {
  name: string;
  description: string;
  url: string;
  additionalLink?: AdditionalLink;
  icon: string;
}

interface LinkGroup {
  id: string;
  name: string;
  links: Link[];
}

const protectRedirectURL = (id: string) => `https://eirb.fr/protect/link.php?name=${id}`;

export type { Link, LinkGroup, AdditionalLink };
export { AdditionalLinkType, getIconURIForLinkType, protectRedirectURL };
