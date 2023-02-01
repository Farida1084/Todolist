// Reusable components (Dumma komponenter) - Nästan allting styrs med props - style och
// funktionallitet framförallt.

const styles = {
  color: {
    primary: "bg-blue-500 hover:bg-blue-400",
    delete: "bg-pink-400 hover:bg-pink-300",
    gray: "bg-gray-400 hover:bg-gray-300",
  },
  size: {
    small: "text-sm px-4 py-2",
    large: "text-lg px-6 py-3",
  },
};

export default function Button(props) {
  const { title, color, size, onClick } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <button
      onClick={onClick}
      className={`rounded-lg ${colorClass} ${sizeClass}`}
    >
      {title}
    </button>
  );
}
