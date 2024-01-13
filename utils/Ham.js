 import styles from './ham.module.css';

const Ham = () => {
  return (
     <div className="" style={styles.Ham}>
         <input type="checkbox" id="checkbox"/>
         <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
         </label>
     </div>
  )
}

export default Ham