// インラインスタイル。
// CSSをReact風でベタ書き
export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8x",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const tiltleStyle = {};
  const buttonStyle = {};

  return (
    <div style={containerStyle}>
      <p style={tiltleStyle}>- Inline Style -</p>
      <button style={buttonStyle}> fight !</button>
    </div>
  );
};
