function getMiddle(s) {
  if (s.length % 2 === 0) return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
  return s[(s.length - 1) / 2];
}

// tests
getMiddle("Antigua");
getMiddle("Guadeloupe");
getMiddle("Martinica");
getMiddle("Nevis");
