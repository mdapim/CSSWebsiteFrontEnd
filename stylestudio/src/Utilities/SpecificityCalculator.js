const { calculate } = require('specificity');


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
}`

function filterCSSCommands(cssInput,indents) {
    const seperatedCSS = cssInput.split(/[{}\n]/g)
    const filteredCSS = seperatedCSS.filter(el=>el!=='')
    const cssObject = {}
    let storedKey=''
    let indentStr = ''
    for (let space=0;space<indents;space++) {
        indentStr+=' '
    }
    for (let i =0;i<filteredCSS.length;i++) {
        const line = filteredCSS[i]
        if (!line.startsWith(indentStr)) {
            cssObject[line]=[]
            storedKey = line
        }
        else {
            cssObject[storedKey].push(line.replace(indentStr,''))
        }
    }
    return cssObject
}
function findSpecificity(cssObject) {
    const cssSpecObj = {}
    const cssSpecArr = []
    let i=0
    for (let key of Object.keys(cssObject)) {
        const cssSpec = calculate(key)[0].specificityArray
        cssSpecArr.push(cssSpec)
        cssSpecObj[key]=cssSpec
    }
    const sortedSpec = cssSpecArr.sort().reverse()
    const cssOrdered = sortedSpec.map(spec=> {
        return Object.keys(cssSpecObj).filter(el=>cssSpecObj[el]===spec)
    })
    return [cssOrdered,sortedSpec]
}

export function specificityCalculator(cssInput,indents) {
    const cssObject = filterCSSCommands(cssInput,indents)
    const [cssOrdered,specificityOrdered] = findSpecificity(cssObject)
    return [cssOrdered,specificityOrdered]
}