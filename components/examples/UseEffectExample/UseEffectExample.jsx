import { useState, useEffect } from 'react';
import HeaderLinkCombo from '../../HeaderLinkCombo/HeaderLinkCombo';
import ButtonLabelCombo from '../../ButtonLabelCombo/ButtonLabelCombo';
import styles from './useEffectExample.module.scss';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  }, [count]);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <HeaderLinkCombo headerText="useEffect Example - with dependency" linkText="Documentation" href="https://reactjs.org/docs/hooks-effect.html" />
      <ButtonLabelCombo labelText="Look at the title of the tab to see how many times you clicked 👀" buttonText="Click me!" buttonCallback={handleOnClick}/>
    </div>
  );
}

export default UseEffectExample;
