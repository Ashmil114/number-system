const Table = ({ data }: { data: string[] }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="table  ">
        {/* head */}
        <thead className="grid grid-flow-row grid-cols-6">
          <tr>
            <th>N</th>
            <th>Your Number System</th>
          </tr>
          <tr>
            <th>N</th>
            <th>Your Number System</th>
          </tr>
          <tr>
            <th>N</th>
            <th>Your Number System</th>
          </tr>
          <tr>
            <th>N</th>
            <th>Your Number System</th>
          </tr>
          <tr>
            <th>N</th>
            <th>Your Number System</th>
          </tr>
          <tr>
            <th>N</th>
            <th>Your Number System</th>
          </tr>
        </thead>
        <tbody className="grid grid-flow-row  grid-cols-6">
          {data.map((value, index) => (
            <tr key={index}>
              <th>{index}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
