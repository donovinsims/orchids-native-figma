export interface Website {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  href: string;
  faviconUrl: string;
  previewImage: string;
  category?: string;
}

export interface AppDetail {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
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
  shortDescription?: string;
  previewImage: string;
  href: string;
}

export const websitesData: Website[] = [
  {
    id: "akiflow",
    title: "Akiflow",
    description: "AI Productivity Suite: Tasks",
    shortDescription: "All-in-one AI productivity suite for tasks and calendars.",
    category: "Productivity",
    href: "/apps/akiflow",
    faviconUrl: "https://www.google.com/s2/favicons?domain=akiflow.com&sz=128",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Fakiflow.com&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=865",
  },
  {
    id: "cleanclip",
    title: "CleanClip",
    description: "Mac Clipboard Manager: Sequential Paste",
    shortDescription: "Clipboard management for extreme efficiency and minimal switching.",
    category: "Productivity",
    href: "/apps/cleanclip",
    faviconUrl: "https://www.google.com/s2/favicons?domain=cleanclip.cc&sz=128",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Fcleanclip.cc&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=865",
  },
  {
    id: "designcode",
    title: "Design+Code",
    description: "Learn design and code by building real apps with React and Swift.",
    shortDescription: "Complete courses on design and code for building real apps.",
    category: "Education",
    href: "/apps/designcode",
    faviconUrl: "https://designcode.io/favicon-32x32.png?v=42a278c0c94e914295c7dd0eddf50492",
    previewImage: "https://images.ctfassets.net/ooa29xqb8tix/24XYZktClnZjDjt2YNlGmX/d857becac30265e19ad8847365c68fbf/Metadata.png",
  },
  {
    id: "eden",
    title: "Eden",
    description: "One Place For All Your Creative Work",
    shortDescription: "AI-powered workspace for consolidating creative work.",
    category: "Productivity",
    href: "/apps/eden",
    faviconUrl: "https://framerusercontent.com/images/NBzdgTQOtcwXsJCJCgnkx1jShg.png",
    previewImage: "https://framerusercontent.com/assets/1DeHvV4Tz302r8YLrI0WCoUkp8.png",
  },
  {
    id: "flylighter",
    title: "Flylighter",
    description: "Notion web clipper focused on speed and flexibility.",
    shortDescription: "Fast and flexible Notion web clipper for organizing digital life.",
    category: "Productivity",
    href: "/apps/flylighter",
    faviconUrl: "https://flylighter.com/favicon.png",
    previewImage: "https://flylighter.com/flylighter-banner.jpeg",
  },
  {
    id: "kortex",
    title: "Kortex",
    description: "AI-powered platform for interconnected writing and note-taking.",
    shortDescription: "Interconnected writing and note-taking platform for creators.",
    category: "AI Tools",
    href: "/apps/kortex",
    faviconUrl: "https://cdn.prod.website-files.com/66e2be2343a7c5501a5a7fe2/66eda605d155545da532ad77_Kortex%20Favicon.png",
    previewImage: "https://cdn.prod.website-files.com/66e2be2343a7c5501a5a7fe2/67040fbb0eccf2b5347664d8_Kortex%20OG%20Image%20Update.webp",
  },
  {
    id: "lazy",
    title: "Lazy",
    description: "Universal clipper and note-taking tool.",
    shortDescription: "Universal clipper for capturing anything from anywhere instantly.",
    category: "Productivity",
    href: "/apps/lazy",
    faviconUrl: "https://lazy.so/favicon_io/favicon-32x32.png",
    previewImage: "https://lazy.so/images/lazy-og.jpg?4362984378",
  },
  {
    id: "creator-mba",
    title: "The Creator MBA",
    description: "Complete blueprint for starting a profitable Internet business.",
    shortDescription: "Comprehensive blueprint for building a profitable Internet business.",
    category: "Education",
    href: "/apps/creator-mba",
    faviconUrl: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/2147532368/images/2a3651-6835-e853-dc4e-a11552b52c4_JustinWelsh-Monogram_4_.png?v=2",
    previewImage: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/2147532368/images/2c8f-e310-7e06-bfad-af2206c8df38_3107e7e8-47d7-42ba-8711-12f3c34dfa88.png",
  },
  {
    id: "mimestream",
    title: "Mimestream",
    description: "Fast email client for Mac, optimized for Gmail.",
    shortDescription: "Native macOS email client optimized specifically for Gmail.",
    category: "Productivity",
    href: "/apps/mimestream",
    faviconUrl: "https://mimestream.com/assets/icons/app-icon_32x32.png",
    previewImage: "https://mimestream.com/assets/images/site-preview.png",
  },
  {
    id: "orchids",
    title: "Orchids",
    description: "The Vibe Coding IDE, an AI-powered tool for building apps.",
    shortDescription: "The Vibe Coding IDE for building apps with AI through chat.",
    category: "Development",
    href: "/apps/orchids",
    faviconUrl: "https://orchids.app/favicon.ico",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Forchids.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=865",
  },
  {
    id: "polar",
    title: "Polar",
    description: "Monetize your software with 6 lines of code.",
    shortDescription: "Monetize your software with billing and subscription infrastructure.",
    category: "Fintech",
    href: "/apps/polar",
    faviconUrl: "https://polar.sh/favicon.png",
    previewImage: "https://polar.sh/assets/brand/polar_og.jpg",
  },
  {
    id: "segmentui",
    title: "SegmentUI",
    description: "UI Kits and Components for Framer & Figma.",
    shortDescription: "Comprehensive UI kits and components for Framer and Figma.",
    category: "Design",
    href: "/apps/segmentui",
    faviconUrl: "https://framerusercontent.com/images/mFyfqomzD8KEi8lZPvsm5xEF4l8.png",
    previewImage: "https://framerusercontent.com/images/nyd0tjQO5GGX3cbjqNuScyoqI0.png",
  },
  {
    id: "tally",
    title: "Tally",
    description: "Free and intuitive form builder that works like a text document.",
    shortDescription: "Simple and powerful form builder with a Notion-like interface.",
    category: "No-code",
    href: "/apps/tally",
    faviconUrl: "https://tally.so/favicon.svg",
    previewImage: "https://tally.so/images/og.jpg",
  },
  {
    id: "dan-koe",
    title: "Dan Koe",
    description: "Resources for personal growth and digital business.",
    shortDescription: "Systems for personal growth, focus, and digital business building.",
    category: "Education",
    href: "/apps/dan-koe",
    faviconUrl: "https://thedankoe.com/wp-content/uploads/2022/04/koe-favicon-150x150.jpg",
    previewImage: "https://thedankoe.com/wp-content/uploads/2023/10/1-square.jpg",
  },
  {
    id: "onetap",
    title: "OneTap",
    description: "Copy-paste everything instantly from your keyboard.",
    shortDescription: "Instant copy-paste snippets and ChatGPT access from your keyboard.",
    category: "Productivity",
    href: "/apps/onetap",
    faviconUrl: "https://framerusercontent.com/images/KwRNiJTpOyodG3xW6SXTxmVnnc.png",
    previewImage: "https://framerusercontent.com/images/gR9WlQEiJ3uleaCLQ24uHuF7qQQ.png",
  },
  {
    id: "screen-studio",
    title: "Screen Studio",
    description: "Screen recorder for macOS that enhances recordings.",
    shortDescription: "Professional screen recorder for Mac with automatic zoom and effects.",
    category: "Video",
    href: "/apps/screen-studio",
    faviconUrl: "https://www.screen.studio/icon.png",
    previewImage: "https://screen.studio/og-main-2.png",
  },
  {
    id: "plunk",
    title: "Plunk",
    description: "Open-source, affordable email platform for marketing.",
    shortDescription: "Open-source email platform for marketing and transactional emails.",
    category: "Marketing",
    href: "/apps/plunk",
    faviconUrl: "https://www.useplunk.com/favicon/favicon-32x32.png",
    previewImage: "https://www.useplunk.com/assets/card.png",
  },
  {
    id: "monologue",
    title: "Monologue",
    description: "Effortless voice dictation that understands your work.",
    shortDescription: "AI voice dictation for Mac that adapts to your writing style.",
    category: "Productivity",
    href: "/apps/monologue",
    faviconUrl: "https://framerusercontent.com/images/aF3yOlwFNUtfqtTdVBPl2pbUP3o.png",
    previewImage: "https://framerusercontent.com/images/iDZTa4NQGEBJEibFjQlfeCQyag.png",
  }
];

export const appDetailsData: Record<string, AppDetail> = {
  "akiflow": {
    id: "akiflow",
    title: "Akiflow",
    description: "AI Productivity Suite: Tasks",
    shortDescription: "All-in-one AI productivity suite for tasks and calendars.",
    category: "Productivity",
    platforms: ["macOS", "Windows", "iOS", "Android"],
    pricing: "Paid",
    developer: "Akiflow",
    lastUpdated: "Today",
    websiteUrl: "https://akiflow.com",
    faviconUrl: "https://www.google.com/s2/favicons?domain=akiflow.com&sz=128",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Fakiflow.com&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=865",
    about: "Akiflow is an all-in-one AI productivity suite that unifies calendars and inbox for seamless flow. Save hours weekly with AI time-blocking, a universal inbox for integrations, and an AI assistant (Aki) to plan and prioritize. It's the ultimate tool for task and calendar management.",
    features: [
      "AI time-blocking",
      "Universal inbox for integrations",
      "AI assistant (Aki) to plan and prioritize",
      "Streamlining task and calendar management",
      "Consolidating work inputs from various tools"
    ],
    relatedApps: [
      {
        id: "lazy",
        title: "Lazy",
        description: "Universal clipper and note-taking tool.",
        shortDescription: "Universal clipper for capturing anything from anywhere instantly.",
        previewImage: "https://lazy.so/images/lazy-og.jpg?4362984378",
        href: "/apps/lazy"
      },
      {
        id: "mimestream",
        title: "Mimestream",
        description: "Fast email client for Mac, optimized for Gmail.",
        shortDescription: "Native macOS email client optimized specifically for Gmail.",
        previewImage: "https://mimestream.com/assets/images/site-preview.png",
        href: "/apps/mimestream"
      }
    ]
  },
  "cleanclip": {
    id: "cleanclip",
    title: "CleanClip",
    description: "Mac Clipboard Manager: Sequential Paste",
    shortDescription: "Clipboard management for extreme efficiency and minimal switching.",
    category: "Productivity",
    platforms: ["macOS"],
    pricing: "Free",
    developer: "CleanClip",
    lastUpdated: "Today",
    websiteUrl: "https://cleanclip.cc",
    faviconUrl: "https://www.google.com/s2/favicons?domain=cleanclip.cc&sz=128",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Fcleanclip.cc&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=865",
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
    shortDescription: "Complete courses on design and code for building real apps.",
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
    shortDescription: "AI-powered workspace for consolidating creative work.",
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
    shortDescription: "Fast and flexible Notion web clipper for organizing digital life.",
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
  "kortex": {
    id: "kortex",
    title: "Kortex",
    description: "AI-powered platform for interconnected writing and note-taking.",
    shortDescription: "Interconnected writing and note-taking platform for creators.",
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
    shortDescription: "Universal clipper for capturing anything from anywhere instantly.",
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
    shortDescription: "Comprehensive blueprint for building a profitable Internet business.",
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
    shortDescription: "Native macOS email client optimized specifically for Gmail.",
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
    shortDescription: "The Vibe Coding IDE for building apps with AI through chat.",
    category: "Development",
    platforms: ["Web", "macOS", "Windows"],
    pricing: "Free",
    developer: "Orchids",
    lastUpdated: "Today",
    websiteUrl: "https://orchids.app",
    faviconUrl: "https://orchids.app/favicon.ico",
    previewImage: "https://api.microlink.io/?url=https%3A%2F%2Forchids.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=865",
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
    shortDescription: "Monetize your software with billing and subscription infrastructure.",
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
  "segmentui": {
    id: "segmentui",
    title: "SegmentUI",
    description: "UI Kits and Components for Framer & Figma.",
    shortDescription: "Comprehensive UI kits and components for Framer and Figma.",
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
  "tally": {
    id: "tally",
    title: "Tally",
    description: "Free and intuitive form builder that works like a text document.",
    shortDescription: "Simple and powerful form builder with a Notion-like interface.",
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
    shortDescription: "Systems for personal growth, focus, and digital business building.",
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
  "onetap": {
    id: "onetap",
    title: "OneTap",
    description: "Copy-paste everything instantly from your keyboard.",
    shortDescription: "Instant copy-paste snippets and ChatGPT access from your keyboard.",
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
    shortDescription: "Professional screen recorder for Mac with automatic zoom and effects.",
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
    shortDescription: "Open-source email platform for marketing and transactional emails.",
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
  "monologue": {
    id: "monologue",
    title: "Monologue",
    description: "Effortless voice dictation that understands your work.",
    shortDescription: "AI voice dictation for Mac that adapts to your writing style.",
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
  }
};
