"use client";

export default function GenerateCanvas({ iframeRef }: { iframeRef: any }) {
  return (
    <>
      <article className="canvas">
        <iframe ref={iframeRef} src="./iframe-content.html"></iframe>
      </article>
    </>
  );
}
