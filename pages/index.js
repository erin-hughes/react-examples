import { Link } from "@carbon/react";
import pagesConfig from "../pagesConfig";
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
   <div className={styles.tocContainer}>
    <h1>Table of Contents</h1>
    {pagesConfig.map(({ title, href }) => 
      <Link key={href} href={href}>{title}</Link>
    )}
   </div>
  )
}
