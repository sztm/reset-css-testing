import { useCallback, Fragment } from 'react'
import normalizeCssUrl from "./css/normalize.css?url"
import modernNormalizeUrl from "./css/modern-normalize.css?url"
import sanitizeCssUrl from "./css/sanitize.css?url"
import ressUrl from "./css/ress.css?url"
import myResetCssUrl from "./css/reset.css?url"

const cssList = [
  {
    id: "default",
    name: "Default",
    url: undefined
  },
  {
    id: "normalize_css",
    name: "Normalize.css",
    url: normalizeCssUrl
  },
  {
    id: "modern_normalize",
    name: "modern-normalize",
    url: modernNormalizeUrl
  },
  {
    id: "sanitize_css",
    name: "sanitize.css",
    url: sanitizeCssUrl
  },
  {
    id: "ress",
    name: "ress",
    url: ressUrl
  },
  {
    id: "my_reset",
    name: "My reset CSS",
    url: myResetCssUrl
  },
]

const LINK_ELEM_ID = "selectedCss"

const updateLinkElem = (url) => {
  const linkElem = document.querySelector(`link#${LINK_ELEM_ID}`);
      
  linkElem.href = url ?? "#";
}

export const App = () => {
  const selectCss = useCallback((cssId) => {
    const css = cssList.find(css => css.id === cssId);
    updateLinkElem(css.url)
  }, [])

  return (
    <>
      <fieldset className="css-selector">
        <legend>CSS</legend>
        <div>
          <select name="normalize_css" id="normalize_css" onChange={(e) => {
            selectCss(e.target.value)
          }}>
            {cssList.map((css) => (
              <option value={css.id} key={css.id} defaultChecked={css.id === "default"}>
                {css.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </>
  )
}
