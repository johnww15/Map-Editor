export default function Canvas({ rows, cols }) {
  const createGrid = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid.push(<div key={`${i}-${j}`} className="canvas-item"></div>);
      }
    }
    return grid;
  };

  return (
    <>
      <div className="canvas-grid">{createGrid()}</div>
    </>
  );
}
