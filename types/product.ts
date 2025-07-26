// Base types
export type SectionType =
  | "instructors"
  | "features"
  | "pointers"
  | "about"
  | "offers"
  | "group_join_engagement"
  | "feature_explanations"
  | "testimonials"
  | "faq"
  | "bundle_items"
  | "certificate"
  | "free_items"
  | "bundle_certificate"
  | "requirements"
  | "how_to_pay"
  | "content_preview";

// Common
export interface MediaItem {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  id: string;
  icon: string;
  text: string;
  color: string;
  list_page_visibility: boolean;
}

export interface SeoMeta {
  content: string;
  type: string;
  value: string;
}

export interface SchemaMeta {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface SeoData {
  defaultMeta: SeoMeta[];
  description: string;
  keywords: string[];
  title: string;
  schema: SchemaMeta[];
}

export interface CTA {
  name: string;
  value: string;
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

// Section value types
export interface Instructor {
  name: string;
  slug: string;
  image: string;
  description: string;
  short_description: string;
  has_instructor_page: boolean;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
}

export interface AboutItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PointerItem {
  id: string;
  icon: string;
  color: string;
  text: string;
}

export interface OfferItem {
  id: string;
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  start_at: string;
  template: string;
  text: string;
}

export interface EngagementItem {
  id: string;
  title: string;
  title_color: string;
  description: string;
  description_color: string;
  thumbnail: string;
  top_left_icon_img: string;
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
}

export interface ExclusiveFeatureItem {
  id: string;
  title: string;
  file_type: string;
  file_url: string;
  video_thumbnail?: string;
  checklist: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  description: string;
  video_url?: string;
  thumb?: string;
  video_type?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Section wrapper
export interface BaseSection<T> {
  type: SectionType;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: T[];
}

// Discriminated union for strict mapping
export type TypedSection =
  | (BaseSection<Instructor> & { type: "instructors" })
  | (BaseSection<FeatureItem> & { type: "features" })
  | (BaseSection<AboutItem> & { type: "about" })
  | (BaseSection<PointerItem> & { type: "pointers" })
  | (BaseSection<OfferItem> & { type: "offers" })
  | (BaseSection<EngagementItem> & { type: "group_join_engagement" })
  | (BaseSection<ExclusiveFeatureItem> & { type: "feature_explanations" })
  | (BaseSection<TestimonialItem> & { type: "testimonials" })
  | (BaseSection<FaqItem> & { type: "faq" })
  | (BaseSection<unknown> & {
      type: Exclude<
        SectionType,
        | "instructors"
        | "features"
        | "about"
        | "pointers"
        | "offers"
        | "group_join_engagement"
        | "feature_explanations"
        | "testimonials"
        | "faq"
      >;
    });

// Final product data type
export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
  seo: SeoData;
  cta_text: CTA;
  sections: TypedSection[];
  is_cohort_based_course: boolean;
  delivery_method: string;
}
