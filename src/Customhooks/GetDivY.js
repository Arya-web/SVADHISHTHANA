import { useEffect, useState } from "react";

const GetDivY = () => {
  const [DivName, setDivName] = useState("");

  useEffect(() => {
    const updateDiv = () => {
      let h = ~~(window.visualViewport.height / 4);
      const divs = document.elementsFromPoint(0, h);
      divs.forEach((e) => {
        if (e.attributes.name !== undefined) {
          setDivName(e.getAttribute("name"));
        }
      });
    };
    window.addEventListener("scroll", updateDiv);
    updateDiv();
    return () => window.removeEventListener("scroll", updateDiv);
  }, []);

  return DivName;
};

export default GetDivY;
