import { Button } from "@carbon/react";
import styles from './buttonLabelCombo.module.scss';

const ButtonLabelCombo = ({ labelText, buttonText, buttonCallback }) => (
  <div className={styles.buttonLabelCombo}>
    <p>{labelText}</p>
    <Button onClick={() => buttonCallback()}>
      {buttonText}
    </Button>
  </div>
);

export default ButtonLabelCombo;
