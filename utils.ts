import { PostToken, PreToken } from "./types";

export function tokenize(object: PreToken[]): PostToken[] {
  let modified: PostToken[] = [];

  for (const token of object) {
    let splited: PostToken = {
      word: splitTextIntoWords(token.words as string),
      id: token.id,
    };
    modified.push(splited);
  }
  return modified;
}

export function splitTextIntoWords(text: string | null): string[] {
  if (!text) {
    return [];
  }
  const commonWords = ["y", "o", "solo", "contra", "alto", "bajo"];
  const regexPattern = /[^\wÑñ]+/gim;
  const strings: string[] = text
    .toLocaleLowerCase()
    .normalize("NFD") // Normalize accents and diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove combining diacritical marks
    .split(regexPattern);
  //.filter((word) => commonWords.has(word));

  return strings;
}
