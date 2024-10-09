import Loading from "./Loading";

const Button = ({
  children,
  onClick,
  href = "",
  className = "",
  variant = "primary",
  isLoading = false,
  disabled = false,
}) => {
  const baseStyles =
    "px-2 md:px-4 py-1 md:py-2 rounded font-bold transition-colors duration-300 flex items-center justify-center";

  const variantStyles = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-500 hover:bg-opacity-70 text-white",
    outline:
      "py-23 bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
  };

  const loaderStyles = "animate-spin";
  const Element = href ? "a" : "button";
  return (
    <Element
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
    </Element>
  );
};

export default Button;
