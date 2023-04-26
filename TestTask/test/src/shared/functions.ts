export const getClassNames = (...args: (string | boolean | number | undefined | null)[]): string =>
	args.filter(Boolean).join(' ');
	
export const mqMin = (breakpoint: number) => `screen and (min-width: ${breakpoint}px)`
export const mqMax = (breakpoint: number) => `screen and (max-width: ${breakpoint}px)`