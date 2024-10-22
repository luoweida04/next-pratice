import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {};

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return (<div className={styles.component}>Hello world!</div>);
};

export default BaseTemplate;
