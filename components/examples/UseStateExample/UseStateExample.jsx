import { useState } from 'react';
import HeaderLinkCombo from '../../HeaderLinkCombo/HeaderLinkCombo';
import ButtonLabelCombo from '../../ButtonLabelCombo/ButtonLabelCombo';
import styles from './useStateExample.module.scss';

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <HeaderLinkCombo headerText="useState Example" linkText="Documentation" href="https://reactjs.org/docs/hooks-state.html" />
      <ButtonLabelCombo labelText={`You clicked ${count} times.`} buttonText="Click me!" buttonCallback={handleOnClick}/>
    </div>
  );
}

export default UseStateExample;
