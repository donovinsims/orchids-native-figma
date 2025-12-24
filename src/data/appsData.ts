export interface Website {
  id: string;
  title: string;
  description: string;
  href: string;
  faviconUrl: string;
  category?: string;
}

export interface AppDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  platforms: string[];
  pricing: string;
  developer: string;
  lastUpdated: string;
  websiteUrl: string;
  faviconUrl: string;
  previewImage: string;
  about: string;
  features: string[];
  relatedApps?: RelatedApp[];
}

export interface RelatedApp {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  href: string;
}

export const websitesData: Website[] = [
  {
    id: "akiflow",
    title: "Akiflow",
    description: "AI Productivity Suite: Tasks",
    category: "Productivity",
    href: "/apps/akiflow",
    faviconUrl: "https://www.google.com/s2/favicons?domain=akiflow.com&sz=128",
  },
  {
    id: "cleanclip",
    title: "CleanClip",
    description: "Mac Clipboard Manager: Sequential Paste",
    category: "Productivity",
    href: "/apps/cleanclip",
    faviconUrl: "https://www.google.com/s2/favicons?domain=cleanclip.cc&sz=128",
  },
  {
    id: "designcode",
    title: "Design+Code",
    description: "Learn design and code by building real apps with React and Swift.",
    category: "Education",
    href: "/apps/designcode",
    faviconUrl: "https://designcode.io/favicon-32x32.png?v=42a278c0c94e914295c7dd0eddf50492",
  },
  {
    id: "eden",
    title: "Eden",
    description: "One Place For All Your Creative Work",
    category: "Productivity",
    href: "/apps/eden",
    faviconUrl: "https://framerusercontent.com/images/NBzdgTQOtcwXsJCJCgnkx1jShg.png",
  },
  {
    id: "flylighter",
    title: "Flylighter",
    description: "Notion web clipper focused on speed and flexibility.",
    category: "Productivity",
    href: "/apps/flylighter",
    faviconUrl: "https://flylighter.com/favicon.png",
  },
  {
    id: "matter",
    title: "Matter",
    description: "Modern read-later app for iPhone, iPad, and web.",
    category: "Productivity",
    href: "/apps/matter",
    faviconUrl: "https://getmatter.com/favicon.ico",
  },
  {
    id: "humblytics",
    title: "Humblytics",
    description: "Run conversion experiments without waiting on developers.",
    category: "Analytics",
    href: "/apps/humblytics",
    faviconUrl: "https://framerusercontent.com/images/xGpQ9r5keeG3F7rc3hM4Dg3Rks.png",
  },
  {
    id: "kortex",
    title: "Kortex",
    description: "AI-powered platform for interconnected writing and note-taking.",
    category: "AI Tools",
    href: "/apps/kortex",
    faviconUrl: "https://cdn.prod.website-files.com/66e2be2343a7c5501a5a7fe2/66eda605d155545da532ad77_Kortex%20Favicon.png",
  },
  {
    id: "lazy",
    title: "Lazy",
    description: "Universal clipper and note-taking tool.",
    category: "Productivity",
    href: "/apps/lazy",
    faviconUrl: "https://lazy.so/favicon_io/favicon-32x32.png",
  },
  {
    id: "creator-mba",
    title: "The Creator MBA",
    description: "Complete blueprint for starting a profitable Internet business.",
    category: "Education",
    href: "/apps/creator-mba",
    faviconUrl: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/2147532368/images/2a3651-6835-e853-dc4e-a11552b52c4_JustinWelsh-Monogram_4_.png?v=2",
  },
  {
    id: "mimestream",
    title: "Mimestream",
    description: "Fast email client for Mac, optimized for Gmail.",
    category: "Productivity",
    href: "/apps/mimestream",
    faviconUrl: "https://mimestream.com/assets/icons/app-icon_32x32.png",
  },
  {
    id: "orchids",
    title: "Orchids",
    description: "The Vibe Coding IDE, an AI-powered tool for building apps.",
    category: "Development",
    href: "/apps/orchids",
    faviconUrl: "https://orchids.app/favicon.ico",
  },
  {
    id: "polar",
    title: "Polar",
    description: "Monetize your software with 6 lines of code.",
    category: "Fintech",
    href: "/apps/polar",
    faviconUrl: "https://polar.sh/favicon.png",
  },
  {
    id: "rows",
    title: "Rows",
    description: "AI spreadsheet that connects to all your data sources.",
    category: "Productivity",
    href: "/apps/rows",
    faviconUrl: "https://rows.com/favicon-db1159ebe7660d30970d9d49ad633a8396ee236c89eb06e2b9878f1a5a72573c/favicon.ico",
  },
  {
    id: "segmentui",
    title: "SegmentUI",
    description: "UI Kits and Components for Framer & Figma.",
    category: "Design",
    href: "/apps/segmentui",
    faviconUrl: "https://framerusercontent.com/images/mFyfqomzD8KEi8lZPvsm5xEF4l8.png",
  },
  {
    id: "superhuman",
    title: "Superhuman",
    description: "AI-powered suite of tools including mail and docs.",
    category: "Productivity",
    href: "/apps/superhuman",
    faviconUrl: "https://superhumanstatic.com/super-funnel/main/public/images/v1/favicons/superhuman-icon.svg",
  },
  {
    id: "tally",
    title: "Tally",
    description: "Free and intuitive form builder that works like a text document.",
    category: "No-code",
    href: "/apps/tally",
    faviconUrl: "https://tally.so/favicon.svg",
  },
  {
    id: "dan-koe",
    title: "Dan Koe",
    description: "Resources for personal growth and digital business.",
    category: "Education",
    href: "/apps/dan-koe",
    faviconUrl: "https://thedankoe.com/wp-content/uploads/2022/04/koe-favicon-150x150.jpg",
  },
  {
    id: "texts",
    title: "Texts",
    description: "A unified messaging platform for all your communication needs.",
    category: "Communication",
    href: "/apps/texts",
    faviconUrl: "https://www.google.com/s2/favicons?domain=texts.com&sz=128",
  },
  {
    id: "beehiiv",
    title: "beehiiv",
    description: "All-in-one platform for newsletters, websites, and growth tools.",
    category: "Marketing",
    href: "/apps/beehiiv",
    faviconUrl: "https://beehiiv-marketing-images.s3.amazonaws.com/Redesign2023/favicon.png",
  },
  {
    id: "flow",
    title: "Flow",
    description: "Voice-to-text AI that turns speech into polished writing.",
    category: "AI Tools",
    href: "/apps/flow",
    faviconUrl: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/684b3be32acf9b372f54d041_ws-favi.png",
  },
  {
    id: "onetap",
    title: "OneTap",
    description: "Copy-paste everything instantly from your keyboard.",
    category: "Productivity",
    href: "/apps/onetap",
    faviconUrl: "https://framerusercontent.com/images/KwRNiJTpOyodG3xW6SXTxmVnnc.png",
  },
  {
    id: "screen-studio",
    title: "Screen Studio",
    description: "Screen recorder for macOS that enhances recordings.",
    category: "Video",
    href: "/apps/screen-studio",
    faviconUrl: "https://www.screen.studio/icon.png",
  },
  {
    id: "plunk",
    title: "Plunk",
    description: "Open-source, affordable email platform for marketing.",
    category: "Marketing",
    href: "/apps/plunk",
    faviconUrl: "https://www.useplunk.com/favicon/favicon-32x32.png",
  },
  {
    id: "spiral",
    title: "Spiral",
    description: "The AI Writing Partner for Social.",
    category: "AI Tools",
    href: "/apps/spiral",
    faviconUrl: "https://framerusercontent.com/images/ZJjuhw9IT16KQiTUilnGpsrxuVw.svg",
  },
  {
    id: "monologue",
    title: "Monologue",
    description: "Effortless voice dictation that understands your work.",
    category: "Productivity",
    href: "/apps/monologue",
    faviconUrl: "https://framerusercontent.com/images/aF3yOlwFNUtfqtTdVBPl2pbUP3o.png",
  },
  {
    id: "youform",
    title: "Youform",
    description: "Free Typeform alternative with unlimited submissions.",
    category: "No-code",
    href: "/apps/youform",
    faviconUrl: "https://youform.io/assets/images/favicon.ico",
  }
];

export const appDetailsData: Record<string, AppDetail> = {
  "akiflow": {
    id: "akiflow",
    title: "Akiflow",
    description: "AI Productivity Suite: Tasks",
    category: "Productivity",
    platforms: ["macOS", "Windows", "iOS", "Android"],
    pricing: "Paid",
    developer: "Akiflow",
    lastUpdated: "Today",
    websiteUrl: "https://akiflow.com",
    faviconUrl: "https://www.google.com/s2/favicons?domain=akiflow.com&sz=128",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Fakiflow.com&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=720",
    about: "Akiflow is an all-in-one AI productivity suite that unifies calendars and inbox for seamless flow. Save hours weekly with AI time-blocking, a universal inbox for integrations, and an AI assistant (Aki) to plan and prioritize. It's the ultimate tool for task and calendar management.",
    features: [
      "AI time-blocking",
      "Universal inbox for integrations",
      "AI assistant (Aki) to plan and prioritize",
      "Streamlining task and calendar management",
      "Consolidating work inputs from various tools"
    ]
  },
  "cleanclip": {
    id: "cleanclip",
    title: "CleanClip",
    description: "Mac Clipboard Manager: Sequential Paste",
    category: "Productivity",
    platforms: ["macOS"],
    pricing: "Free",
    developer: "CleanClip",
    lastUpdated: "Today",
    websiteUrl: "https://cleanclip.cc",
    faviconUrl: "https://www.google.com/s2/favicons?domain=cleanclip.cc&sz=128",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Fcleanclip.cc&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=720",
    about: "CleanClip is a powerful clipboard management software for extreme efficiency and minimal context switching. Features include auto-saving, smart content management, a quick menu, and 'Paste Stack' for sequential pasting. This Mac utility is designed to double user productivity.",
    features: [
      "Auto-saving clipboard history",
      "Smart content management",
      "Quick menu for easy access",
      "'Paste Stack' for sequential pasting",
      "Streamlining repetitive copy-paste tasks"
    ]
  },
  "designcode": {
    id: "designcode",
    title: "Design+Code",
    description: "Learn design and code by building real apps with React and Swift.",
    category: "Education",
    platforms: ["Web", "iOS"],
    pricing: "Paid",
    developer: "Design+Code",
    lastUpdated: "Today",
    websiteUrl: "https://designcode.io",
    faviconUrl: "https://designcode.io/favicon-32x32.png?v=42a278c0c94e914295c7dd0eddf50492",
    previewImage: "https://images.ctfassets.net/ooa29xqb8tix/24XYZktClnZjDjt2YNlGmX/d857becac30265e19ad8847365c68fbf/Metadata.png",
    about: "Design+Code offers complete courses and tutorials on design and code, specifically focusing on building real apps with React and Swift. Pro Access includes 50+ courses, 320+ premium tutorials, 300+ hours of videos, source files, and certificates.",
    features: [
      "50+ courses on design and code",
      "320+ premium tutorials",
      "300+ hours of video content",
      "Source files and certificates",
      "React and Swift app development"
    ]
  },
  "eden": {
    id: "eden",
    title: "Eden",
    description: "One Place For All Your Creative Work",
    category: "Productivity",
    platforms: ["Web"],
    pricing: "Contact for Pricing",
    developer: "Eden",
    lastUpdated: "Today",
    websiteUrl: "https://eden.so/",
    faviconUrl: "https://framerusercontent.com/images/NBzdgTQOtcwXsJCJCgnkx1jShg.png",
    previewImage: "https://framerusercontent.com/assets/1DeHvV4Tz302r8YLrI0WCoUkp8.png",
    about: "Eden is an AI-powered workspace designed to consolidate all creative work, eliminating the need for multiple tools and tabs. It features intelligent file storage that automatically transcribes, tags, and organizes all ideas, files, media, and links. Users can leverage a powerful visual search to instantly find any video frame, image, or file by describing its content.",
    features: [
      "Intelligent file storage and tagging",
      "Powerful visual search for media",
      "Spatial AI Canvas for connecting items",
      "Multiple AI chats for content and research",
      "Team collaboration and video commenting"
    ]
  },
  "flylighter": {
    id: "flylighter",
    title: "Flylighter",
    description: "Notion web clipper focused on speed and flexibility.",
    category: "Productivity",
    platforms: ["Web", "Browser Extension"],
    pricing: "Contact for Pricing",
    developer: "Flylighter",
    lastUpdated: "Today",
    websiteUrl: "https://flylighter.com",
    faviconUrl: "https://flylighter.com/favicon.png",
    previewImage: "https://flylighter.com/flylighter-banner.jpeg",
    about: "Flylighter is a Notion web clipper designed for speed and flexibility, enabling users to capture a wide range of web content including links, full articles, highlights, blocks of text, images, tables, and videos. It facilitates organizing digital life in Notion by allowing users to create swipe files, read-it-later lists, and add annotations to their captures.",
    features: [
      "Capture links, articles, and highlights",
      "Auto-fill database properties in Notion",
      "Support for web tables and code blocks",
      "Create read-it-later lists and swipe files",
      "Flexible and customizable workflows"
    ]
  },
  "matter": {
    id: "matter",
    title: "Matter",
    description: "Modern read-later app for iPhone, iPad, and web.",
    category: "Productivity",
    platforms: ["iOS", "iPadOS", "Web"],
    pricing: "Freemium & Paid",
    developer: "Matter",
    lastUpdated: "Today",
    websiteUrl: "https://getmatter.com",
    faviconUrl: "https://getmatter.com/favicon.ico",
    previewImage: "https://main--matter-website-e45df7.netlify.app/images/og-index.jpg",
    about: "Matter is the modern read-later app for iPhone, iPad, and web. Its simplicity, power, and award-winning design have earned it three Apple “App of the Day” honors. Built by a small team of avid readers, Matter is crafted to stand the test of time.",
    features: [
      "Save articles, threads, and PDFs",
      "Advanced parsing technology for distraction-free reading",
      "Newsletter integration via Gmail or unique email",
      "Seamless switching between audio and text",
      "Offline search and full-text tagging"
    ]
  },
  "humblytics": {
    id: "humblytics",
    title: "Humblytics",
    description: "Run conversion experiments without waiting on developers.",
    category: "Analytics",
    platforms: ["Web"],
    pricing: "Paid",
    developer: "Humblytics",
    lastUpdated: "Today",
    websiteUrl: "https://humblytics.com",
    faviconUrl: "https://framerusercontent.com/images/xGpQ9r5keeG3F7rc3hM4Dg3Rks.png",
    previewImage: "https://framerusercontent.com/images/60HjhXRBD6ChqxMX3f9cRoAYB4.png",
    about: "Humblytics is an all-in-one platform for conversion optimization, offering analytics, heatmaps, split testing, and funnels. It enables marketing teams to run conversion experiments without needing developers, using a visual editor to deploy changes in 60 seconds.",
    features: [
      "Visual A/B split testing",
      "Click heatmaps and scroll depth tracking",
      "User journey and funnel tracking",
      "Privacy-first tracking without cookies",
      "Unified dashboard for site traffic"
    ]
  },
  "kortex": {
    id: "kortex",
    title: "Kortex",
    description: "AI-powered platform for interconnected writing and note-taking.",
    category: "AI Tools",
    platforms: ["Web"],
    pricing: "Freemium & Paid",
    developer: "Kortex",
    lastUpdated: "Today",
    websiteUrl: "https://kortex.co",
    faviconUrl: "https://cdn.prod.website-files.com/66e2be2343a7c5501a5a7fe2/66eda605d155545da532ad77_Kortex%20Favicon.png",
    previewImage: "https://cdn.prod.website-files.com/66e2be2343a7c5501a5a7fe2/67040fbb0eccf2b5347664d8_Kortex%20OG%20Image%20Update.webp",
    about: "Kortex is an AI-powered platform designed for interconnected writing, note-taking, and content creation, serving as a 'second brain' to synthesize ideas, manage highlights, and overcome writer's block. It aims to centralize all AI models, offering 25+ prebuilt workflows.",
    features: [
      "25+ prebuilt content creation workflows",
      "kAI for summaries, advice, and research",
      "Interconnected writing and note-taking",
      "Advanced search by tags and content",
      "Markdown export and team collaboration"
    ]
  },
  "lazy": {
    id: "lazy",
    title: "Lazy",
    description: "Universal clipper and note-taking tool.",
    category: "Productivity",
    platforms: ["Web", "macOS", "Windows"],
    pricing: "Freemium & Paid",
    developer: "Lazy",
    lastUpdated: "Today",
    websiteUrl: "https://lazy.so",
    faviconUrl: "https://lazy.so/favicon_io/favicon-32x32.png",
    previewImage: "https://lazy.so/images/lazy-og.jpg?4362984378",
    about: "Lazy is a universal clipper designed to end context switching, allowing users to capture anything from anywhere without leaving their current application. It functions as more than just a web clipper, letting you clip information from any app you're working in.",
    features: [
      "Universal capture from any application",
      "GPT integration for quick summaries",
      "Voice input for rapid idea capture",
      "Interconnected note-taking space",
      "Minimal context switching"
    ]
  },
  "creator-mba": {
    id: "creator-mba",
    title: "The Creator MBA",
    description: "Complete blueprint for starting a profitable Internet business.",
    category: "Education",
    platforms: ["Web"],
    pricing: "One-Time Payment",
    developer: "Justin Welsh",
    lastUpdated: "Today",
    websiteUrl: "https://learn.justinwelsh.me/creator-mba",
    faviconUrl: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/2147532368/images/2a3651-6835-e853-dc4e-a11552b52c4_JustinWelsh-Monogram_4_.png?v=2",
    previewImage: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/2147532368/images/2c8f-e310-7e06-bfad-af2206c8df38_3107e7e8-47d7-42ba-8711-12f3c34dfa88.png",
    about: "The Creator MBA delivers a complete blueprint for starting, building, and sustaining a profitable Internet business. It is a comprehensive digital video course resulting from 5 years of expertise, proven methods, and actionable strategies.",
    features: [
      "Complete roadmap for online business",
      "Frameworks for business ideas and customer understanding",
      "Strategies for content distribution and traffic capture",
      "Email marketing and business system optimization",
      "Hype-free, actionable growth strategies"
    ]
  },
  "mimestream": {
    id: "mimestream",
    title: "Mimestream",
    description: "Fast email client for Mac, optimized for Gmail.",
    category: "Productivity",
    platforms: ["macOS"],
    pricing: "Freemium & Paid",
    developer: "Mimestream",
    lastUpdated: "Today",
    websiteUrl: "https://mimestream.com",
    faviconUrl: "https://mimestream.com/assets/icons/app-icon_32x32.png",
    previewImage: "https://mimestream.com/assets/images/site-preview.png",
    about: "Mimestream is a Mac-native email client designed to leverage Gmail's advanced features through the Gmail API. It offers a lightning-fast experience with powerful triage features like Inbox Categories, full support for Gmail labels and filters.",
    features: [
      "Mac-native performance and integration",
      "Direct Gmail API integration",
      "Unified or separate Gmail account views",
      "Powerful triage and label support",
      "Markdown support and Gmail Aliases"
    ]
  },
  "orchids": {
    id: "orchids",
    title: "Orchids",
    description: "The Vibe Coding IDE, an AI-powered tool for building apps.",
    category: "Development",
    platforms: ["Web", "macOS", "Windows"],
    pricing: "Free",
    developer: "Orchids",
    lastUpdated: "Today",
    websiteUrl: "https://orchids.app",
    faviconUrl: "https://orchids.app/favicon.ico",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Forchids.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=720",
    about: "Orchids is The Vibe Coding IDE, a powerful AI development tool designed to help users build applications, games, tools, websites, and UI. It stands out by allowing users to chat to build, edit, and fix code, much like interacting with a human developer.",
    features: [
      "Chat-to-build AI code generation",
      "Native Supabase and Stripe integration",
      "Built-in browser for element selection",
      "Interactive screen and voice capabilities",
      "Full-stack application development"
    ]
  },
  "polar": {
    id: "polar",
    title: "Polar",
    description: "Monetize your software with 6 lines of code.",
    category: "Fintech",
    platforms: ["Web"],
    pricing: "Paid",
    developer: "Polar",
    lastUpdated: "Today",
    websiteUrl: "https://polar.sh",
    faviconUrl: "https://polar.sh/favicon.png",
    previewImage: "https://polar.sh/assets/brand/polar_og.jpg",
    about: "Polar provides a complete financial infrastructure for software and digital products, enabling flexible SaaS billing, subscription management, and usage-based pricing models. It acts as a Global Merchant of Record, handling all tax compliance.",
    features: [
      "Flexible SaaS billing and subscriptions",
      "Global Merchant of Record services",
      "Usage-based pricing models",
      "Tax compliance (VAT, Sales Tax) handling",
      "Detailed revenue and cost analytics"
    ]
  },
  "rows": {
    id: "rows",
    title: "Rows",
    description: "AI spreadsheet that connects to all your data sources.",
    category: "Productivity",
    platforms: ["Web"],
    pricing: "Freemium & Paid",
    developer: "Rows",
    lastUpdated: "Today",
    websiteUrl: "https://rows.com",
    faviconUrl: "https://rows.com/favicon-db1159ebe7660d30970d9d49ad633a8396ee236c89eb06e2b9878f1a5a72573c/favicon.ico",
    previewImage: "https://rows.com/media/share.png",
    about: "Rows reimagines the traditional spreadsheet by integrating powerful AI capabilities and direct connections to popular business applications like Google Analytics, Salesforce, and Facebook Ads. Users can import data and automate analysis.",
    features: [
      "AI-powered functions and automation",
      "Direct connections to business tools",
      "Interactive reports and dashboards",
      "Automated data analysis",
      "Collaborative spreadsheet environment"
    ]
  },
  "segmentui": {
    id: "segmentui",
    title: "SegmentUI",
    description: "UI Kits and Components for Framer & Figma.",
    category: "Design",
    platforms: ["Web", "Framer", "Figma"],
    pricing: "One-Time Payment",
    developer: "SegmentUI",
    lastUpdated: "Today",
    websiteUrl: "https://segmentui.com/",
    faviconUrl: "https://framerusercontent.com/images/mFyfqomzD8KEi8lZPvsm5xEF4l8.png",
    previewImage: "https://framerusercontent.com/images/nyd0tjQO5GGX3cbjqNuScyoqI0.png",
    about: "SegmentUI provides a 360-degree solution for Framer & Figma, serving as an all-in-one design system toolkit for consistent, scalable UI design. It features over 1000+ components & variants, CMS power-ups, and form upgrades.",
    features: [
      "1000+ components and variants",
      "CMS power-ups and form upgrades",
      "Framer AI Code Generator",
      "Figma and Framer production-ready kits",
      "Lifetime updates and asset library"
    ]
  },
  "superhuman": {
    id: "superhuman",
    title: "Superhuman",
    description: "AI-powered suite of tools including mail and docs.",
    category: "Productivity",
    platforms: ["macOS", "Windows", "iOS", "Android", "Web"],
    pricing: "Paid",
    developer: "Superhuman",
    lastUpdated: "Today",
    websiteUrl: "https://superhuman.com",
    faviconUrl: "https://superhumanstatic.com/super-funnel/main/public/images/v1/favicons/superhuman-icon.svg",
    previewImage: "https://superhumanstatic.com/super-funnel/main/public/images/v1/social-share.png",
    about: "Superhuman integrates Mail, Docs, and a proactive AI assistant (Go) to revolutionize work. The Mail component is designed to make email management twice as fast, saving users 4 hours weekly with features like AI-powered writing.",
    features: [
      "AI-powered email management and writing",
      "Integrated Docs and team wikis",
      "Proactive AI assistant (Go)",
      "Cross-app scheduling and help",
      "Blazing fast keyboard-first interface"
    ]
  },
  "tally": {
    id: "tally",
    title: "Tally",
    description: "Free and intuitive form builder that works like a text document.",
    category: "No-code",
    platforms: ["Web"],
    pricing: "Free",
    developer: "Tally",
    lastUpdated: "Today",
    websiteUrl: "https://tally.so",
    faviconUrl: "https://tally.so/favicon.svg",
    previewImage: "https://tally.so/images/og.jpg",
    about: "Tally is an online form builder that offers a simple, Notion-like interface for creating forms. It provides unlimited forms and submissions for free, including advanced features like conditional logic and calculators without paywalls.",
    features: [
      "Notion-like document interface",
      "Unlimited forms and submissions for free",
      "Conditional logic and calculators",
      "Custom CSS and theme support",
      "Integrations with Notion and Google Sheets"
    ]
  },
  "dan-koe": {
    id: "dan-koe",
    title: "Dan Koe",
    description: "Resources for personal growth and digital business.",
    category: "Education",
    platforms: ["Web"],
    pricing: "Freemium & Paid",
    developer: "Dan Koe",
    lastUpdated: "Today",
    websiteUrl: "https://thedankoe.com/",
    faviconUrl: "https://thedankoe.com/wp-content/uploads/2022/04/koe-favicon-150x150.jpg",
    previewImage: "https://thedankoe.com/wp-content/uploads/2023/10/1-square.jpg",
    about: "Dan Koe offers resources and guidance to help individuals achieve financial freedom and personal growth. This includes a popular newsletter, premium guides like 'Future Proof', and books such as 'The Art Of Focus'.",
    features: [
      "Weekly newsletter and deep-dive blog",
      "Premium guides on digital business",
      "Focus and productivity training",
      "Insights into the creator economy",
      "Personal development and growth systems"
    ]
  },
  "texts": {
    id: "texts",
    title: "Texts",
    description: "A unified messaging platform for all your communication needs.",
    category: "Communication",
    platforms: ["macOS", "Windows", "iOS"],
    pricing: "Freemium & Paid",
    developer: "Texts",
    lastUpdated: "Today",
    websiteUrl: "https://texts.com",
    faviconUrl: "https://www.google.com/s2/favicons?domain=texts.com&sz=128",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Ftexts.com&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=720",
    about: "Texts aims to simplify your digital life by consolidating all your messaging apps into one intuitive interface. Manage chats, respond to messages, and organize conversations from various platforms without switching applications.",
    features: [
      "Unified inbox for all messaging apps",
      "Multi-platform chat management",
      "Keyboard-first navigation",
      "End-to-end encryption support",
      "No app switching required"
    ]
  },
  "beehiiv": {
    id: "beehiiv",
    title: "beehiiv",
    description: "All-in-one platform for newsletters, websites, and growth tools.",
    category: "Marketing",
    platforms: ["Web"],
    pricing: "Freemium & Paid",
    developer: "beehiiv",
    lastUpdated: "Today",
    websiteUrl: "https://www.beehiiv.com",
    faviconUrl: "https://beehiiv-marketing-images.s3.amazonaws.com/Redesign2023/favicon.png",
    previewImage: "https://media.beehiiv.com/www/og-image/og-beehiiv.png",
    about: "beehiiv is a comprehensive platform designed for publishers, creators, and brands to build, publish, grow, and monetize their content. It offers a powerful newsletter builder and a no-code website builder.",
    features: [
      "Powerful newsletter builder",
      "No-code website creation",
      "Built-in ad network and monetization",
      "Advanced campaign analytics",
      "Growth tools and recommendation network"
    ]
  },
  "flow": {
    id: "flow",
    title: "Flow",
    description: "Voice-to-text AI that turns speech into polished writing.",
    category: "AI Tools",
    platforms: ["macOS", "Windows", "iOS"],
    pricing: "Freemium & Paid",
    developer: "Wispr",
    lastUpdated: "Today",
    websiteUrl: "https://www.flowvoice.ai",
    faviconUrl: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/684b3be32acf9b372f54d041_ws-favi.png",
    previewImage: "https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/683c611aba65ade013982bcd_wispr-og-min.jpg",
    about: "Flow is an advanced voice-to-text AI designed to transform spoken words into clear, polished writing across all applications. It allows users to write up to 4x faster than traditional typing by speaking naturally.",
    features: [
      "AI Auto Edits for polished text",
      "Personal dictionary for unique words",
      "Snippet library for voice shortcuts",
      "Context-aware tone adjustment",
      "Support for over 100 languages"
    ]
  },
  "onetap": {
    id: "onetap",
    title: "OneTap",
    description: "Copy-paste everything instantly from your keyboard.",
    category: "Productivity",
    platforms: ["iOS", "macOS"],
    pricing: "Freemium & Paid",
    developer: "OneTap",
    lastUpdated: "Today",
    websiteUrl: "https://www.onetapapp.co",
    faviconUrl: "https://framerusercontent.com/images/KwRNiJTpOyodG3xW6SXTxmVnnc.png",
    previewImage: "https://framerusercontent.com/images/gR9WlQEiJ3uleaCLQ24uHuF7qQQ.png",
    about: "OneTap is a productivity app that revolutionizes how you copy and paste on Apple devices. It allows users to create keyboard shortcuts for text phrases, links, files, and photos, making them instantly accessible.",
    features: [
      "Keyboard shortcuts for text and media",
      "Cloud synchronization across Apple devices",
      "Siri Shortcuts and workflow automation",
      "Comprehensive clipboard history",
      "Direct ChatGPT access from keyboard"
    ]
  },
  "screen-studio": {
    id: "screen-studio",
    title: "Screen Studio",
    description: "Screen recorder for macOS that enhances recordings.",
    category: "Video",
    platforms: ["macOS"],
    pricing: "Paid",
    developer: "Screen Studio",
    lastUpdated: "Today",
    websiteUrl: "https://www.screen.studio",
    faviconUrl: "https://www.screen.studio/icon.png",
    previewImage: "https://screen.studio/og-main-2.png",
    about: "Screen Studio is an opinionated screen recorder for macOS that automatically enhances recordings with smooth animations, zooms, and professional effects. It simplifies the editing process for product demos and tutorials.",
    features: [
      "Automatic zoom on cursor actions",
      "Smooth cursor movement enhancement",
      "Vertical video export support",
      "Audio enhancement and transcripts",
      "Custom branding and presets"
    ]
  },
  "plunk": {
    id: "plunk",
    title: "Plunk",
    description: "Open-source, affordable email platform for marketing.",
    category: "Marketing",
    platforms: ["Web"],
    pricing: "Freemium & Paid",
    developer: "Plunk",
    lastUpdated: "Today",
    websiteUrl: "https://www.useplunk.com",
    faviconUrl: "https://www.useplunk.com/favicon/favicon-32x32.png",
    previewImage: "https://www.useplunk.com/assets/card.png",
    about: "Plunk is an open-source, affordable email platform that unifies marketing, transactional, and broadcast emails into a single solution. It offers powerful automations and a responsive email editor.",
    features: [
      "Unified marketing and transactional email",
      "Powerful repeatable automations",
      "Responsive email editor",
      "Usage-based affordable pricing",
      "Open-source and privacy-focused"
    ]
  },
  "spiral": {
    id: "spiral",
    title: "Spiral",
    description: "The AI Writing Partner for Social.",
    category: "AI Tools",
    platforms: ["Web"],
    pricing: "Paid",
    developer: "Every",
    lastUpdated: "Today",
    websiteUrl: "https://writewithspiral.com/",
    faviconUrl: "https://framerusercontent.com/images/ZJjuhw9IT16KQiTUilnGpsrxuVw.svg",
    previewImage: "https://framerusercontent.com/assets/cumaHssCSvnociQcbq08BlpGHPc.png",
    about: "Spiral is an AI writing partner designed to produce high-quality, tasteful content with natural rhythm. It actively works with users by asking targeted questions and ensuring content captures actual meaning.",
    features: [
      "Targeted AI questioning for better content",
      "Multiple drafts from different angles",
      "Grounded writing to avoid hallucinations",
      "Custom brand voice and style matching",
      "Integrated editorial standards"
    ]
  },
  "monologue": {
    id: "monologue",
    title: "Monologue",
    description: "Effortless voice dictation that understands your work.",
    category: "Productivity",
    platforms: ["macOS"],
    pricing: "Paid",
    developer: "Monologue",
    lastUpdated: "Today",
    websiteUrl: "https://monologue.to/",
    faviconUrl: "https://framerusercontent.com/images/aF3yOlwFNUtfqtTdVBPl2pbUP3o.png",
    previewImage: "https://framerusercontent.com/images/iDZTa4NQGEBJEibFjQlfeCQyag.png",
    about: "Monologue is an advanced voice dictation tool for Mac that helps users work 3x faster by understanding their natural speech, writing style, context, and vocabulary. It supports over 100 languages.",
    features: [
      "Context-aware voice dictation",
      "Support for 100+ languages",
      "Adapts to individual writing style",
      "3x faster content creation",
      "Built on advanced open AI models"
    ]
  },
  "youform": {
    id: "youform",
    title: "Youform",
    description: "Free Typeform alternative with unlimited submissions.",
    category: "No-code",
    platforms: ["Web"],
    pricing: "Free",
    developer: "Youform",
    lastUpdated: "Today",
    websiteUrl: "https://youform.io",
    faviconUrl: "https://youform.io/assets/images/favicon.ico",
    previewImage: "https://youform.com/assets/images/youform-builder.png",
    about: "Youform is a free Typeform alternative that allows unlimited forms and unlimited responses on the free plan. It provides a simple and powerful way to collect data without restrictions.",
    features: [
      "Unlimited forms and responses on free plan",
      "Intuitive form builder interface",
      "Mobile-responsive forms",
      "Custom branding options",
      "Data collection without paywalls"
    ]
  }
};
