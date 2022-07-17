import { Fragment } from 'react';
import styles from './TitleScene.module.css';

export default function TitleScene() {
  return (
    <Fragment>
      <div className={styles.sceneContainer}>
        <div className={styles.titleContainer}>
          <p>スペース BangBang</p>
        </div>
        <div className={styles.startOptionsContainer}>
          <div>Sign in</div>
          <div>or</div>
          <div>Start as a stranger</div>
        </div>
      </div>
      <div className={styles.signupContainer}>
        <p>Sign up</p>
      </div>
    </Fragment>
  );
}
