import releases from './releases.json';

export type Category = 'Productivity' | 'Entertainment' | 'Social media';

export interface Product {
  slug: string;
  name: string;
  category: Category;
  platform: string;
  description: string;
  chips: string[];
  logo: string;
  /** clave en releases.json (solo apps de escritorio con release en GitHub) */
  release?: keyof typeof releases;
}

export const products: Product[] = [
  { slug: 'turnafile', name: 'TurnAFile', category: 'Productivity', platform: 'Windows 10/11',
    description: "The converter that doesn't get in the way. Right-click, choose format, done.",
    chips: ['MP4 to AVI', 'MP3 to WAV', 'DOCX to PDF', '30+ formats'], logo: 'icon-toggles.webp', release: 'turnafile' },
  { slug: 'tubemassdl', name: 'TubeMassDL', category: 'Productivity', platform: 'Windows 10/11',
    description: 'Mass link downloader for YouTube and 1800+ sites. Clipboard capture, playlist expansion.',
    chips: ['Playlists', '4K video', 'MP3 audio', '1800+ sites'], logo: 'tubemassdl_logo.webp', release: 'tubemassdl' },
  { slug: 'browsel', name: 'BrowSel', category: 'Productivity', platform: 'Windows 10/11',
    description: 'Pick which browser and which profile opens a link. The running ones are marked.',
    chips: ['Any browser', 'Profiles', '10 languages', 'MIT'], logo: 'browsel_logo.webp', release: 'browsel' },
  { slug: 'sigilforge', name: 'SigilForge', category: 'Entertainment', platform: 'Web app',
    description: 'Procedural sigil and magic circle generator.',
    chips: ['Alchemical', 'Celestial', 'Runic', 'PNG export'], logo: 'sigilforge_logo.webp' },
  { slug: 'poleshift', name: 'PoleShift', category: 'Entertainment', platform: 'Web app',
    description: 'What if the North Pole were somewhere else? Move it and watch the planet reorder itself on a 3D globe.',
    chips: ['3D globe', '14 cities', '51 places', 'No dependencies'], logo: 'poleshift_logo.webp' },
  { slug: 'blueskai', name: 'Bluesk-AI', category: 'Social media', platform: 'Bluesky bot',
    description: 'A Chilean conversational bot for Bluesky. Real-time search, RAG with Chilean slang, dual AI.',
    chips: ['Real-time search', 'Chilean slang', 'Serverless'], logo: 'blueskai_logo.webp' },
  { slug: 'archmiedos', name: 'Archivo de Miedos', category: 'Social media', platform: 'Web app',
    description: 'Deposit your fear in the archive and free yourself. Anonymous, AI-classified, shareable on Bluesky.',
    chips: ['Anonymous', 'AI-moderated', 'Bluesky'], logo: 'archmiedos_logo.webp' },
];

export const categories: Category[] = ['Productivity', 'Entertainment', 'Social media'];
export const byCategory = (c: Category) => products.filter((p) => p.category === c);
export const href = (slug: string) => `/${slug}.html`;
