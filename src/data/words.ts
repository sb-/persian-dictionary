import rawData from "./formatted.json";

export interface DictionaryEntry {
  persian: string;
  pronunciation: string;
  persian_vowels: string;
  english: string;
  part_of_speech: string;
  sentence: string;
  translation_formal: string;
  translation_colloquial: string;
  category: string;
  usage: string;
  file_name: string;
  file_url: string;
}

export const words = rawData as DictionaryEntry[];
