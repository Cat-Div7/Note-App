function getFormattedDate(inputDate) {
  try {
    const dateObj = inputDate ? new Date(inputDate) : new Date();
    if (isNaN(dateObj.getTime())) return "Invalid Date";

    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "Invalid Date";
  }
}

export { getFormattedDate };
