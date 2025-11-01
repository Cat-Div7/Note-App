import styles from "./NoteList.module.css";
import {
  PlaceHolder,
  Loader,
  EmptyState,
  NoteItem,
  DashedCard,
} from "@components";
import { GlobalDataContext } from "@context";
import { useContext } from "react";

function NoteList() {
  const { records, isLoading, error } = useContext(GlobalDataContext);

  // Laoding PlaceHolder
  if (isLoading) {
    return <PlaceHolder value={<Loader />} />;
  }

  // When fetch is failed
  if (error) {
    return <PlaceHolder value={error} />;
  }

  // Greeting User To Track
  if (!records || records.length === 0) {
    return <EmptyState />;
  }

  const checkLength = records.length >= 6;
  const visibleNotes = checkLength ? records.slice(0, 5) : records;

  // Rendering Data
  return (
    <>
      <p className={styles.noteCount}>Showing {records.length} notes</p>
      <div className={styles.content}>
        {visibleNotes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}

        {checkLength && <DashedCard />}
      </div>
    </>
  );
}
export { NoteList };
