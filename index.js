export function matchExact(input, search) {
  return input.toLowerCase() === search.toLowerCase();
}

export function matchOneWord(input, search) {
  const inputLowerCase = input.toLowerCase();
  const searchLowerCase = search.toLowerCase();

  const searchReg = new RegExp(`\\b${searchLowerCase}\\b`);

  return searchReg.test(inputLowerCase);
}

export function matchStartsWith(input, search) {
  const inputLowerCase = input.toLowerCase();
  const searchLowerCase = search.toLowerCase();

  return inputLowerCase.startsWith(searchLowerCase);
}

export function alphaNumericSort(a, b) {
  return a.localeCompare(b, 'en', { numeric: true })
}

// Sort by match
// 1. Exact match
// 2. Matches a word
// 3. Starts with the match
// 4. alpha numeric

export default function sortByMatch(searchString) {

  return function sort(a, b) {
    const aToLowerCase = a.toLowerCase();
    const bToLowerCase = b.toLowerCase();

    if (matchExact(aToLowerCase, searchString) && !matchExact(bToLowerCase, searchString)) {
      return -1;
    }

    if (matchExact(bToLowerCase, searchString)) {
      return 1;
    }

    if (matchOneWord(aToLowerCase, searchString) && !matchOneWord(bToLowerCase, searchString)) {
      return -1;
    }

    if (matchOneWord(bToLowerCase, searchString)) {
      return 1;
    }

    if (matchStartsWith(aToLowerCase, searchString) && !matchStartsWith(bToLowerCase, searchString)) {
      return -1;
    }

    if (matchStartsWith(bToLowerCase, searchString)) {
      return 1;
    }

    return alphaNumericSort(aToLowerCase, bToLowerCase);
  }
}
