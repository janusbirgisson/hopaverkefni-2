import { el } from "../elements";

export async function renderKeywords(root, contentJson) {
    const mainElement = document.querySelector('main');
    console.log("contentJson er: ", contentJson);
    const subject = el("h2", {}, `${contentJson.title}`);
    mainElement.appendChild(subject);

    const keywordsContainer = el("div", {class: "keywords-container"});

contentJson.keywords.forEach(keyword => {
    const keywordElement = el("section", {class: "keyword-section"},
        el("h3", {}, keyword.title),
        el("p", {}, keyword.content)
    );

    if(keyword.english) {
        keywordElement.appendChild(
            el("p", { class: "keyword-english"}, `(English:) ${keyword.english}`)
        );
    }

    keywordsContainer.appendChild(keywordElement);
});

mainElement.appendChild(keywordsContainer);
        
    }
