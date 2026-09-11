import { protectRedirectURL, type LinkGroup } from './links';

const channels: LinkGroup = {
    id: 'channels',
    name: 'Canaux des autres Organisations',
    links: [
        {
            name: "Linktree BINKS",
            description: "",
            url: protectRedirectURL("telegramBINKS"),
            icon: "associations/x128/binks.png"
        },
    ],
};

export default channels;
