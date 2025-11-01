import { createContext, useEffect } from "react";
import { useLoadStorage } from "@hooks";

const CollapseContext = createContext({
  isCollapsed: false,
  setIsCollapsed: () => {},
});

const STORAGE_KEY_COLLAPSE = "collapseNav";

function CollapseContextProvider({ children }) {
  const { value: isCollapsed, setValue: setIsCollapsed } = useLoadStorage(
    STORAGE_KEY_COLLAPSE,
    false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsCollapsed(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <CollapseContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
}

export { CollapseContext, CollapseContextProvider };
