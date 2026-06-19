export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

export const socialLabel = (url: string) => new URL(url).hostname.replace("www.", "").split(".")[0];
