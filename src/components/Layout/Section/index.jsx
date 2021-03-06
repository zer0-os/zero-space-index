export default function Section({
  children,
  maxSize = "max-w-5xl",
  secondaryClasses = "px-12",
  className = "",
  ...rest
}) {
  return (
    <div className={`${secondaryClasses} ${className} py-20 lg:py-36 text-center`} {...rest}>
      <div className={`prose mx-auto ${maxSize} text-white`}>{children}</div>
    </div>
  );
}
