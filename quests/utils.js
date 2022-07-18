// Encode HTML entities in a string
// https://stackoverflow.com/a/18750001/1657101
export const encodeHTMLEntities = (str => {
  const regex = /[\u00A0-\u9999<>\&]/g;
  const replacer = c => `&#${c.charCodeAt(0)};`;
  return str.replace(regex, replacer);
});


// Remove some whitespace added by contenteditable div
export const getInnerText = (element) => {
  let text = element.innerText;
  text = text.replace(/^      [\n]/, '');
  text = text.replace(/[\n]    /, '');
  return text;
};
