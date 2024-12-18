import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div id="links-header-container">
        <div id="links-header">        
            <a class="links-header-item" href="https://costeer.github.io/101st-Wiki-Remade/The-Compendium/compendium-index">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check"><path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"/><path d="m16 12 2 2 4-4"/><path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"/></svg>
            Compendium</a>    

            <a class="links-header-item" href="https://costeer.github.io/101st-Wiki-Remade/Resources/useful-tools">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            Tools</a>     

            <a class="links-header-item" href="https://helldiverscompanion.com/#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
            Galactic War Map</a>

            <a class="links-header-item" href="https://costeer.github.io/101st-Wiki-Remade/101-Training-Program/newbie-overview">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke="currentColor" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_201_1550)"> <path d="M9.89948 16.9706L17.3359 9.53417C18.4038 8.46623 19.1476 7.11781 19.4813 5.64485L19.799 4.24264L18.3968 4.5603C16.9238 4.89399 15.5754 5.63781 14.5075 6.70574L9.19237 12.0208M9.89948 16.9706L12.0208 20.5061C13.1993 19.3276 14.8492 17.6777 12.0208 14.8492L9.89948 16.9706ZM9.89948 16.9706L7.07105 14.1421M7.07105 14.1421L3.53552 12.0208C4.71403 10.8423 6.36395 9.19239 9.19237 12.0208M7.07105 14.1421L9.19237 12.0208M4.94973 16.2635C4.94973 16.2635 3.24698 18.8033 4.24263 19.799C5.23827 20.7946 7.77816 19.0919 7.77816 19.0919" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="--darkreader-inline-stroke: #e8e6e3;" data-darkreader-inline-stroke=""></path> </g> <defs> <clipPath id="clip0_201_1550"> <rect fill="white" height="24" width="24" style="--darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""></rect> </clipPath> </defs> </g></svg>
            Beginners Guide</a>

            <a class="links-header-item" href="https://costeer.github.io/101st-Wiki-Remade/Contributing/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
            Contributing</a>
        </div>
        <hr></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
