 import styles from './list.module.css';
//  import './list-darkmode.css'

const List = () => {
  return (
    <div className={styles.list}>
      <form className={styles.form}>
        <label className={styles.label}>
          <input checked="" value="home" name="band" type="radio" className={styles.input} />
          <span className={styles.span}>Home</span>
        </label>
        <label className={styles.label}>
          <input value="fm" name="band" type="radio" className={styles.input} />
          <span className={styles.span}>About Me</span>
        </label>
        <label className={styles.label}>
          <input value="sw" name="band" type="radio" className={styles.input} />
          <span className={styles.span}>Work</span>
        </label>
        <label className={styles.label}>
          <input value="mw" name="band" type="radio" className={styles.input} />
          <span className={styles.span}>Blog</span>
        </label>
        <label className={styles.label}>
          <input value="mw" name="band" type="radio" className={styles.input} />
          <span className={styles.span}>Contact Me</span>
        </label>
      </form>
    </div>
  );
}

export default List;
