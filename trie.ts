

const ALPHABET_SIZE = 26;
/**
 * Esta clase representa un nodo de un Trie.
 * Un Trie es una estructura de datos que permite insertarPalabraar, eliminar y buscar palabras.
 * @var hijo : Map<string, Nodo>, string representa un caracter y Nodo representa el nodo hijo.
 * @esFinDePalabra : boolean, indica si el nodo es el final de una palabra, puede y su contenido ser null, pero no su padre.
 * @constructor : crea un nodo con un Map vacio y esFinDePalabra en false.
 */
export class Nodo {
  hijo: Array<Nodo | null>;
  esFinDePalabra: boolean;
  keyAndId: Set<number>;
  palabra?: string;
  constructor() {
    this.hijo = new Array(ALPHABET_SIZE);
    this.esFinDePalabra = false;
    this.keyAndId = new Set();
    for (let i = 0; i < ALPHABET_SIZE; i++) {
      this.hijo[i] = null;
    }
  }
}

/**
 *
 * Esta clase representa un Trie.
 * Un Trie es una estructura de datos que permite insertarPalabraar, eliminar y buscar palabras.
 * @var raiz : Nodo, representa el nodo raiz del Trie.
 * @constructor : crea un Trie con un nodo raiz.
 */
export class Trie {
  raiz: Nodo;
  constructor() {
    
    this.raiz = new Nodo();
    
  }

  /**
   * Este metodo insertarPalabraa una palabra en el Trie.
   * Siendo nodo, el nodo raiz del Trie,, se recorre la palabra una vez caracter por caracter
   * y si el nodo NO contiene un hijo : Map<string, Nodo> con el caracter actual, se crea un nuevo nodo hijo
   * con el caracter actual y se insertarPalabraa en el mapa de hijos del nodo actual.
   * Si el nodo ya contenia ese hijo, se pasa al siguiente caracter de la palabra.
   * Si se recorrio toda la palabra, se marca el nodo actual como final de palabra.
   * @param palabra : string, representa la palabra a insertarPalabraar.
   *
   */
  insertar(palabra : string , id: number): void {
    let nivel;
    let largo = palabra.length;
    let indice;
    let pCrawl = this.raiz;
    let yaExiste = this.buscarPalabra(palabra);
    if(yaExiste != null && yaExiste.esFinDePalabra){
      yaExiste.keyAndId.add(id);
      
      return;
    }
    for (nivel = 0; nivel < largo; nivel++) {
      indice = palabra[nivel].charCodeAt(0) - "a".charCodeAt(0);
      if (pCrawl.hijo[indice] == null) pCrawl.hijo[indice] = new Nodo();

      pCrawl = pCrawl.hijo[indice]!;
    }

    pCrawl.keyAndId.add(id);
    pCrawl.esFinDePalabra = true;
    pCrawl.palabra = palabra;    
  }

  /**
   *
   * Esta funcion busca una palabra completa en el Trie. El Nodo representa un indice del arbol y string es su clave.
   * Siendo nodo, el nodo raiz del Trie, se recorre la palabra una vez caracter por caracter
   * y si el nodo NO contiene un hijo : Map<string, Nodo> con el caracter actual, se retorna false porque la palabra no puede continuar recorriendose
   * dentro del Trie.
   * Si el nodo  contiene ese hijo, se pasa al siguiente caracter de la palabra y se repite el proceso.
   * Si se recorrio toda la palabra, se retorna true si el nodo actual es final de palabra(la palabra existe completa), false en caso contrario(existen mas nodos
   * hijos que pueden terminar de construir la palabra).
   * @param palabra : string, representa la palabra a buscar.
   * @returns
   */
  buscarPalabra(palabra: string): Nodo | null {
    let nivel;
    let largo = palabra.length;
    let indice;
    let pCrawl = this.raiz;
  
    for (nivel = 0; nivel < largo; nivel++) {
      indice = palabra[nivel].charCodeAt(0) - "a".charCodeAt(0);
  
      if (pCrawl.hijo[indice] == null) return null;
  
      pCrawl = pCrawl.hijo[indice]!;
    }
  
    return pCrawl;
  }
  buscarPalabrasConPrefijo(prefix: string): string[] {
    const words: string[] = [];
  
    function dfs(node: Nodo, currentWord: string) {
      if (node.esFinDePalabra) {
        words.push(currentWord);
      }
  
      for (let i = 0; i < ALPHABET_SIZE; i++) {
        if (node.hijo[i]) {
          const nextChar = String.fromCharCode(i + "a".charCodeAt(0));
          dfs(node.hijo[i]!, currentWord + nextChar);
        }
      }
    }
  
    const pCrawl = this.buscarPalabra(prefix);
    if (pCrawl) {
      dfs(pCrawl, prefix); 
    }
  
    return words;
  }

}

  
