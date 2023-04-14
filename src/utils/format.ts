const formatDate = (date: string) => {
  if (!date) return;

  let objectDate = new Date(date);

  let day = objectDate.getDate();

  let month = objectDate.getMonth();

  let year = objectDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export { formatDate };
