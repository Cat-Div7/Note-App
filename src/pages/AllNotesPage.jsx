import { useContext } from "react";
import styles from "./AllNotesPage.module.css";
import { GlobalDataContext } from "@context";
import { NoteList, PlaceHolder } from "@components";

function AllNotesPage() {
  const { records } = useContext(GlobalDataContext);

  if (records.length === 0) {
    return (
      <div className={styles.placeholderContainer}>
        <PlaceHolder value="No available notes" centered={true} />
      </div>
    );
  }

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
