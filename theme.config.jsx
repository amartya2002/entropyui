import { useRouter } from "next/router";
import Logo from "components/icons/Logo";

export default {
  logo: <Logo />,

  project: {
    link: "https://amartya2002.github.io/entropyui/",
  },

  // navbar: {
  //   extraContent: (
  //     <p>hello</p>
  //   ),
  // },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Entropy" />
      <meta property="og:description" content="Tailwind Component Library." />
    </>
  ),

  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Entropy UI",
      };
    } else {
      return {
        titleTemplate: "Entropy UI - Component Library",
      };
    }
  },

  darkMode: true,

  sidebar: {
    toggleButton: true,
  },

  footer: {
    // text: <span>MIT {new Date().getFullYear()} © Entropy UI</span>,
    component: null,
  },

  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  toc: {
    component: null,
  },

  gitTimestamp: null,
};
