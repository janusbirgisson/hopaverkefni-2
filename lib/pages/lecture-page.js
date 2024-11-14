import { el } from "../elements";
import { renderNavigation } from "../components/navigation";
import { fetcher } from "../fetcher";

export async function renderLecture(root, indexJson, type, content, lectureSlug) {
    const headerElement = el('header', {}, el('h1', {}, indexJson.title));
    console.log(type)
    console.log(content)

    const contentJson = await fetcher(`/data/${type}/${content}.json`);
    const lecture = contentJson.lectures.find((lec) => lec.slug === lectureSlug);

    headerElement.appendChild(renderNavigation(indexJson.navigation, root));

    const mainElement = el('main', {}, ...createLectureElements(lecture));
    const footerElement = el('footer', {}, indexJson.footer);

    root.appendChild(headerElement);
    root.appendChild(mainElement);
    root.appendChild(footerElement);
}


function createLectureElements(lecture) {
    const elements = [];
    elements.push(el('h2', {}, lecture.title));

    lecture.content.forEach((section) => {
        switch (section.type) {
            case 'text':
                elements.push(el('p', {}, section.data));
                break;
            case 'image':
                elements.push(
                    el('figure', {},
                        el('img', { src: section.data, alt: section.caption }),
                        el('figcaption', {}, section.caption)
                    )
                );
                break;
            case 'heading':
                elements.push(el('h3', {}, section.data));
                break;
            case 'quote':
                elements.push(
                    el('blockquote', {},
                        el('p', {}, section.data),
                        el('cite', {}, section.attribute || "")
                    )
                );
                break;
            case 'code':
                elements.push(el('pre', {}, el('code', {}, section.data)));
                break;
            case 'list':
                {
                    const listItems = section.data.map(item => el('li', {}, item));
                    elements.push(el('ul', {}, ...listItems));
                    break;
                }

            default:
                console.warn('Unknown content type', section.type);
        }
    });
    return elements;
}
