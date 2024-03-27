export default function Button({
  name,
  onClick,
  color,
  disabled,
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${color} px-4 py-2 rounded ease-in duration-300 `}
    >
      {name}
    </button>
  );
}
