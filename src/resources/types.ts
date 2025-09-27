export type User = {
  firstName: string;
  lastName: string;
  /** Preferred public-facing name */
  displayName: string;
  /** Handle/username used in links or mentions */
  username: string;
  /** e.g. "male", "female", "non-binary" */
  gender: string;
  /** e.g. "he/him", "she/her", "they/them" */
  pronouns: string;
  bio: string;
  /** Short phrases rotated in UI (e.g., homepage flip effect) */
  flipSentences: string[];
  /** General location for display */
  address: string;
  /** E.164 format, base64 encoded (https://t.io.vn/base64-string-converter) */
  phoneNumber: string;
  /** base64 encoded (https://t.io.vn/base64-string-converter) */
  email: string;
  /** Personal/homepage URL */
  website: string;
  /** Primary/current role shown on profile */
  jobTitle: string;
  /** Work history entries */
  jobs: {
    title: string;
    company: string;
    website: string;
  }[];
  /** Rich about section; supports Markdown */
  about: string;
  /** Public URL to avatar image */
  avatar: string;
  /** Open Graph image URL for social sharing */
  ogImage: string;
  /** Audio URL for name pronunciation */
  namePronunciationUrl: string;
  /** SEO keywords list for metadata */
  keywords: string[];
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: string;
};

export type SocialLink = {
  /** Icon image URL (absolute or path under /public) shown beside the title. */
  icon: string;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
};

/**
 * A technology item displayed in the Tech Stack section.
 *
 * Icon file resolution:
 * - Default: /public/tech-stack-icons/[key].svg
 * - Themed (when `theme === true`):
 *   - Dark:  /public/tech-stack-icons/[key]-dark.svg
 *   - Light: /public/tech-stack-icons/[key]-light.svg
 */
export type TechStack = {
  /** Unique identifier used to resolve icon files. */
  key: string;
  /** Display name of the technology. */
  title: string;
  /** Official website URL. */
  href: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean;
};

export type ExperiencePositionIcon =
  /** Icon key used to render the position category in the UI. */
  "code" | "design" | "education" | "business" | "idea";

export type ExperiencePosition = {
  id: string;
  title: string;
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Full-time | Part-time | Contract | Internship, etc. */
  employmentType?: string;
  description?: string;
  /** UI icon to represent the role type. */
  icon?: ExperiencePositionIcon;
  skills?: string[];
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  /** URL to the company logo (absolute URL or path under /public). */
  companyLogo?: string;
  /** Roles held at this company; keep newest first for display. */
  positions: ExperiencePosition[];
  /** Marks the company as the current employer for highlighting. */
  isCurrentEmployer?: boolean;
};
