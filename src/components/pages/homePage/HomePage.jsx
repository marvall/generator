import Hero from './Hero';
import Movies from './Movies';
import WebSites from './WebSites';

const CaseArticl = function (word) {
  if (word === 'a' || word === 'an') {
    return '___';
  } else {
    return word;
  }
};
const CaseHave = function (word) {
  if (word === 'have' || word === 'has' || word === 'had') {
    return '___';
  } else {
    return word;
  }
};
const CaseBe = function (word) {
  if (
    word === 'be' ||
    word === 'am' ||
    word === 'is' ||
    word === 'are' ||
    word === 'was' ||
    word === 'were' ||
    word === 'been'
  ) {
    return '___';
  } else {
    return word;
  }
};
const GentCase = function (text) {
  let newText = text.split(' ');
  newText = newText.map(word => CaseBe(word));
  newText = newText.map(word => CaseArticl(word));
  newText = newText.map(word => CaseHave(word));
  return newText.map(word => ' ' + word + ' ');
};

function HomePage() {
  return (
    <>
      <Hero />
      <Movies />
      <WebSites />
    </>
  );
}

export default HomePage;
