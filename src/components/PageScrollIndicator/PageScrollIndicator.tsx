import "./PageScrollIndicator.scss";
import { smoothScroll } from "utils/helpers/smoothScroll";
import { useState } from "react";

type Props = {};
const PageScrollIndicator = (props: Props) => {
  const windowHeight: number = window.innerHeight;
  let pageHeight: number;

  const body = document.body,
    html = document.documentElement;

  pageHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const [progress, setProgress] = useState(0);
  const [windowScroll, setWindowScroll] = useState(0);

  document.addEventListener("scroll", () => {
    setWindowScroll(window.scrollY);
    setProgress((window.scrollY * 100) / (pageHeight - windowHeight));
    if (window.scrollY === pageHeight - windowHeight) setProgress(100);
  });

  return (
    <div
      onClick={() => smoothScroll("pageTop")}
      className="page-scroll-indicator"
      style={{
        background: `conic-gradient( #0500FF ${progress}%, #6B6B6B ${progress}%)`,
        display: `${windowScroll > 0 ? "flex" : "none"}`,
      }}>
      <div className="page-scroll-indicator__body"></div>
    </div>
  );
};
export default PageScrollIndicator;
