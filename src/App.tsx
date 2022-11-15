import { ChangeEvent, useState } from "react";

function App() {
  const [topLeft, setTopLeft] = useState("0");
  const [topRight, setTopRight] = useState("0");
  const [bottomRight, setBottomRight] = useState("0");
  const [bottomLeft, setBottomLeft] = useState("0");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const borderCorner = e.target.name;
    const value = e.target.value;
    console.log(value);

    console.log(borderCorner);
    switch (borderCorner) {
      case "tl":
        setTopLeft((v) => value);
        return;
      case "tr":
        setTopRight((v) => value);
        console.log("here");
        return;
      case "br":
        setBottomRight((v) => value);
        return;
      case "bl":
        setBottomLeft((v) => value);
        return;
      default:
        "No value given";
    }
  };

  const borderRadii = {
    // borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`, TRY it again
    borderTopLeftRadius: `${topLeft}px`,
    borderTopRightRadius: `${topRight}px`,
    borderBottomRightRadius: `${bottomRight}px`,
    borderBottomLeftRadius: `${bottomLeft}px`,
  };

  return (
    <div className="flex flex-col items-center gap-5 text-slate-700">
      <h1 className="text-7xl font-bold underline text-center">
        Preview Border Radius
      </h1>
      <p className="text-3xl">Insert the values you want to try.</p>
      <label htmlFor="tl">Top Left</label>
      <input
        className="border-2 rounded-md border-blue-400"
        type="number"
        name="tl"
        id="tl"
        onChange={handleChange}
      />
      <label htmlFor="tl">Top Right</label>
      <input
        className="border-2 rounded-md border-blue-400"
        type="number"
        name="tr"
        id="tr"
        onChange={handleChange}
      />
      <label htmlFor="tl">Bottom Right</label>
      <input
        className="border-2 rounded-md border-blue-400"
        type="number"
        name="br"
        id="br"
        onChange={handleChange}
      />
      <label htmlFor="tl">Bottom Left</label>
      <input
        className="border-2 rounded-md border-blue-400 "
        type="number"
        name="bl"
        id="bl"
        onChange={handleChange}
      />
      <div
        className={`
          w-96 h-96 text-center border-2 border-slate-900
        `} // TRY to change radii with tailwind
        style={borderRadii}
      >
        <p className="text-xl">Change my borders</p>
      </div>
    </div>
  );
}

export default App;
