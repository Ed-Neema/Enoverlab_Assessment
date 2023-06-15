import styles from "./header.module.css";
import Logo from "../../assets/logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} />
      {/* form */}
      <form className={styles.newTaskForm}>
        <input placeholder="Title" type="text" />
        <input placeholder="Description" type="text" />
        <button>
          <AiOutlinePlusCircle size={20} /> Create
        </button>
      </form>
    </header>
  );
};

export default Header;
