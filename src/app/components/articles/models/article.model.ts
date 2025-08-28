export type InlineSegment =
  | { type: 'text'; text: string }
  | { type: 'em'; text: string }       // italique
  | { type: 'strong'; text: string }    // gras
  | { type: 'br' };                     // saut de ligne

export type ArticleBlock =
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }               // paragraphe simple
  | { type: 'rich-p'; segments: InlineSegment[] } // Le type rich-p nous permet de reproduire exactement les italiques (<i>), le gras (<b>/<strong>) et les sauts de ligne (<br>) sans jamais injecter du HTML.
  | { type: 'quote'; text: string; author?: string }
  | { type: 'img'; src: string; alt?: string; caption?: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'hr' }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'code'; lang?: string; code: string }
  | { type: 'video'; src: string; title?: string };

export interface Article {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  readTime?: string;
  cover?: string;
  createdAt?: Date;
  author?: string;
  links?: { label: string; url: string }[];
  blocks: ArticleBlock[];
}