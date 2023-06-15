import styles from "./task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

const Task = () => {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div></div>
      </button>

      <div className={styles.taskbody}>
        <h5>Workout Done</h5>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </div>
      {/* action */}
      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default Task;
