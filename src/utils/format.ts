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

  let day = String(stringDate.getDate());

  let month = stringDate.getMonth();

  let year = stringDate.getFullYear();

  if (Number(day) < 10) day = `0${day}`;

  if (isShort) return day + "/" + shortMonthNames[month] + "/" + year;
  return day + "/" + monthNames[month] + "/" + year;
};

const limitString = (text?: string, limit?: number) => {
  if (!text || !limit) return;

  return text.length > limit ? `${text.substring(0, limit)}...` : text;
};

export { formatDate, limitString };
