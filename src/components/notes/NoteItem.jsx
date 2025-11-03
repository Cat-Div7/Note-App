import styles from "./NoteItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useMemo, useReducer, useState } from "react";
import { GlobalDataContext } from "@context";
import { getFormattedDate } from "@utils/getFormattedDate";
import Modal from "react-modal";
import { FormInput, Button } from "@components";

function dispatch(state, action) {
  const { key, value } = action;
  const currVal = value.trim();

  return { ...state, [key]: { value: currVal, valid: !!currVal } };
}

const INITIAL_VALUE = {
  title: { value: "", valid: true },
  desc: { value: "", valid: true },
};

function NoteItem({ id, title, description, date }) {
  const { setRecords } = useContext(GlobalDataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDesc, setEditDesc] = useState(description);
  const [formState, dispatchFn] = useReducer(dispatch, INITIAL_VALUE);

  const {
    title: { valid: isTitleValid },
    desc: { valid: isDescValid },
  } = formState;

  const isFormValid = useMemo(() => {
    return isTitleValid && isDescValid;
  }, [isTitleValid, isDescValid]);

  function onDelete() {
    setRecords((prev) => prev.filter((note) => note.id !== id));
  }

  function onSave(e) {
    e.preventDefault();
    setRecords((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, title: editTitle, description: editDesc }
          : note
      )
    );
    closeModal();
  }

  // Form Handlers and Validity
  function editTitleHandler(e) {
    setEditTitle(e.target.value);
    dispatchFn({ key: "title", value: e.target.value });
  }

  function editDescHandler(e) {
    setEditDesc(e.target.value);
    dispatchFn({ key: "desc", value: e.target.value });
  }

  function openModal() {
    setIsModalOpen(true);
    setEditTitle(title);
    setEditDesc(description);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {/* Card Container */}
      <div className={styles.noteCard}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>

          <div className={styles.actions}>
            <button
              className={`${styles.actionBtn} ${styles.editIcon}`}
              onClick={openModal}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>

            <button
              className={`${styles.actionBtn} ${styles.trashIcon}`}
              onClick={onDelete}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>

        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{getFormattedDate(date)}</p>
      </div>

      {/* Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Note"
        overlayClassName={styles.overlay}
        className={styles.content}
      >
        <form className={styles.form} onSubmit={onSave}>
          <h2 className={styles.heading}>Edit Note</h2>

          <FormInput
            tagName="input"
            label="Title"
            name="title"
            value={editTitle}
            onChange={editTitleHandler}
            placeholder="Enter title..."
          />

          <FormInput
            tagName="textarea"
            label="Description"
            name="description"
            value={editDesc}
            onChange={editDescHandler}
            placeholder="Write your note..."
            maxLength={200}
            rows={8}
          />

          <div className={styles.actionBtns}>
            <Button type="button" variant="cancel" onClick={closeModal}>
              Cancel
            </Button>

            <Button disabled={!isFormValid} type="submit" variant="save">
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export { NoteItem };
