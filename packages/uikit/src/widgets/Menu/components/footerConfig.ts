import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("LISTING"),
    items: [
      {
        label: t("Explorer"),
        // href: "/swap",
      },
      {
        label: t("DappRadar"),
        // href: "/farms",
      },
      {
        label: t("CoinGecko"),
        // href: "https://pancakeswap.games/",
      },
      {
        label: t("CoinMarketCap"),
        // href: "/nfts",
      },
      {
        label: t("Gecko Terminal"),
        // href: "https://powerswap-2.gitbook.io/powerswap/",
      },
      // {
      //   label: t("Litepaper"),
      //   href: "https://assets.pancakeswap.finance/litepaper/v2litepaper.pdf",
      // },
      // {
      //   label: t("CAKE Emission Projection"),
      //   href: "https://analytics.pancakeswap.finance/",
      // },
      // {
      //   label: t("Merchandise"),
      //   href: "https://merch.pancakeswap.finance/",
      // },
    ],
  },
  {
    label: "MORE",
    items: [
      {
        label: t("Github"),
        // href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/syrup-pools-and-farms",
      },
      {
        label: t("Audit"),
        // href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/initial-farm-offerings-ifos",
      },
      {
        label: t("Docs"),
        // href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/nft-market-applications",
      },
      {
        label: t("Blog"),
        // href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/nft-market-applications",
      },
      {
        label: t("Partnership"),
        // href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/nft-market-applications",
      },
    ],
  },
  {
    label: t("ANALYTICS"),
    items: [
      {
        label: t("Overview"),
        // href: "https://docs.pancakeswap.finance/developers/contributing",
      },
      // {
      //   label: t("Github"),
      //   href: "https://github.com/pancakeswap",
      // },
      // {
      //   label: t("Bug Bounty"),
      //   href: "https://docs.pancakeswap.finance/developers/bug-bounty",
      // },
    ],
  },
  // {
  //   label: t("Support"),
  //   items: [
  //     {
  //       label: t("Contact"),
  //       href: "https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: t("Troubleshooting"),
  //       href: "https://docs.pancakeswap.finance/readme/help/troubleshooting",
  //     },
  //     {
  //       label: t("Documentation"),
  //       href: "https://docs.pancakeswap.finance/",
  //     },
  //   ],
  // },
  // {
  //   label: t("About"),
  //   items: [
  //     {
  //       label: t("Terms Of Service"),
  //       href: "https://pancakeswap.finance/terms-of-service",
  //     },
  //     {
  //       label: t("Blog"),
  //       href: "https://blog.pancakeswap.finance/",
  //     },
  //     {
  //       label: t("Brand Assets"),
  //       href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/brand",
  //     },
  //     {
  //       label: t("Careers"),
  //       href: "https://docs.pancakeswap.finance/team/become-a-chef",
  //     },
  //   ],
  // },
];
