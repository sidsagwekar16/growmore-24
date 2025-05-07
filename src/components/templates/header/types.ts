export interface SocialIconProps {
  src: string;
  alt: string;
  href?: string;

}

export interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface NavigationItemProps {
  label: string;
  hasDropdown?: boolean;
  path: string;
}

export interface IconTextBlockProps {
  iconSrc: string;
  title: string;
  alt: string;
}

export interface IntroductionProps {
  introImage: string;
  introImageAlt: string;
}
