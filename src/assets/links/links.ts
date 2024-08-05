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

export type { Link, LinkGroup };
