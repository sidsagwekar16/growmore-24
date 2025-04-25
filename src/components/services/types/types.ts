export interface SocialIconProps {
  src: string;
  alt: string;
}

export interface ContactInfoProps {
  icon: string;
  label: string;
  value: string;
}

export interface PartnerLogoProps {
  src: string;
  alt: string;
}

export interface ContentSectionProps {
  title: string;
  heading: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  isReversed?: boolean;
}

export interface QuickLinkProps {
  label: string;
  href: string;
}
