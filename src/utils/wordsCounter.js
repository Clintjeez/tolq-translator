export function getWordCount(str) {
  return str?.split(" ").filter(function (n) {
    return n != "";
  }).length;
}
