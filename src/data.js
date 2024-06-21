const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export const projects = [
    {
        title: "Project Rays",
        description: "This is the description.",
        src: ["rays.jpg", "red-door.jpg", "yellow-door.jpg", "orange-door.jpg", "purple-door.jpg", "blue-door.jpg", "gray-door.jpg", "white-door.jpg"],
        color: "#85b8c6", //85b8c6
        rgbColor: `${rgbDataURL(133, 184, 198)}`,
        carousel: true
    },

    {
        title: "Africans in the Diaspora",
        description: "This is the description.",
        src: ["diaspora.jpg"],
        color: "#e17f7f",
        rgbColor: `${rgbDataURL(225, 127, 127)}`,
        carousel: false
    },

    {
        title: "Bloom",
        description: "This is the description.",
        src: ["flower.jpg"],
        color: "#E1D10E",
        rgbColor: `${rgbDataURL(225, 209, 14)}`,
        carousel: false
    },

    {
        title: "Luminescent",
        description: "This is the description.",
        src: ["jelly-one-carousel.jpg","jelly-two-carousel.jpg"],
        color: "#D22D33",
        rgbColor: `${rgbDataURL(210, 45, 51)}`,
        carousel: true
    },
    

    {
        title: "Tukutane Kenya",
        description: "This is the description.",
        src: ["vehicles.jpg"],
        color: "#5B4C4D",
        rgbColor: `${rgbDataURL(91, 76, 77)}`,
        carousel: false
    },

    {
        title: "Lost",
        description: "This is the description.",
        src: ["water.jpg"],
        color: "#013098",
        rgbColor: `${rgbDataURL(1, 48, 152)}`,
        carousel: false
    }
]