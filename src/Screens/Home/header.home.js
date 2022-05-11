import styles from "./header.model.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

function HeaderHome() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
      {/* Logo */}
      <h1>Dark Area</h1>
      <h1>Dark Area</h1>
      <h1>Dark Area</h1>
      </div>
    </header>
  );
}

export default HeaderHome;
