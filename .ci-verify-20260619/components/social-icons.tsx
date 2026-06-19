import { Github } from "lucide-react";
import type { ElementType, SVGProps } from "react";

export type SocialPlatform = "github" | "linkedin" | "leetcode" | "codeforces" | "codolio";

type SocialIconProps = SVGProps<SVGSVGElement> & { size?: number };
type SocialIcon = ElementType<SocialIconProps>;

export const socialLabels: Record<SocialPlatform, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  leetcode: "LeetCode",
  codeforces: "Codeforces",
  codolio: "Codolio",
};

export const socialIcons = {
  github: Github,
  linkedin: LinkedinMark,
  leetcode: LeetCodeMark,
  codeforces: CodeforcesMark,
  codolio: CodolioMark,
} satisfies Record<SocialPlatform, SocialIcon>;

export function getSocialPlatform(key: string): SocialPlatform | null {
  return key in socialIcons ? (key as SocialPlatform) : null;
}

function LinkedinMark({ size = 19, ...props }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#5B8CFF" stroke="#2D3142" strokeWidth="2.4" />
      <path d="M7.4 10.2v7M7.4 7.1v.1M11 17.2v-7h3.1c2 0 3.4 1.2 3.4 3.7v3.3M14.4 17.2v-3.1c0-1-.4-1.5-1.4-1.5h-2" stroke="#F8F8F8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeetCodeMark({ size = 19, ...props }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
      <path d="M14.8 4.5 7.4 11.9l7.4 7.6" stroke="#2D3142" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.8 4.5 11.2 8" stroke="#F9C74F" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M9.7 12h8.5" stroke="#5B8CFF" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="18.4" cy="12" r="2.2" fill="#A78BFA" stroke="#2D3142" strokeWidth="1.8" />
    </svg>
  );
}

function CodeforcesMark({ size = 19, ...props }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
      <rect x="4" y="10" width="4.5" height="9" rx="1.5" fill="#5B8CFF" stroke="#2D3142" strokeWidth="1.9" />
      <rect x="9.75" y="5" width="4.5" height="14" rx="1.5" fill="#F9C74F" stroke="#2D3142" strokeWidth="1.9" />
      <rect x="15.5" y="8" width="4.5" height="11" rx="1.5" fill="#A78BFA" stroke="#2D3142" strokeWidth="1.9" />
    </svg>
  );
}

function CodolioMark({ size = 19, ...props }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="5" fill="#F8F8F8" stroke="#2D3142" strokeWidth="2.3" />
      <path d="M8.3 14.1c-.8 0-1.4-.6-1.4-2.1s.6-2.1 1.4-2.1c.5 0 .9.2 1.2.6M14.8 14.1c-1.1 0-1.9-.8-1.9-2.1s.8-2.1 1.9-2.1 1.9.8 1.9 2.1-.8 2.1-1.9 2.1Z" stroke="#2D3142" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.2 12h2.1" stroke="#5B8CFF" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="18.5" cy="7" r="2.1" fill="#F9C74F" stroke="#2D3142" strokeWidth="1.6" />
    </svg>
  );
}
