const developerName = 'Maxin'
const progLang = 'Js'

const progLanguages = {
    javaScript: 'Js',
    nodeJs: 'NodeJs'
}

debugger

if (progLang === progLanguages.javaScript) {
    console.log(`${developerName} является front-end`)
} else if (progLang === progLanguages.nodeJs) {
    console.log(`${developerName} является Back-end`)
} else {
    console.log(`Язык не определен`)
}