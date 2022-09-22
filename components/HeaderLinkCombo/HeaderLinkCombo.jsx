import { Link } from '@carbon/react';
import styles from './headerLinkCombo.module.scss';

const HeaderLinkCombo = ({ headerText, linkText, href }) => (
  <div className={styles.comboContainer}>
    <h1>{headerText}</h1>
    <Link href={href}>{linkText}</Link>
  </div>
);

export default HeaderLinkCombo;
