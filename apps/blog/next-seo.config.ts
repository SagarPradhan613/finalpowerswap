import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PowerSwap',
  defaultTitle: 'Blog | PowerSwap',
  description:
    'Powerswap is a leading DEX on the meter chain. Swap your favorite tokens, stake and earn at the highest yet most sustainable APY on meter.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PowerSwap',
    site: '@PowerSwap',
  },
  openGraph: {
    title: "PowerSwap - Everyone's Favorite DEX",
    description:
      'Powerswap is a leading DEX on the meter chain. Swap your favorite tokens, stake and earn at the highest yet most sustainable APY on meter.',
    // images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
    images: [{ url: '/images/newtwitterbanner.png' }],
  },
}
