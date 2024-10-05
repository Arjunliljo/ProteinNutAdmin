import styles from "./OrderStats.module.css";

const StatCard = ({ iconClass, label, value }) => {
  return (
    <div className={styles.statCard}>
      <div className={`${styles.statIcon} ${styles[iconClass]}`}></div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statValue}>{value}</div>
    </div>
  );
};

export default StatCard;
