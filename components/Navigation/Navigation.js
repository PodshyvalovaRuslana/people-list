import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = ({ navigationList }) => (
  <ul className={styles.list}>
    {navigationList.map((item) => (
      <li key={item.index} className={styles.list__item}>
        <Link href={item.href}>
          <a>{item.name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default Navigation;
