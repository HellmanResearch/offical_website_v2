const truncateString = (str, length = 8) => {
  return str.length > length * 2
    ? `${str.slice(0, length)}...${str.slice(-length)}`
    : str;
};

export { truncateString };
