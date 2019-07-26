# sort-by-match

Given an array of words

```js
const words = [
  "Microsoft Word",
  "Wordpress",
  "Google AdWords",
  "Word",
  "Word Dude",
  "Abhi Aiyer"
];
```

and a search string

```
const word = "Word";
```

Sort the array of words in the following order

1. Exact match
2. Matches a word
3. Starts with the match
4. alpha numeric
