# Product Search Trie

Product Search Trie is a TypeScript project that demonstrates the usage of a trie data structure to efficiently search for products based on their titles and descriptions.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description

The Product Search Trie project uses a trie data structure to store and search for products. The products are tokenized into individual words, and these words are inserted into the trie, along with references to the product IDs. This allows for quick and efficient searching of products based on their titles and descriptions.

The project contains the following files:
- `trie.ts`: Contains the implementation of the Trie data structure, including methods to insert words and search for words or prefixes.
- `types.ts`: Defines the interfaces used in the project for product information and tokenization.
- `utils.ts`: Provides a utility function `tokenize` to split text into individual words and create tokenized representations.

## Installation

To run the Product Search Trie project, follow these steps:

1. Clone the repository:
git clone git@github.com:fersoria001/full-text-search.git


2. Change into the project directory:
cd full-text-search


3. Install dependencies:
npm install



## Usage

The `index.ts` file contains the main logic of the project. It demonstrates how to tokenize product titles and descriptions, build the Trie data structure, and perform Trie operations.

To run the project and see the results, execute the following command:
npx ts-node index.ts


You should see the search results for the given prefix and word printed in the console.

Feel free to modify the `mock` array in the `index.ts` file to test with different products and perform additional searches.

## License

This project is licensed under the [MIT License](LICENSE).