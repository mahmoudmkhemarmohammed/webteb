const Sticker = (props) => {
  return (
    <img
        src={props.sticker}
      className={props.clasNam}
      style={{
        position: props.position,
        left: props.left,
        right: props.right,
        top: props.top,
        bottom: props.bottom,
        animation: props.animation,
        width: props.width,
        height: props.height,
        borderRadius: props.rounded
      }}
      alt={props.alt}
    />
  );
};
export default Sticker;