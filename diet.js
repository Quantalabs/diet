const { default: api } = require('zotero-api-client');
const { Cite } = require('@citation-js/core')
const fs = require('fs');
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')

const cmdParams = process.argv.slice(2);

async function main() {
    const myapi = api(cmdParams[0]).library('user', cmdParams[1]);
    const response = await myapi.collections().get();
    const items = response.getData();

    let DOIs = [];

    for (const item of items) {
        if (item.name == "Diet") {
            const diet = await myapi.collections(item.key).items().get();
            const items = diet.getData();

            items.forEach(element => {
                if (element.DOI) {
                    DOIs.push(element.DOI);
                }
            });
        }
    }

    let finalDiet = "";

    for (const doi of DOIs) {
        let citation = await Cite.async(doi);

        finalDiet = finalDiet + "\n- " + citation.format('bibliography', {
            template: 'apa',
            lang: 'en-US'
        })
    }

    // Replace %DIET% with finalDiet in README.md
    const readme = fs.readFileSync('README-temp.md', 'utf8');
    const newReadme = readme.replace('%DIET%', finalDiet);
    fs.writeFileSync('README.md', newReadme);
}

main()