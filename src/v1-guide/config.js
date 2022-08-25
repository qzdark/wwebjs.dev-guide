module.exports = {
    settings: {
        version: 1,
        link: "/v1-guide/",
        sidebar: "/v1-guide/",
        navbar: "v1 Guide (Latest)",
        ready: true,
    },
    sidebar: [
        {
            title: "Getting Started",
            collapsable: false,
            children: [
                "",
                "getting-started/what-is-new"
            ],
        },
        {
            title: "Installation",
            collapsable: false,
            children: [
                "installation-and-preparation/",
                "installation-and-preparation/installing-wwebjs"
            ],
        },
        {
            title: "Creating Your App",
            collapsable: false,
            children: [
                "creating-your-app/",
                "creating-your-app/authentication",
                "creating-your-app/handling-messages",
                "creating-your-app/handling-attachments",
                "creating-your-app/interfacing-with-groups",
            ],
        },
        {
            title: "Features",
            collapsable: false,
            children: [
                "features/",
                "features/message-media",
                "features/stickers",
                "features/adding-reactions",
                "features/sending-buttons",
                "features/sending-lists",
                "features/sending-templates",
                "features/business"
            ],
        },
        {
            title: "Advanced",
            collapsable: false,
            children: [
                "advanced/",
                "advanced/debugging"
            ],
        },
        {
            title: "Popular Topics",
            collapsable: false,
            children: [
                "popular-topics/",
                "hosting.md"
            ],
        },
        {
            title: "Addeitional Information",
            collapsable: false,
            children: [
                "addeitional-information/",
                "something-missing"
            ],
        },
    ]
};