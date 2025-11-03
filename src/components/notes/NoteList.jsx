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

function NoteList({ headTotal = false, welcomeState = false, dashed = false }) {
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
  if ((!records || records.length === 0) && welcomeState) {
    return <EmptyState />;
  }

  const MAX_VISIBLE = 5;
  const checkLength = dashed ? records.length > MAX_VISIBLE : false;
  const visibleNotes = checkLength ? records.slice(0, MAX_VISIBLE) : records;
  const visibleCard = dashed && checkLength;
  

  // Rendering Data
  return (
    <>
      {headTotal && (
        <p className={styles.noteCount}>Showing {records.length} notes</p>
      )}
      <div className={styles.content}>
        {visibleNotes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}

        {visibleCard && <DashedCard />}
      </div>
    </>
  );
}
export { NoteList };
