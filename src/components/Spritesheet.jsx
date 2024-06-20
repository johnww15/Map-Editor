export default function Spritesheet({ url }) {
  return (
    <>
      <div className="spritesheet-container">
        <img src={url} alt="spritesheet" className="spritesheet-image" />
      </div>
    </>
  );
}
