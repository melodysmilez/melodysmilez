export const categories = ["All", "Law", "AI", "Philosophy", "Psychology", "Creativity", "Fitness", "Books", "Technology"] as const;
export type LearningCategory = Exclude<(typeof categories)[number], "All">;

export type Post = {
  slug: string;
  title: string;
  category: LearningCategory;
  date: string;
  readTime: string;
  excerpt: string;
  hero: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "learning-to-think-in-public",
    title: "Learning to think in public",
    category: "Creativity",
    date: "May 18, 2026",
    readTime: "5 min read",
    excerpt: "Why unfinished thoughts deserve daylight—and how sharing them can make us more honest thinkers.",
    hero: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85",
    content: [
      "I used to believe an idea had to be polished before it could be shared. The result was predictable: many beautiful beginnings stayed hidden in notebooks.",
      "Thinking in public is not performing certainty. It is creating a trail of curiosity—showing what changed your mind, what confused you, and what you are still learning.",
      "My new rule is simple: share the question before you have perfected the answer. A living idea is more useful than a flawless one that never leaves the page."
    ]
  },
  {
    slug: "ai-as-a-creative-mirror",
    title: "AI as a creative mirror",
    category: "AI",
    date: "April 29, 2026",
    readTime: "7 min read",
    excerpt: "The most interesting thing about creative AI may be what it reveals about our own taste.",
    hero: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    content: [
      "A tool can generate a hundred possibilities, but it cannot decide which possibility feels like you.",
      "Taste becomes the scarce skill: the ability to notice, select, refine, and explain why one direction carries more life than another.",
      "I am learning to use AI less like an oracle and more like a mirror—something that reflects patterns back quickly enough for me to see my own preferences."
    ]
  },
  {
    slug: "the-philosophy-of-small-rituals",
    title: "The philosophy of small rituals",
    category: "Philosophy",
    date: "March 10, 2026",
    readTime: "4 min read",
    excerpt: "A cup, a walk, a page: how ordinary rituals shape a meaningful life.",
    hero: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=85",
    content: [
      "A ritual is an ordinary action made luminous by attention.",
      "The ritual does not need to be impressive. It only needs to return you to yourself.",
      "My favorite rituals are small enough to survive a difficult week: tea before screens, ten pages before sleep, one slow walk without headphones."
    ]
  },
  {
    slug: "notes-on-strength-and-softness",
    title: "Notes on strength and softness",
    category: "Fitness",
    date: "February 3, 2026",
    readTime: "6 min read",
    excerpt: "Reframing movement as care, capability, and a long conversation with the body.",
    hero: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=85",
    content: [
      "Strength is not the opposite of softness. Real strength creates room for softness.",
      "I want fitness to be less about correcting a body and more about building trust with it.",
      "Progress can look like a heavier lift, but it can also look like better sleep, steadier energy, or choosing rest before exhaustion makes the choice for you."
    ]
  }
];

export type Playlist = {
  title: string;
  description: string;
  cover: string;
  url: string;
  embed?: string;
};

export const playlists: Playlist[] = [
  {
    title: "Soft Girl Sunday",
    description: "Warm vocals, slow mornings, clean sheets, and sunlight through the curtains.",
    cover: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85",
    url: "https://open.spotify.com/",
    embed: ""
  },
  {
    title: "Main Character Walk",
    description: "Confident, cinematic songs for walking somewhere with unnecessary purpose.",
    cover: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=900&q=85",
    url: "https://open.spotify.com/",
    embed: ""
  },
  {
    title: "Brain Food",
    description: "Instrumental focus music for reading, writing, coding, and disappearing into an idea.",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85",
    url: "https://open.spotify.com/",
    embed: ""
  }
];

export const worldCategories = ["All", "Objects", "Books", "Music", "Style", "Places", "Ideas", "Images"] as const;
export type WorldCategory = Exclude<(typeof worldCategories)[number], "All">;

export type WorldItem = {
  title: string;
  category: WorldCategory;
  description: string;
  image: string;
  link?: string;
};

export const worldItems: WorldItem[] = [
  { title: "The perfect reading chair", category: "Objects", description: "Curved, cocoon-like, and made for losing an afternoon.", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85" },
  { title: "A room of books", category: "Books", description: "Proof that storage can also be atmosphere.", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85" },
  { title: "Tiny silver details", category: "Style", description: "Quiet jewelry that catches the light.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85" },
  { title: "Somewhere in Italy", category: "Places", description: "Warm walls, long lunches, no urgent plans.", image: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&w=1000&q=85", link: "https://www.google.com/maps" },
  { title: "Color as a language", category: "Ideas", description: "Collecting palettes that feel like emotional weather.", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=85" },
  { title: "Headphones on", category: "Music", description: "The private architecture of a favorite song.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85" },
  { title: "Flowers, slightly undone", category: "Images", description: "Beauty is better when it is not trying too hard.", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85" },
  { title: "Notes in the margin", category: "Books", description: "Reading as a conversation across time.", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=85" }
];
