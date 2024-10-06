const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded font-bold transition-colors duration-300 flex items-center justify-center";

  const variantStyles = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white",
    outline:
      "bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
  };

  const sizeStyles = {
    small: "text-sm px-3 py-1",
    medium: "",
    large: "text-lg px-6 py-3",
  };

  const loaderStyles = "animate-spin";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? (
        <div className={loaderStyles}>
          <svg
            className={`animate-spin h-5 w-5`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
