export const getClassNames = (...args) =>
  args.filter(Boolean).join(' ');

export const mqMin = (breakpoint) => `screen and (min-width: ${breakpoint}px)`;
export const mqMax = (breakpoint) => `screen and (max-width: ${breakpoint}px)`;
