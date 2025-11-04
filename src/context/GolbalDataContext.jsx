import { createContext } from "react";
import { useLoadStorage } from "@hooks";

const GlobalDataContext = createContext({
  records: false,
  setRecords: () => {},
  isLoading: false,
  error: null,
});

const STORAGE_KEY_NOTES = "notesData";

function GlobalDataContextProvider({ children }) {
  const {
    value: records,
    setValue: setRecords,
    isLoading,
    error,
  } = useLoadStorage(STORAGE_KEY_NOTES, []);

  return (
    <GlobalDataContext.Provider
      value={{ records, setRecords, isLoading, error }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
}

export { GlobalDataContext, GlobalDataContextProvider };
