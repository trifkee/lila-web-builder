"use client";

import { useEffect, useState } from "react";

export default function useGenerator(iframeRef: any) {
  const [selectedElement, setSelectedElement] = useState({
    name: null,
    element: null,
  });
  const [elementStyles, setElementStyles] = useState({});

  const iframe = iframeRef.current;

  function handleAddElement(e: any, data: any) {
    if (iframe && iframe.contentWindow) {
      // Send the clicked element data to the iframe using postMessage
      iframe.contentWindow.postMessage({ type: "ADD_ELEMENT", data }, "*");
    }
  }

  // ----
  function handleChangeStyle({
    propName,
    value,
  }: {
    propName: string;
    value: string;
  }) {
    if (!selectedElement.element) {
      return;
    }

    if (
      (propName === "gap" || propName === "margin" || propName === "padding") &&
      !isNaN(+value)
    ) {
      value = `${value}px`;
    }

    setElementStyles((prev) => ({
      ...prev,
      [propName]: value,
    }));
    // @ts-ignore
    selectedElement.element.style[propName] = value;
  }

  // ----

  useEffect(() => {
    const iframeDoc =
      iframeRef.current.contentDocument ||
      iframeRef.current.contentWindow.document;

    const handleIframeClick = (event: any) => {
      const element = event.target;
      if (element) {
        setSelectedElement({
          name: element.nodeName ?? element.className ?? element.id,
          element,
        });

        const computedStyles = window.getComputedStyle(element);

        setElementStyles(computedStyles);
      }
    };

    iframeDoc.addEventListener("click", handleIframeClick);

    return () => {
      iframeDoc.removeEventListener("click", handleIframeClick);
    };
  }, [iframeRef]);

  return {
    handleChangeStyle,
    handleAddElement,
    selectedElement,
    elementStyles,
  };
}
