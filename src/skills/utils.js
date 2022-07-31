export const getLevelProgress = (points) => points % 10 / 10;


export const encodeHTML = s => s.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
   return '&#'+i.charCodeAt(0)+';';
});

