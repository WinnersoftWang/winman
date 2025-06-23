const { useState } = React;

function TreeItem({ label, children }) {
  const [open, setOpen] = useState(false);
  const hasChildren = React.Children.count(children) > 0;

  return (
    <li>
      <div onClick={() => hasChildren && setOpen(!open)}>
        {label}
      </div>
      {hasChildren && open && <ul className="tree">{children}</ul>}
    </li>
  );
}

function TreeMenu() {
  return (
    <ul className="tree">
      <TreeItem label="メニュー1">
        <TreeItem label="サブメニュー1-1" />
        <TreeItem label="サブメニュー1-2" />
      </TreeItem>
      <TreeItem label="メニュー2">
        <TreeItem label="サブメニュー2-1" />
      </TreeItem>
    </ul>
  );
}

function App() {
  const [hidden, setHidden] = useState(false);
  return (
    <div id="container">
      <div className={hidden ? "sidebar hidden" : "sidebar"}>
        <TreeMenu />
      </div>
      <button className="toggle-btn" onClick={() => setHidden(!hidden)}>
        {hidden ? "メニューを表示" : "メニューを隠す"}
      </button>
      <div className="content">
        <h1>ホーム</h1>
        <p>ようこそ、管理システムへ</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

