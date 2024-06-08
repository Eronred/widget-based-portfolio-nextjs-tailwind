import VSC from '../components/applications/vsc';
import Figma from '../components/applications/figma';
import Notion from '../components/applications/notion';
import Ollama from '../components/applications/ollama';
import Obsidian from '../components/applications/obsidian';
import Excalidraw from '../components/applications/excalidraw';
import Rainbow from '../components/applications/rainbow';
import ArcBrowser from '../components/applications/arc-browser';
import HttPie from '../components/applications/httpie';
import CameraApp from '../components/applications/camera';



export interface Apps {
    name: string;
    url: string;
    LogoComponent: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    description?: string;
}


export const macApps: Apps[] = [
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

export const mobileApps: Apps[] = [

   
    {
        name: "Arc",
        url: "https://arc.dev",
        LogoComponent: ArcBrowser,
        description: "Arc is a privacy-focused browser that is built on top of the Chromium engine.",
    },
    {
        name: "Obsidian",
        url: "https://obsidian.md",
        LogoComponent: Obsidian,
        description: "Obsidian is a note-taking and knowledge management tool that is built on top of Markdown.",
    },
    {
        name: "Rainbow",
        url: "https://rainbow.me",
        LogoComponent: Rainbow,
        description: "Rainbow is a cryptocurrency wallet that is used to store, send, and receive Ethereum and Ethereum-based tokens.",
    },
    {
        name: "Notion",
        url: "https://notion.so",
        LogoComponent: Notion,
        description: "Notion is an all-in-one workspace for note-taking, project management, and task management.",
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


export const codeFiles = [
    {
        type: "rcquery",
        name: "fetch.ts",
        code: `const{isPending, error, data}= 
        useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(URL)
      .then((res) =>
        res.json(),
      ),
  })`,
    },
    {
        type: "ts",
        name: "UUID.ts",
        code: `function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx'
    .replace(/[xy]/g, function(c) {
        var r = Math.random() * 16
        |
        0, v = c === 'x' ? r
        : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}`
    },
    {
        type: "ts",
        name: "typeGuard.ts",
        code: `function isString(test: any): test is string{
    return typeof test === "string";
}

function example(foo: any){
    if(isString(foo)){
        console.log("It's a string!");
        console.log(foo.length); // string function
    }
}`
    },
    {
        type: "ts",
        name: "mapped.ts",
        code: `type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}

type ExampleType = {
    id: number;
    name: string;
}

type ReadOnlyExampleType = ReadOnly<ExampleType>;`
    },
    {
        type: "ts",
        name: "conditional.ts",
        code: `type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<"a">;  // "string"
type T2 = TypeName<true>;  // "boolean"
type T3 = TypeName<() => void>;  // "function"
type T4 = TypeName<string[]>;  // "object"`
    },
    {
        type: "py",
        name: "fetch.py",
        code: `import requests

    def fetch_data(url):
        response = requests.get(url)
        response.raise_for_status() 
        return response.json()`
    },
    {
        type: "py",
        name: "list.py",
        code: `numbers = [1, 2, 3, 4, 5]
        squares = [number ** 2 for number in numbers]`
    },
]
