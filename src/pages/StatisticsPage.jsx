import { ChartCard, SweetAlert } from "@components";
import styles from "./StatisticsPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faTimesCircle } from "@utils/icons";

const statsData = [
  {
    id: 1,
    title: "Total Notes",
    value: 128,
    change: "+5%",
    color: "green",
  },
  { id: 2, title: "Completed", value: 96, change: "+8%", color: "green" },
  { id: 3, title: "Pending", value: 32, change: "-2%", color: "red" },
  {
    id: 4,
    title: "Completion Rate",
    value: "75%",
    change: "+3%",
    color: "green",
  },
];

const tasks = [
  {
    id: 1,
    title: "Update component library",
    date: "2 days ago",
    status: "pending",
  },
  {
    id: 2,
    title: "Deploy staging server",
    date: "3 days ago",
    status: "failed",
  },
  {
    id: 3,
    title: "Finalize project report",
    date: "Today",
    status: "completed",
  },
  {
    id: 4,
    title: "Schedule team meeting",
    date: "Yesterday",
    status: "completed",
  },
  {
    id: 5,
    title: "Review design mockups",
    date: "3 days ago",
    status: "completed",
  },
];

function StatisticsPage() {
  return (
    <>
      {/* Header */}
      <header className={styles.headerContainer}>
        <h1 className={styles.header}>Statistics</h1>
        <div className={styles.allLinks}>
          <div className={styles.linksContainer}>
            <label className={styles["radio-label"]}>
              <span>This Week</span>
              <input
                type="radio"
                name="stats-filter"
                value="This Week"
                defaultChecked
              />
            </label>
            <label className={styles["radio-label"]}>
              <span>This Month</span>
              <input type="radio" name="stats-filter" value="This Month" />
            </label>
            <label className={styles["radio-label"]}>
              <span>All Time</span>
              <input type="radio" name="stats-filter" value="All Time" />
            </label>
          </div>
        </div>
      </header>

      {/* Status Cards */}
      <div className={styles.grid}>
        {statsData?.map((item) => (
          <div key={item.id} className={styles.card}>
            <p className={styles["card-title"]}>{item.title}</p>
            <p className={styles["card-value"]}>{item.value}</p>
            <p
              className={
                item.color === "green"
                  ? styles["green-color"]
                  : styles["red-color"]
              }
            >
              {item.change}
            </p>
          </div>
        ))}
      </div>

      {/* Charts & Recent Activity */}
      <div className={styles.gridChart}>
        {/* Chart Bar */}
        <ChartCard auxClass={`${styles.card} ${styles.chart}`} />
        {/* Activity */}
        <div className={`${styles.card} ${styles["recent-card"]}`}>
          <h3 className={styles["recent-title"]}>Recent Completions</h3>
          <div className={styles["tasks-list"]}>
            {tasks?.map((task) => (
              <div key={task.id} className={styles["task-item"]}>
                <div
                  className={`${styles["task-icon"]} ${
                    task.status === "completed"
                      ? styles["task-completed"]
                      : task.status === "pending"
                      ? styles["task-pending"]
                      : styles["task-failed"]
                  }`}
                >
                  <FontAwesomeIcon
                    icon={
                      task.status === "completed"
                        ? faCheckCircle
                        : task.status === "pending"
                        ? faClock
                        : faTimesCircle
                    }
                  />
                </div>

                <div className={styles["task-info"]}>
                  <p className={styles["task-title"]}>{task.title}</p>
                  <p className={styles["task-date"]}>
                    {task.status === "completed"
                      ? `Completed: ${task.date}`
                      : task.status === "pending"
                      ? "Pending"
                      : `Deleted: ${task.date}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Message */}
      <SweetAlert />
    </>
  );
}

export { StatisticsPage };
