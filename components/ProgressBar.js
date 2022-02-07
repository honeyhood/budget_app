const ProgressBar = ({ value, max }) => {
  if (value === "0") return null;
  return (
    <div>
      <progress
        className={`progress rounded-full ${
          value > max ? "progress-error" : "progress-success"
        }`}
        value={value}
        max={max}
      ></progress>
    </div>
  );
};

export default ProgressBar;
