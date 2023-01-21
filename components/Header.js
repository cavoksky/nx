import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/" legacyBehavior>
            <a className={styles.navlogo}>Nina Healthy</a>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/" legacyBehavior>
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Privacy-policy" legacyBehavior>
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Terms-and-conditions" legacyBehavior>
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Terms And Conditions
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Trademarks" legacyBehavior>
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Trademarks Legal Notice
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Important-disclaimer" legacyBehavior>
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Important Disclaimer
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Contact" legacyBehavior>
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    </>
  );
}
