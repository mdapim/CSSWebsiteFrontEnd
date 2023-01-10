const { calculate } = require("specificity");

const cssInput = `ul#nav li.active a {
    background-color:green;
}

body {
    width:auto;
}

div p {
    color:green;
}

#mylist:first-child {
    background-color:white;
}`;

function filterCSSCommands(cssInput) {
  const seperatedCSS = cssInput.split(/[{}\n]/g);
  const filteredCSS = seperatedCSS.filter((el) => el !== "");
  const cssObject = {};
  let storedKey = "";
  for (let i = 0; i < filteredCSS.length; i++) {
    const line = filteredCSS[i];
    if (!line.startsWith("    ")) {
      cssObject[line] = [];
      storedKey = line;
    } else {
      cssObject[storedKey].push(line.replace("    ", ""));
    }
  }
  return cssObject;
}
function findSpecificity(cssObject) {
  const cssSpecObj = {};
  const cssSpecArr = [];
  let i = 0;
  for (let key of Object.keys(cssObject)) {
    const cssSpec = calculate(key)[0].specificityArray;
    cssSpecArr.push(cssSpec);
    cssSpecObj[key] = cssSpec;
  }
  const sortedSpec = cssSpecArr.sort().reverse();
  const cssOrdered = sortedSpec.map((spec) => {
    return Object.keys(cssSpecObj).filter((el) => cssSpecObj[el] === spec);
  });
  return [cssOrdered, sortedSpec];
}
const cssObject = filterCSSCommands(cssInput);
findSpecificity(cssObject);

export function specificityCalculator(cssInput) {
  const cssObject = filterCSSCommands(cssInput);
  const [cssOrdered, specificityOrdered] = findSpecificity(cssObject);
  return cssOrdered;
}
