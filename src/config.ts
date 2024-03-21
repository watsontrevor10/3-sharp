// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https:/www.threesharp.com/", // Always put "/" at the end of the URL
    author: "Trevor Watson",
    desc: "Band website for 3# Jazz Trio, a Utah-based jazz ensemble.",
    title: "3# Jazz Trio",
    ogImage: "images/logo-trans.png",
    keywords: "Jazz trio, three sharp, 3#, utah jazz ensemble",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Facebook",
        href: "https://github.com/christian-luntok/astro-nutritrack/",
        icon: "ph:facebook-logo-duotone",
        title: `Follow ${SITE.title} on Facebook`,
        active: false
    },
    {
        name: "Instagram",
        href: "https://github.com/christian-luntok/astro-nutritrack/",
        icon: "ph:instagram-logo-duotone",
        title: `Follow ${SITE.author} on Instagram`,
        active: true
    },
    {
        name: "YouTube",
        href: "https://github.com/christian-luntok/astro-nutritrack/",
        icon: "",
        title: `${SITE.title} on YouTube`,
        active: false
    }
];
