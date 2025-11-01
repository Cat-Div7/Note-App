import { createContext } from "react";
import { useLoadStorage } from "@hooks";

const GlobalDataContext = createContext({
  records: false,
  setRecords: () => {},
  isLoading: false,
  error: null,
});

const STORAGE_KEY_NOTES = "notesData";

let INITIAL_VALUE = [
  {
    id: crypto.randomUUID(),
    title: "Meeting Notes",
    description:
      "Discussed Q3 roadmap and new features for the upcoming project launch. Key takeaways and action items assigned.",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: "Meeting Notes",
    description:
      "Discussed Q3 roadmap and new features for the upcoming project launch. Key takeaways and action items assigned.",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: "Meeting Notes",
    description:
      "Discussed Q3 roadmap and new features for the upcoming project launch. Key takeaways and action items assigned.",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: "Meeting Notes",
    description:
      "Discussed Q3 roadmap and new features for the upcoming project launch. Key takeaways and action items assigned.",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: "Meeting Notes",
    description:
      "Discussed Q3 roadmap and new features for the upcoming project launch. Key takeaways and action items assigned.",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: "Meeting Notes",
    description:
      "Discussed Q3 roadmap and new features for the upcoming project launch. Key takeaways and action items assigned.",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: "Meeting Notes",
    description:
      "Discussed Q3 roadmap and new features for the upcoming project launch. Key takeaways and action items assigned.",
    date: new Date(),
  },
];

// INITIAL_VALUE = [];

function GlobalDataContextProvider({ children }) {
  const {
    value: records,
    setValue: setRecords,
    isLoading,
    error,
  } = useLoadStorage(STORAGE_KEY_NOTES, INITIAL_VALUE);

  return (
    <GlobalDataContext.Provider
      value={{ records, setRecords, isLoading, error }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
}

export { GlobalDataContext, GlobalDataContextProvider };
