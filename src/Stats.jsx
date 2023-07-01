function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">start adding some items to your packing list🚀</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? `You got everything! Ready to go ✈`
          : `💼 You have ${numItems} item on your list, and you already pack
          ${numPacked} (${precentage}%)`}
      </em>
    </footer>
  );
}
export default Stats;
