const Table = ({ data }: { data: string[] }) => {
  return (
    data.length !== 0 && (
      <div className="overflow-x-auto ">
        <table className="table  ">
          {/* head */}
          <thead className="grid grid-flow-row lg:grid-cols-6 md:grid-cols-3">
            <tr className=" ">
              <th>N</th>
              <th>Your Number System</th>
            </tr>
            <tr className="hidden md:block">
              <th>N</th>
              <th>Your Number System</th>
            </tr>
            <tr className="hidden md:block">
              <th>N</th>
              <th>Your Number System</th>
            </tr>
            <tr className="hidden lg:block">
              <th>N</th>
              <th>Your Number System</th>
            </tr>
            <tr className="hidden lg:block">
              <th>N</th>
              <th>Your Number System</th>
            </tr>
            <tr className="hidden lg:block">
              <th>N</th>
              <th>Your Number System</th>
            </tr>
          </thead>
          <tbody className="grid grid-flow-row  lg:grid-cols-6 md:grid-cols-3">
            {data.map((value, index) => (
              <tr key={index}>
                <th>{index}</th>
                <td>
                  {value.split(".")[0]} <sup>{value.split(".")[1]}</sup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Table;
