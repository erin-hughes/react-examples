import { useState } from 'react';
import { Button } from '@carbon/react';
import HeaderLinkCombo from '../../HeaderLinkCombo/HeaderLinkCombo';
import ButtonLabelCombo from '../../ButtonLabelCombo/ButtonLabelCombo';
import styles from './reducerExample.module.scss';

const ReducerExample = () => {
  const values = [1, 2, 3, 4, 5];
  const [reducedTotal, setReducedTotal] = useState(null);

  const handleOnClick = () => {
    const reducerResult = values.reduce((total, value) => {
      return total + value;
    });
    setReducedTotal(reducerResult);
  };

  return (
    <div className={styles.container}>
      <HeaderLinkCombo headerText="Reducer Example" linkText="Documentation" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" />
      <div className={styles.intro}>
        <p>We are going to use a reducer to add up all the values in the following array and return the total:</p>
        <p>[{values.toString()}]</p>
        
      </div>
      <ButtonLabelCombo labelText="Click below to see the results of the reducer." buttonText="Click me!" buttonCallback={handleOnClick} />
      {reducedTotal && 
        <div className={styles.totalContainer}>
          <p>
            Total: {reducedTotal}
          </p>
        </div>
      }
    </div>
  );
}

export default ReducerExample;
