const toLocaleDate = (value: Date) => {
  return new Intl.DateTimeFormat('id-ID').format(value);
};

export default toLocaleDate;