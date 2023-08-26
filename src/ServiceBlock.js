export default function ServiceBlock(props) {
  return (
    <div className="offering-section">
      <img src={props.imageURL} alt={props.altText} />
      <h2 className="category">{props.category}</h2>
    </div>
  );
}
