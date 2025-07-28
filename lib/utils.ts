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

type ExtractSectionByType<T extends SectionType> = Extract<
  TypedSection,
  { type: T }
>;

export function getSectionByType<T extends SectionType>(
  sections: TypedSection[],
  type: T,
): ExtractSectionByType<T> | undefined {
  return sections.find(
    (section): section is ExtractSectionByType<T> => section.type === type,
  );
}
