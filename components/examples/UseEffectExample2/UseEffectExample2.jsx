import { useState, useEffect } from 'react';
import HeaderLinkCombo from '../../HeaderLinkCombo/HeaderLinkCombo';
import styles from './useEffectExample2.module.scss';

const UseEffectExample2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className={styles.container}>
      <HeaderLinkCombo headerText="useEffect Example - after initial render" linkText="Documentation" href="https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects" />
      <div>
        <p>I have rendered {count} times!</p>
      </div>
    </div>
  );
}

export default UseEffectExample2;