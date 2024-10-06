import Loading from "./Loading";

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
    secondary: "bg-gray-500 hover:bg-opacity-70 text-white",
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
          <Loading />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
