export interface Element {
  
}
export interface Site extends Element {
  header: Header;
  footer: Footer;
  pages: JSX.Element[];
  currentPage: JSX.Element;

}

export interface Page extends Element {
  sections: Section[];
}

export interface Header extends Element {
  logo: Logo;
  navigationItems: NavigationItem[];
  authenticationProperties: AuthenticationProperties;
}

export interface Logo extends Element {
  url: string;
  name: string;
}

export interface NavigationMenu extends Element {
  navigationItems: NavigationItem[];
}

export interface NavigationItem extends Element {
  index: number;
  name: string;
  url: string;
  children: NavigationItem[];
}

export interface AuthenticationProperties extends Element {
  username: string;
}

export interface Section extends Element {

}

export interface Footer extends Element {
  copyright: Copyright;
  navigationItems: NavigationItem[];
  social: Social;
}

export interface Copyright extends Element {
  year: number;
  name: string;
}

export interface Social extends Element {

}