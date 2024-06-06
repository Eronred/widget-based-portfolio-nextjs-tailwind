import VSC from '../components/vsc';
import Figma from '../components/figma';
import Notion from '../components/notion';
import Ollama from '../components/ollama';
import Obsidian from '../components/obsidian';
import Excalidraw from '../components/excalidraw';
import Rainbow from '../components/rainbow';
import ArcBrowser from '../components/arc-browser';
import HttPie from '../components/httpie';


export interface Apps {
    name: string;
    url: string;
    LogoComponent: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    description?: string;
}


export const apps: Apps[] = [
    {
        name: "Arc",
        url: "https://arc.dev",
        LogoComponent: ArcBrowser,
        description: "Arc is a privacy-focused browser that is built on top of the Chromium engine.",
    },
    {
        name: "VS Code",
        url: "https://code.visualstudio.com",
        LogoComponent: VSC,
        description: "VS Code is a source-code editor that is developed by Microsoft for Windows, Linux, and macOS.",
    },

    {
        name: "Figma",
        url: "https://figma.com",
        LogoComponent: Figma,
        description: "Figma is a cloud-based design tool that is used to create user interfaces, websites, and mobile applications.",
    },
    {
        name: "Notion",
        url: "https://notion.so",
        LogoComponent: Notion,
        description: "Notion is an all-in-one workspace for note-taking, project management, and task management.",
    },
    {
        name: "Ollama",
        url: "https://ollama.com",
        LogoComponent: Ollama,
        description: "Get up and running with large language models, locally.",
    },
    {
        name: "Obsidian",
        url: "https://obsidian.md",
        LogoComponent: Obsidian,
        description: "Obsidian is a note-taking and knowledge management tool that is built on top of Markdown.",
    },
    {
        name: "Excalidraw",
        url: "https://excalidraw.com",
        LogoComponent: Excalidraw,
        description: "Excalidraw is a virtual whiteboard tool that allows users to sketch diagrams and illustrations.",
    },
    {
        name: "HttPie",
        url: "https://httptie.io",
        LogoComponent: HttPie,
        description: "HttPie is a command-line HTTP client that is used to interact with web servers.",

    },
    {
        name: "Rainbow",
        url: "https://rainbow.me",
        LogoComponent: Rainbow,
        description: "Rainbow is a cryptocurrency wallet that is used to store, send, and receive Ethereum and Ethereum-based tokens.",
    },
];


export const notes = [
    {
        title: "Ollama Terminal",
    },
    {
        title: "SQL Table Generator",
        content: "Talk and get a table generated for you"
    },
    {
        title: "Code Snippets",
    },
    {
        title: "Crypto Tracker",
        content: "Track your favorite cryptocurrencies"
    },
]