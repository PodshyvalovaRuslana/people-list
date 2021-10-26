import { Navigation } from "../Navigation";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const navigationList = [
    { index: 1, name: "home", href: "/" },
    { index: 2, name: "people", href: "/people" },
    { index: 3, name: "about", href: "/about" },
  ];

  return (
    <>
      <header className={styles.header}>
        <h1>People-list</h1>
        <Navigation navigationList={navigationList} />
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/PodshyvalovaRuslana/nextjs-people-list"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          See source code on GitHub
        </a>
      </footer>
    </>
  );
};

export default Layout;
