import styles from "./LayoutPage.module.css";
import { SideNav } from "@components";
import { ThemeContextProvider, CollapseContextProvider, GlobalDataContextProvider } from "@context";
import { Outlet } from "react-router-dom";

function LayoutPage() {
  return (
    <GlobalDataContextProvider>
      <CollapseContextProvider>
        <ThemeContextProvider>
          <div className={styles.app}>
            <aside className={styles.sidebar}>
              <SideNav></SideNav>
            </aside>

            <main className={styles.mainContent}>
              <Outlet></Outlet>
            </main>
          </div>
        </ThemeContextProvider>
      </CollapseContextProvider>
    </GlobalDataContextProvider>
  );
}

export { LayoutPage };
