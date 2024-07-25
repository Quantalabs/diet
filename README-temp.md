# diet

A zotero plugin to tell people what (research papers) you've consumed.

### My Diet 🍔

%DIET%

### Usage Instructions

Install:
```
npm install @citation-js/core @citation-js/plugin-doi @citation-js/plugin-csl zotero-api-client
```

Create `README-temp.md` in the same directory as `README.md` and add `%DIET` where you want your diet to appear.

Run:
```
node diet.js ZOTERO_API_KEY ZOTERO_USER_ID
```