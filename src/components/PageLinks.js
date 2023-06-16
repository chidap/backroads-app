import { pageLinks } from "./data";
const PageLinks = ({ itemLinks, itemLink }) => {
  return (
    <ul className={itemLinks} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={itemLink}>
              {" "}
              {text}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
