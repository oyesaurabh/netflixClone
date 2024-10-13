const RadialProgress = ({
  percentage,
  fgColor,
  size = 40,
  strokeWidth = 4,
  bgColor = "gray-200",
  textColor = "white",
}) => {
  const sqSize = size;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="relative inline-flex">
      <svg
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}
        className="transform -rotate-90"
      >
        <circle
          className={`text-${bgColor} stroke-current`}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          fill="none"
        />
        <circle
          className={`text-${fgColor}-600 stroke-current`}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          strokeLinecap="round"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`text-${textColor} font-mono text-sm`}
        >{`${percentage}`}</span>
      </div>
    </div>
  );
};

export default RadialProgress;
