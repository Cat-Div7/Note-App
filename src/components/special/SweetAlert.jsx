import Swal from "sweetalert2";

const STORAGE_KEY_ALERT = "hideAlert";

function SweetAlert() {
  const showAlert = () => {
    Swal.fire({
      title: "Important Notice !!",
      html: `
        <p style="font-size: 15px; color: var(--text-color);">
          This message contains demo content and is not part of the real system,
          Just to make sure the content below is not real for now.
          You can safely ignore it — or choose not to see it again.
        </p>
        <div style="margin-top: 1rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <input type="checkbox" id="dontShowAgain" />
          <label for="dontShowAgain" style="font-size: 14px; user-select: none;">Don't show again</label>
        </div>
      `,
      icon: "warning",
      confirmButtonText: "Got it!",
      confirmButtonColor: "var(--primary)",
      background: "var(--background-color)",
      color: "var(--text-heading)",
      focusConfirm: false,
      didOpen: () => {
        const checkbox = document.getElementById("dontShowAgain");
        checkbox.addEventListener("change", (e) => {
          localStorage.setItem(STORAGE_KEY_ALERT, e.target.checked);
        });
      },
    });
  };

  const shouldShow = String(localStorage.getItem(STORAGE_KEY_ALERT)) !== "true";
  if (shouldShow) return showAlert();

  return null;
}

export { SweetAlert };
