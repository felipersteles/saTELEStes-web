const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const shortMonthNames = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const formatDate = (date: string | undefined, isShort?: boolean): string => {
  if (!date) return "";

  let stringDate = new Date(date);

  let day = stringDate.getDate();

  let month = stringDate.getMonth();

  let year = stringDate.getFullYear();

  if (isShort) return day + "/" + shortMonthNames[month] + "/" + year;
  return day + "/" + monthNames[month] + "/" + year;
};

const limitString = (text: string, limit: number) => {
  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export { formatDate, limitString };
