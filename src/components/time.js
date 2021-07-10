const today = new Date();

const currentDay = today.getDate();

const currentMonth = (today.getMonth() + 1).toLocaleString(
  "en-US",
  {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }
);

const currentYear = today.getFullYear();

export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
