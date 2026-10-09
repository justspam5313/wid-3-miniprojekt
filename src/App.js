import "./styles.css";
import { useState } from "react";

export default function App() {
  const [produkt, setProdukt] = useState("");
  const [suchwort, setSuchwort] = useState("");

  return (
    <div className="App">
      <div className="Toolbar">
        <img
          className="Logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fdarts-text-font-motion-action-260nw-1140783248.jpg&f=1&nofb=1&ipt=7f89f217b3f3a3fcdef2b5b89214dd300c8d975a69b5de49065adff1ef26f6af&ipo=images"
          alt="Logo"
        />
        <div className="AppName">Dart Shop 3000</div>
        <input
          type="text"
          value={produkt}
          onChange={(e) => setProdukt(e.target.value)}
        />
        <button className="Button" onClick={() => setSuchwort(produkt)}>
          Produkt Suchen
        </button>
      </div>
      <p className="SuchText">
        {suchwort !== "" ? `Das Produkt: "${suchwort}" hat es an Lager` : ""}
      </p>
    </div>
  );
}
