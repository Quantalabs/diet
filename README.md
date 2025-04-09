# diet

A zotero plugin to tell people what (research papers) you've consumed.

### My Diet 🍔


- Zhou, J., & Sander, J. (2003). Data Bubbles for Non-Vector Data. In Proceedings 2003 VLDB Conference (pp. 452–463). Elsevier. https://doi.org/10.1016/b978-012722442-8/50047-1

- Bhola, I. (2023). Dialectal Variation and Mutual Intelligibility of Hindi in Delhi. International Journal of Languages and Culture, 3(2), 55–64. https://doi.org/10.51483/ijlc.3.2.2023.55-64

- Díaz, M., & Switkes, J. (2021). Speaking out: A mathematical model of language preservation. Heliyon, 7(5), e06975. https://doi.org/10.1016/j.heliyon.2021.e06975

- Abrams, D. M., & Strogatz, S. H. (2003). Modelling the dynamics of language death. Nature, 424(6951), 900–900. https://doi.org/10.1038/424900a

- Satyendra, R. (2004). An Informal Introduction to Some Formal Concepts from Lewin’s Transformational Theory. Journal of Music Theory, 48(1), 99–141. https://doi.org/10.1215/00222909-48-1-99


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