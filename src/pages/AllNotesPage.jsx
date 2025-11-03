import { useContext } from "react";
import styles from "./AllNotesPage.module.css";
import { GlobalDataContext } from "@context";
import { NoteList } from "@components";

function AllNotesPage() {
  const { records } = useContext(GlobalDataContext);

  return (
    <>
      <h1 className={styles.heading}>All Notes</h1>
      <p className={styles.sub}>Showing {records.length} notes</p>

      {/* Show All Notes */}
      <NoteList />
    </>
  );
}

export { AllNotesPage };
