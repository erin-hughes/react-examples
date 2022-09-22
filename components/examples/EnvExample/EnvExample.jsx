import HeaderLinkCombo from '../../HeaderLinkCombo/HeaderLinkCombo';
import styles from './envExample.module.scss';

const EnvExample = () => {
  const environmentVariable = process.env.NEXT_PUBLIC_EXAMPLE_SECRET;

  return (
    <div className={styles.container}>
      <HeaderLinkCombo headerText="Environment Variable Example" linkText="Documentation" href="https://create-react-app.dev/docs/adding-custom-environment-variables/" />
      <div>
        <p>The value of the environment variable NEXT_PUBLIC_EXAMPLE_SECRET is:</p>
        <p>{environmentVariable}</p>
      </div>
    </div>
  );
}

export default EnvExample;
