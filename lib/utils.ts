import { SectionType, TypedSection } from "@/types/product";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMetaContent = (
  metaData: Array<{ value: string; content: string }>,
  metaValue: string,
  defaultValue: string = "",
): string => {
  const meta = metaData.find((meta) => meta.value === metaValue);
  return meta ? meta.content : defaultValue;
};

export function findSection<T extends SectionType>(
  sections: TypedSection[],
  type: T,
): Extract<TypedSection, { type: T }> | undefined {
  return sections.find((section) => section.type === type) as
    | Extract<TypedSection, { type: T }>
    | undefined;
}
