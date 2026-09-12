const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const formatDate = (date: Date): string => {
  return dateFormatter.format(date);
};
