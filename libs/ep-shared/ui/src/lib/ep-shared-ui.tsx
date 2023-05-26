import styles from './ep-shared-ui.module.css';

/* eslint-disable-next-line */
export interface EpSharedUiProps {}

export function EpSharedUi(props: EpSharedUiProps) {
  return (
    <div className={styles['container']}>
      <h1 className='bg-red-300'>Welcome to EpSharedUi!</h1>
    </div>
  );
}

export default EpSharedUi;
