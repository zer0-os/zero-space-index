export default function LinkButton({ href, size, className, children, style = "white", ...rest }) {
  return (
    <a
      href={href}
      className={`
        ${className}
        ${size === "small" ? "px-3 py-1 text-sm" : "px-6 py-2 text-md"}
        ${`btn-style-sp`}
        inline-flex items-center font-medium rounded-full focus:outline-none focus:border-none focus:shadow-outline-none transition duration-150 ease-in-out
      `}
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}
