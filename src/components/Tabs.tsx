import { useEffect, useState } from "react";
import Input from "./Input";
import Table from "./Table";
import { mainCovert, SYMBOLS } from "../lib/convert";

const Tabs = () => {
  const [symbols, setSymbols] = useState(0);
  const [count, setCount] = useState(1);
  const [newNumberSet, setnewNumberSet] = useState<string[]>();

  const handleConvert = () => {
    if (symbols === 1) {
      const items = [];
      for (let c = 0; c < count; c++) {
        const item = [];
        for (let i = 0; i < c; i++) {
          item.push("0");
        }
        if (item.length > 10) {
          const d1 = item.slice(0, 10);
          const l = item.slice(9, -1).length;
          console.log(l);

          items.push(d1.join("") + "." + l);
        } else {
          items.push(item.join(""));
        }
      }
      setnewNumberSet(items);
      return;
    }

    if (count <= 0) {
      alert("Please enter a positive number.");
      return;
    }
    if (symbols < 1) {
      alert("Please enter number of symbols between 1 to 36.");
      return;
    }
    const val = mainCovert({ data: count, numSymbols: symbols });
    setnewNumberSet(val);
  };

  const handleClear = () => {
    window.location.reload();
  };

  useEffect(() => {
    console.log(newNumberSet);
  }, [newNumberSet]);

  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg pb-10 ">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Count"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {/* Content Tab 1 */}
        <div className="min-h-[20rem] h-fit">
          <div className="w-full flex justify-center pt-10 pb-5 gap-5 items-center flex-col md:flex-row">
            <Input title="Number of Symbols" action={setSymbols} />
            <Input title="Number want to be Count" action={setCount} />
            <button onClick={handleConvert} className="btn btn-ghost mt-8">
              Convert
            </button>
            {newNumberSet
              ? newNumberSet?.length > 0 && (
                  <button onClick={handleClear} className="btn btn-ghost mt-8">
                    Clear
                  </button>
                )
              : ""}
          </div>
          <div className="pt-5 md:px-20 pb-20 text-center">
            {symbols > 0 && (
              <h1 className="text-xl font-black mb-2">SYMBOLS:</h1>
            )}
            {SYMBOLS.slice(0, symbols).map((sym) => (
              <>
                <h1 className="badge badge-lg p-3 bg-slate-100 text-lg mx-1">
                  {sym}
                </h1>
                <span className="text-2xl font-black last:hidden">{"<"}</span>
              </>
            ))}
          </div>
          <Table data={newNumberSet || []} />
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Convert"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="min-h-[20rem]">
          <div className="w-full flex justify-center pt-10 pb-20 gap-5 items-center flex-col">
            <Input title="Number of Symbols" action={setSymbols} />
            <Input title="Number want to be Convert" action={setCount} />
            <div className="pt-2 pb-2 md:px-20 text-center">
              {symbols > 0 && (
                <h1 className="text-xl font-black mb-2">SYMBOLS:</h1>
              )}
              {SYMBOLS.slice(0, symbols).map((sym) => (
                <>
                  <h1 className="badge badge-lg p-3 bg-slate-100 text-lg mx-1">
                    {sym}
                  </h1>
                  <span className="text-2xl font-black last:hidden">{"<"}</span>
                </>
              ))}
            </div>
            <button onClick={handleConvert} className="btn btn-ghost mt-8">
              Convert
            </button>
            {newNumberSet
              ? newNumberSet?.length > 0 && (
                  <button onClick={handleClear} className="btn btn-ghost mt-8">
                    Clear
                  </button>
                )
              : ""}
            <div className="w-full flex justify-center items-center">
              <h1 className="text-4xl font-black">
                {newNumberSet && symbols !== 1 ? newNumberSet[count] : ""}
              </h1>
              <h1 className="text-4xl font-black">
                {newNumberSet && symbols === 1 ? newNumberSet[count - 1] : ""}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="_"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="min-h-[20rem]">...</div>
      </div> */}
    </div>
  );
};

export default Tabs;
