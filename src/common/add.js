export const add = (...args) => {
  return args.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};
