import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PowerSwap',
  defaultTitle: 'Game | PowerSwap',
  description: 'Play different games on PowerSwap, using CAKE and PowerSwap NFTs',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: "PowerSwap - Everyone's Favorite DEX",
    description:
      'Powerswap is a leading DEX on the meter chain. Swap your favorite tokens, stake and earn at the highest yet most sustainable APY on meter.',
    // images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
    images: [{ url: '/images/newtwitterbanner.png' }],
  },
}
