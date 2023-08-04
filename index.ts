import { Trie } from "./trie";
import { Product, PreToken, PostToken } from "./types";
import { tokenize } from "./utils";
export const mock = [
    {
      id: 1,
      title: "Cafetera",
      description: "Cafetera de acero inoxidable",
      price: 1000,
    },
    {
      id: 2,
      title: "Aspiradora",
      description: "Aspiradora de tipo industrial",
      price: 1000,
    },
  ];

let products: Product[] = [];
let tokens: PreToken[] = [];
let tokenizedTokens: PostToken[] = [];
const trie = new Trie();

products = mock;

products.forEach((product) => {
  if (product) {
    const tokenTitle: PreToken = {
      words: product.title,
      id: product.id,
    };
    const tokenDescription: PreToken = {
      words: product.description,
      id: product.id,
    };
    tokens.push(tokenTitle, tokenDescription);
  }
});

tokenizedTokens = tokenize(tokens);

for (const token of tokenizedTokens) {
  for (const word in token.word) {
    trie.insertar(token.word[word], token.id);
  }
}

console.log(trie.buscarPalabrasConPrefijo("caf"));
console.log(trie.buscarPalabra("cafetera")?.keyAndId);
