import { ChangeEvent, useState } from "react";

function App() {
  const [topLeft, setTopLeft] = useState("0");
  const [topRight, setTopRight] = useState("0");
  const [bottomRight, setBottomRight] = useState("0");
  const [bottomLeft, setBottomLeft] = useState("0");
  const [sqaureSize, setSquareSize] = useState("200");
  const [borderWidth, setBorderWidth] = useState("1");
  const [borderColor, setBorderColor] = useState("#000");
  const [borderStyle, setBorderStyle] = useState("solid");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const borderCorner = e.target.name;
    const value = e.target.value;
    const id = e.target.id;

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
      case "borderWidth":
        setBorderWidth((v) => value);
        return;
      case "borderStyle":
        setBorderStyle((v) => id);
        return;
      case "borderColor":
        setBorderColor((v) => value);
        return;
      case "squareSize":
        setSquareSize((v) => value);
        return;
      default:
        "No value given";
    }
  };

  const borderRadii = {
    borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
    width: `${sqaureSize}px`,
    height: `${sqaureSize}px`,
    borderWidth: `${borderWidth}px`,
    borderColor: `${borderColor}`,
    borderStyle: `${borderStyle}`,
  };

  const copyClipboard = () => {
    const copyText = `
.border {
  border: ${borderWidth}px ${borderStyle} ${borderColor};
  border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;
  width: ${sqaureSize};
  height: ${sqaureSize};
}`;
    navigator.clipboard.writeText(copyText);
  };

  return (
    <div className="flex flex-col items-center gap-5 text-slate-700">
      <h1 className="text-3xl sm:text-7xl font-bold underline text-center">
        Preview Border Radius
      </h1>
      <p className="text-xl sm:text-3xl text-center">
        Insert the values you want to try.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 mt-5 sm:mt-20 flex-wrap justify-center">
        <label htmlFor="tl" className="flex flex-col">
          Top Left
          <input
            className="border-2 rounded-md border-blue-400"
            type="number"
            name="tl"
            id="tl"
            value={topLeft}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="tr" className="flex flex-col">
          Top Right
          <input
            className="border-2 rounded-md border-blue-400"
            type="number"
            name="tr"
            value={topRight}
            id="tr"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="br" className="flex flex-col">
          Bottom Right
          <input
            className="border-2 rounded-md border-blue-400"
            type="number"
            name="br"
            id="br"
            value={bottomRight}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bl" className="flex flex-col">
          Bottom Left
          <input
            className="border-2 rounded-md border-blue-400 "
            type="number"
            name="bl"
            id="bl"
            value={bottomLeft}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="borderWidth" className="flex flex-col">
          Width
          <input
            className="border-2 rounded-md border-blue-400"
            type="number"
            name="borderWidth"
            id="borderWidth"
            value={borderWidth}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="borderColor" className="flex flex-col">
          Color
          <input
            className="border-2 rounded-md border-blue-400"
            type="color"
            name="borderColor"
            id="borderColor"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="squareSize" className="flex flex-col">
          Square Size
          <input
            min="200"
            className="border-2 rounded-md border-blue-400 "
            type="number"
            name="squareSize"
            id="sqaureSize"
            value={sqaureSize}
            onChange={handleChange}
          />
        </label>
        <fieldset className="grid grid-cols-4 gap-x-10">
          <label htmlFor="dotted" className="flex flex-col">
            Dotted
            <input
              className="border-2 rounded-md border-blue-400"
              type="radio"
              name="borderStyle"
              id="dotted"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="dashed" className="flex flex-col">
            Dashed
            <input
              className="border-2 rounded-md border-blue-400"
              type="radio"
              name="borderStyle"
              id="dashed"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="solid" className="flex flex-col">
            Solid
            <input
              className="border-2 rounded-md border-blue-400"
              type="radio"
              name="borderStyle"
              id="solid"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="double" className="flex flex-col">
            Double
            <input
              className="border-2 rounded-md border-blue-400"
              type="radio"
              name="borderStyle"
              id="double"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="groove" className="flex flex-col">
            Groove
            <input
              className="border-2 rounded-md border-blue-400"
              type="radio"
              name="borderStyle"
              id="groove"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="ridge" className="flex flex-col">
            Ridge
            <input
              className="border-2 rounded-md border-blue-400"
              type="radio"
              name="borderStyle"
              id="ridge"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="inset" className="flex flex-col">
            Inset
            <input
              className="border-2 rounded-md border-blue-400"
              type="radio"
              name="borderStyle"
              id="inset"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="outset" className="flex flex-col">
            Outset
            <input
              className="border-2 rounded-md border-blue-400"
              type="radio"
              name="borderStyle"
              id="outset"
              onChange={handleChange}
            />
          </label>
        </fieldset>
      </div>
      <div className="flex flex-col items-center ">
        <div
          className={`
            text-center border-2 border-slate-900
        `} // TRY to change radii with tailwind
          style={borderRadii}
        >
          <p className="text-xl">Change my borders</p>
        </div>{" "}
        <div className="flex place-content-center mt-5">
          <button
            className="border-2 border-blue-400 rounded-md"
            onClick={copyClipboard}
          >
            Copy CSS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
