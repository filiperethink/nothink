function generateNoteId() {
  // Generate a random and unique id for each note.
  const S4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

// format unix timestamp to dd/MM/YYYY.
// if day or month is less than 10 insert 0 before.
function formatDate(date) {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  return (
    (day < 10 ? "0" : "") +
    day +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    year
  );
}

export { generateNoteId, formatDate };
