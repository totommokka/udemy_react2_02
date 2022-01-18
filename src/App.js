import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import "./styles.css";

export default function App() {
  // カウントアップ用
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };

  // テキスト文字を表示/非表示
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => setOpen(!open);

  // useCallbackを使う
  // functionを生成して、子コンポーネントにわたす。
  // ChildAreaではmemo化しているが、functionは都度作られるので、毎回レンダリングされてしまう。
  // なので、setter関数を関しして、値が変更されたことを検知させる。
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // userMemo
  // function自体のメモ化
  // 第二引数は監視用のsetterのfunction。
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input onChange={onChangeText} />
      <br />
      <InlineStyle />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
