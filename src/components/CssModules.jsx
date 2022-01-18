import classes from "./CssModules.module.css";

// インラインスタイル。
// CSSをReact風でベタ書き
export const CssModules = () => {
  const tiltleStyle = {};
  const buttonStyle = {};

  return (
    <div className={classes.container}>
      <p style={tiltleStyle}>- CssModules -</p>
      <button style={buttonStyle}> fight !</button>
    </div>
  );
};
