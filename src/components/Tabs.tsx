import { useEffect, useState } from "react";
import Input from "./Input";
import Table from "./Table";
import { mainCovert } from "../lib/convert";

const Tabs = () => {
  const [symbols, setSymbols] = useState(2);
  const [count, setCount] = useState(1);
  const [newNumberSet, setnewNumberSet] = useState<string[]>();
  //   const [tabClicked, setTabClicked] = useState(false);

  const handleConvert = () => {
    if (count <= 0) {
      alert("Please enter a positive number.");
      return;
    }
    if (symbols < 2) {
      alert("Please enter number of symbols between 2 to 36.");
      return;
    }
    const val = mainCovert({ data: count, numSymbols: symbols });
    setnewNumberSet(val);
  };

  useEffect(() => {
    console.log(newNumberSet);
  }, [newNumberSet]);
  //   useEffect(() => {
  //     if (tabClicked) {
  //       setCount(1);
  //       setSymbols(2);
  //       setnewNumberSet([]);
  //     }
  //   }, [tabClicked, setTabClicked]);

  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg pb-10">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Number Count"
        defaultChecked
        // onClick={() => setTabClicked(true)}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {/* Content Tab 1 */}
        <div className="min-h-[20rem] h-fit">
          <div className="w-full flex justify-center pt-10 pb-20 gap-5 items-center">
            <Input title="Number of Symbols" action={setSymbols} />
            <Input title="Number want to be Count" action={setCount} />
            <button onClick={handleConvert} className="btn btn-ghost mt-8">
              Convert
            </button>
          </div>
          <Table data={newNumberSet || []} />
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Convert "
        // onClick={() => setTabClicked(true)}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="min-h-[20rem]">
          <div className="w-full flex justify-center pt-10 pb-20 gap-5 items-center flex-col">
            <Input title="Number of Symbols" action={setSymbols} />
            <Input title="Number want to be Convert" action={setCount} />
            <button onClick={handleConvert} className="btn btn-ghost mt-8">
              Convert
            </button>
            <div className="w-full flex justify-center items-center">
              <h1 className="text-4xl font-black">
                {newNumberSet ? newNumberSet[count] : ""}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <input
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
      </div>
    </div>
  );
};

export default Tabs;
