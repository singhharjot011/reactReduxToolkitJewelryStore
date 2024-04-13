function StatusTag({ statusTag }) {
  const base = "absolute right-0 top-0 p-1 text-sm";

  const styles = {
    hot: base + " bg-yellow-400",
    new: base + " bg-white",
    sale: base + " bg-black text-white",
    sold: base + " bg-red-500 text-white",
  };

  return <span className={styles[statusTag.toLowerCase()]}>{statusTag}</span>;
}

export default StatusTag;
