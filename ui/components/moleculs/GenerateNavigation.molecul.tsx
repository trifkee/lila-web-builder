import Link from "next/link";

export default function GenerateNavigation() {
  return (
    <nav className="generate__navigation">
      <Link href={"/"}>
        <h1>Lila</h1>
      </Link>

      <div className="document-title">
        {true ? <p className="title">Untitled</p> : <input type="text" />}
      </div>
    </nav>
  );
}
