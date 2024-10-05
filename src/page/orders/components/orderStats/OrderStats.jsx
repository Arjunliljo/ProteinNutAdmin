import StatCard from "./StatCard";
import styles from "./OrderStats.module.css";

const orderStats = [
  { iconClass: "iconCompleted", label: "Orders Completed", value: "2345" },
  { iconClass: "iconConfirmed", label: "Orders Confirmed", value: "323" },
  { iconClass: "iconCanceled", label: "Orders Canceled", value: "17" },
  { iconClass: "iconRefund", label: "Orders on Refund", value: "2" },
];

const OrderStats = () => {
  return (
    <section className={styles.orderStatsContainer}>
      <div className={styles.orderStatsGrid}>
        {orderStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default OrderStats;
