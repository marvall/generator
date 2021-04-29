export const CaseArticl = {
  movieList: [],
  caseArticl: word => {
    if (word === 'a' || word === 'an') {
      return true;
    } else {
      return false;
    }
  },
};

export const CaseHave = {
  movieList: [],
  caseHave(word) {
    if (word === 'have' || word === 'has' || word === 'had') {
      return true;
    } else {
      return false;
    }
  },
};

export const CaseBe = {
  movieList: [],
  caseBe(word) {
    if (
      word === 'be' ||
      word === 'am' ||
      word === 'is' ||
      word === 'are' ||
      word === 'was' ||
      word === 'were' ||
      word === 'been'
    ) {
      return true;
    } else {
      return false;
    }
  },
};

// const GentCase = function (text) {
//   let newText = text.split(' ');
//   newText = newText.map(word => CaseBe(word));
//   newText = newText.map(word => CaseArticl(word));
//   newText = newText.map(word => CaseHave(word));
//   return newText.map(word => ' ' + word + ' ');
// };
