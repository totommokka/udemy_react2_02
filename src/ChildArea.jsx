import { memo } from "react";

// エリアのスタイル定義
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo化することにより、propsの中身（ここで参照している項目ではなく、呼び元で設定している項目）の変更有無により
// functionの実行可否制御が行われる。
// memo化することは何らかのコストがあるようなので無邪気に付与することは避けたほうがよさそう。
// 処理コストがかかるfunction・コンポーネントであれば、
// レンダリング制御することにより、画面の応答速度が上がる。
export const ChildArea = memo((props) => {
  const { open } = props;

  console.log("よばれた");

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子供コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
