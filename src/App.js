import { useState } from "react";
import { ChildArea } from "./ChildArea";
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
  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <input onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
