"use client";

import { useEffect, useState } from "react";

export default function useGenerator(iframeRef: any) {
  const [selectedElement, setSelectedElement] = useState({
    name: null,
    element: null,
  });
  const [elementStyles, setElementStyles] = useState({});

  const iframe = iframeRef.current;

  function handleSelectElement(e: any) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const element = iframeDoc.querySelector(e);

    if (element) {
      // Update the selected element and its styles
      setSelectedElement(element);
      // Here, you could gather styles if needed
      // const computedStyles = window.getComputedStyle(element);
      //  const styles = {
      //    color: computedStyles.color,
      //    fontSize: computedStyles.fontSize,
      //    // Add more styles as needed
      //  };
      // setElementStyles(styles);
    }
  }

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
        const styles = {
          color: computedStyles.color,
          fontSize: computedStyles.fontSize,
        };

        setElementStyles(styles);
      }
    };

    // Attach the click event listener to the iframe's document
    iframeDoc.addEventListener("click", handleIframeClick);

    // Clean up the event listener on unmount
    return () => {
      iframeDoc.removeEventListener("click", handleIframeClick);
    };
  }, [iframeRef]);

  return {
    handleChangeStyle,
    handleAddElement,
    handleSelectElement,
    selectedElement,
  };
}
