import classes from "./CssModules.module.css";

// CSS定義を外だし
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CssModules -</p>
      <button className={classes.button}> fight !</button>
    </div>
  );
};
