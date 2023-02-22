class WordDictionary {
  constructor() {
    this.root = {};
  }
  addWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.endOfWord = true;
  }

  match(word, node) {
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (char === ".") {
        let availableLetters = Object.keys(node);
        let temp = word.slice(i + 1);
        console.log(temp);

        for (let letter of availableLetters) {
          console.log(letter, temp);
          let result = this.match(temp, node[letter]);
          if (result) {
            return true;
          }
        }
        return false;
      } else {
        if (!node[char]) {
          return false;
        }
        node = node[char];
      }
    }

    if (node.endOfWord) {
      return true;
    }
    return false;
  }

  search(word) {
    return this.match(word, this.root);
  }
}

let wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
wordDictionary.addWord("and");
wordDictionary.addWord("an");
wordDictionary.addWord("add");
wordDictionary.search("a"); // return False
// wordDictionary.search(".at"); // return True
// wordDictionary.search("bat"); // return True
// wordDictionary.search(".at"); // return True
// wordDictionary.search("an."); // return True

//LEARNING
// Object.keys(ojb) - get list of children
// OR for(let key in obj){}
// when we call methods/prop of class use this.method
// for string we can use replace('old','new') amd replaceAll('old', 'new')
