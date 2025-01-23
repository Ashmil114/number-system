const Input = (props: {
  title: string;
  action: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{props.title}</span>
        {/* <span className="label-text-alt">Top Right label</span> */}
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => {
          props.action(+e.target.value);
        }}
        value={props.value}
      />
      {/* <div className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </div> */}
    </label>
  );
};

export default Input;
