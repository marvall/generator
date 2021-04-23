import styles from "./TestItem.module.scss";

export default function TestItem({ id }) {
  
  return (
    // если опции кейсов хранятся в отдельном файле,
    // а currentCase в глобальном стейте, то из них формируем подсказку
    <input
      type="text"
      title={`you must use ... `}
      className={styles.testInput}
      id={id}
    />
  )
}
