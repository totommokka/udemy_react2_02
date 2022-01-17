// エリアのスタイル定義
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  const { open, text } = props;

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子供コンポーネント</p>
          <p>{text}</p>
        </div>
      ) : null}
    </>
  );
};
