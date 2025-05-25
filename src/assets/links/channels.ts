import type { LinkGroup } from './links';

const protectRedirectURL = (id: string) => `https://eirb.fr/protect/link.php?name=${id}`;

const channels: LinkGroup = {
    id: 'channels',
    name: 'Canaux',
    links: [
        {
            name: "Telegram Arte",
            description: "",
            url: protectRedirectURL("telegramArte"),
            icon: "links/telegram.svg"
        },
        {
            name: "Linktree BINKS",
            description: "",
            url: protectRedirectURL("telegramBINKS"),
            icon: "links/linktree.svg"
        },
        {
            name: "Telegram Billeirb",
            description: "",
            url: protectRedirectURL("telegramBilleirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Bouquin'eirb",
            description: "",
            url: protectRedirectURL("telegramBouquineirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Cin'eirb",
            description: "",
            url: protectRedirectURL("telegramCineirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram CluBee",
            description: "",
            url: protectRedirectURL("telegramCluBee"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Théâtre",
            description: "",
            url: protectRedirectURL("telegramTheatre"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Zik",
            description: "",
            url: protectRedirectURL("telegramZik"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Oeno",
            description: "",
            url: protectRedirectURL("telegramOeno"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Cook'eirb",
            description: "",
            url: protectRedirectURL("telegramCook"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Couturi'eirb",
            description: "",
            url: protectRedirectURL("telegramCouturieirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Cycl'eirb",
            description: "",
            url: protectRedirectURL("telegramCycleirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram telegramDans'eirb",
            description: "",
            url: protectRedirectURL("telegramDanseirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Discord EGH",
            description: "",
            url: protectRedirectURL("discordEGH"),
            icon: "links/discord.svg"
        },
        {
            name: "Telegram EMK",
            description: "",
            url: protectRedirectURL("telegramEMK"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Eirlab",
            description: "",
            url: protectRedirectURL("telegramEirlab"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Eirspace",
            description: "",
            url: protectRedirectURL("telegramEirspace"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Eirsport",
            description: "",
            url: protectRedirectURL("telegramEirsport"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Eirb'ia",
            description: "",
            url: protectRedirectURL("telegramEirbia"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Eirbees",
            description: "",
            url: protectRedirectURL("telegramEirbees"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Eirbline",
            description: "",
            url: protectRedirectURL("telegramEirbline"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Eirbot",
            description: "",
            url: protectRedirectURL("telegramEirbot"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Eirbware",
            description: "",
            url: protectRedirectURL("telegramEirbware"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Chorale",
            description: "",
            url: protectRedirectURL("discordChorale"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram FatCap",
            description: "",
            url: protectRedirectURL("telegramFatCap"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Financi'eirb",
            description: "",
            url: protectRedirectURL("telegramFinancieirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Formul'eirb",
            description: "",
            url: protectRedirectURL("telegramFormuleirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Discord Foyer",
            description: "",
            url: protectRedirectURL("discordFoyer"),
            icon: "links/discord.svg"
        },
        {
            name: "Discord GCC",
            description: "",
            url: protectRedirectURL("discordGCC"),
            icon: "links/discord.svg"
        },
        {
            name: "Telegram Grimp'eirb",
            description: "",
            url: protectRedirectURL("telegramGrimpeirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "telegram InpAct",
            description: "",
            url: protectRedirectURL("telegramInpact"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Ingenib",
            description: "",
            url: protectRedirectURL("telegramIngenib"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Journal'eirb",
            description: "",
            url: protectRedirectURL("telegramJournaleirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Essaim",
            description: "",
            url: protectRedirectURL("telegramEssaim"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Ruche",
            description: "",
            url: protectRedirectURL("telegramRuche"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Pal'eirb",
            description: "",
            url: protectRedirectURL("telegramPaleirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Pet'eirb",
            description: "",
            url: protectRedirectURL("telegramPeteirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Pixeirb",
            description: "",
            url: protectRedirectURL("telegramPixeirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Planet'eirb",
            description: "",
            url: protectRedirectURL("telegramPlaneteirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Pokeirb",
            description: "",
            url: protectRedirectURL("telegramPokeirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Rapeirb",
            description: "",
            url: protectRedirectURL("telegramRapeirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Solideirb",
            description: "",
            url: protectRedirectURL("telegramSolideirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Telegram Supporteirb",
            description: "",
            url: protectRedirectURL("telegramSupporteirb"),
            icon: "links/telegram.svg"
        },
        {
            name: "Discord Unlock",
            description: "",
            url: protectRedirectURL("discordUnlock"),
            icon: "links/discord.svg"
        },
        {
            name: "Telegram Vost",
            description: "",
            url: protectRedirectURL("telegramVost"),
            icon: "links/telegram.svg"
        },
    ],
};

export default channels;
