import Task from '../Task/Task';
import styles from './tasks.module.css'
const Tasks = () => {
  return (
    <section className={styles.tasks}>
      {/* mini-header*/}
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>1 of 10</span>
        </div>
      </header>
      {/* list of tasks */}
      <div className={styles.list}>
       <Task/> 
      </div>
    </section>
  );
}

export default Tasks