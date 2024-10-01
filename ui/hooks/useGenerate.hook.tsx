"use client";

export default function useGenerator(iframeRef: any) {
  function handleAddElement(e: any, data: any) {
    const iframe = iframeRef.current;

    if (iframe && iframe.contentWindow) {
      // Send the clicked element data to the iframe using postMessage
      iframe.contentWindow.postMessage({ type: "ADD_ELEMENT", data }, "*");
    }
  }

  return { handleAddElement };
}
