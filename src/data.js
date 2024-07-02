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
        title: "Africans in the Diaspora",
        description: "Growing up in Kenya, I was always captivated by the sight of the Maasai people, our local nomads, draped in vibrant Shukas as they tended to their livestock and nurtured their community bonds. The inspiration for 'Africans in The Diaspora' stemmed from my admiration for how the Maasai, despite their constant movement, prioritize unity and collective identity. This painting celebrates their unwavering connection to their roots, reminding us that regardless of where we are, we always remember WHO we are.",
        src: ["diaspora.jpg"],
        color: "#e17f7f",
        rgbColor: `${rgbDataURL(225, 127, 127)}`,
        carousel: false
    },

    {
        title: "Bloom",
        description: "'Bloom' was truly inspired by my deep love for sunflowers. There's just something about how they constantly reach for the sun that really speaks to me- that natural warmth penetrating your soul and making it feel like everything's going to be alright. This painting marked the beginning of my year, and I was eager to take on the challenge of capturing every intricate detail.",
        src: ["flower.jpg"],
        color: "#E1D10E",
        rgbColor: `${rgbDataURL(225, 209, 14)}`,
        carousel: false
    },

    {
        title: "Luminescent",
        description: "There's just something about jellyfish – how they're simultaneously ethereal and mesmerizing. I remember the first time I saw a jellyfish gracefully move in an aquarium; it was as if time stood still. Watching them was enchanting, a peaceful escape from the hustle and bustle of life. 'Luminescent' captures not only their glow in the dark, but also how beautiful jellyfish are— from a distance.",
        src: ["jelly-one-carousel.jpg","jelly-two-carousel.jpg"],
        color: "#D22D33",
        rgbColor: `${rgbDataURL(210, 45, 51)}`,
        carousel: true
    },
    

    {
        title: "Tukutane Kenya",
        description: "When I returned home to Kenya, seeing Matatus on the road made me feel like I had truly come back home. Our public transport system can be described as ‘wonderful chaos’, the way they maneuver through the streets. I was inspired to capture that essence in my work.",
        src: ["vehicles.jpg"],
        color: "#5B4C4D",
        rgbColor: `${rgbDataURL(91, 76, 77)}`,
        carousel: false
    },

    {
        title: "Lost",
        description: "When I first created this painting, it was a personal challenge for me to capture the essence of water waves and their movement. I found immense joy in experimenting with different layers of colors and carefully adding white highlights to depict how the moonlight danced upon the waves.",
        src: ["water.jpg"],
        color: "#013098",
        rgbColor: `${rgbDataURL(1, 48, 152)}`,
        carousel: false
    }
]