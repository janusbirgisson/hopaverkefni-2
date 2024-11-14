import { el } from "../elements";
import { render } from "../../main";
export function renderLectures(root, contentJson) {

    const mainElement = document.querySelector('main')
    const subject = el("h2", {}, `${contentJson.title} námsefni`)
    console.log(contentJson.title)
    mainElement.appendChild(subject)
    const buttonsItems = document.createElement('div');
    buttonsItems.classList.add('buttons-container');

    const lectures = contentJson.lectures;

    lectures.forEach(lecture => {
        const lectureButton = document.createElement('button');
        lectureButton.textContent = lecture.title;
        lectureButton.className = 'lecture-button';
        console.log("lets go");
        lectureButton.onclick = () => {
            const newUrl = `${window.location.search}&lecture=${lecture.slug}`;
            window.history.pushState({ path: newUrl }, '', newUrl);


            render(root);
        };
        buttonsItems.appendChild(lectureButton);

    });
    mainElement.appendChild(buttonsItems)




}



