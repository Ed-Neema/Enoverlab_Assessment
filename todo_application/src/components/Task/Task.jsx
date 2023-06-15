import styles from "./task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className={styles.task}>
      <div className={styles.miniContainer}>
        <button
          className={styles.checkContainer}
          onClick={() => onComplete(task.id)}
        >
          {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>

        <div className={styles.taskbody}>
          <h5 className={task.isCompleted ? styles.textCompleted : ""}>
            {task.title}
          </h5>
          <p className={task.isCompleted ? styles.textCompleted : ""}>
            {task.description}
          </p>
        </div>
      </div>
      {/* action */}
      <button className={styles.deleteButton} onClick={()=> onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default Task;
