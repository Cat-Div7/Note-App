import styles from "./CreateNotePage.module.css";
import { useContext, useMemo, useReducer, useState } from "react";
import { Button, FormInput } from "@components";
import { GlobalDataContext } from "@root/context";
import { useNavigate } from "react-router-dom";

function formReducer(state, action) {
  const { key, value, type } = action;

  if (type === "RESET") return INITIAL_VALUE;

  const trimValue = value.trim();
  return { ...state, [key]: { value, valid: !!trimValue } };
}

const INITIAL_VALUE = {
  title: { value: "", valid: false },
  content: { value: "", valid: false },
};

const NOTES_PATH = "/all-notes";

function CreateNotePage() {
  const { setRecords } = useContext(GlobalDataContext);
  const navigate = useNavigate();
  const [formState, dispatchFn] = useReducer(formReducer, INITIAL_VALUE);

  const titleHandler = (e) =>
    dispatchFn({ type: "UPDATE", key: "title", value: e.target.value });
  const contentHandler = (e) =>
    dispatchFn({ type: "UPDATE", key: "content", value: e.target.value });

  // Destructuring Validity For FormState
  const {
    title: { valid: isTitleValid },
    content: { valid: isContentValid },
  } = formState;

  const contentValue = formState.content.value;
  const titleValue = formState.title.value;
  const contentTrim = contentValue.trim();

  const readyToAdd = useMemo(() => {
    return isTitleValid && isContentValid;
  }, [isTitleValid, isContentValid]);

  const onSave = (e) => {
    e.preventDefault();

    if (readyToAdd) {
      const formattedNote = {
        id: crypto.randomUUID(),
        title: titleValue.trim(),
        description: contentValue.trim(),
        date: new Date(),
      };

      setRecords((prev) => [formattedNote, ...prev]);
      navigate(NOTES_PATH);
      dispatchFn({ type: "RESET" });
    }
  };

  return (
    <form className={styles.form} onSubmit={onSave}>
      <h2 className={styles.heading}>Edit Note</h2>

      <FormInput
        tagName="input"
        label="Title"
        name="title"
        value={titleValue}
        onChange={titleHandler}
        placeholder="Enter note title..."
      />

      <FormInput
        tagName="textarea"
        label="Content"
        name="description"
        value={contentValue}
        onChange={contentHandler}
        placeholder="Start writing your note here..."
        maxLength={200}
        rows={8}
      />

      <p
        className={`${styles.charsLimit} ${
          contentTrim.length >= 170 ? styles.warning : undefined
        }`}
      >
        {contentTrim.length} / 200
      </p>

      <div className={styles.wrapper}>
        <Button type="submit" variant="save">
          Save
        </Button>
      </div>
    </form>
  );
}

export { CreateNotePage };
