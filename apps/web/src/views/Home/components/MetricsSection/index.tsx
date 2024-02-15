import { useTranslation } from '@pancakeswap/localization'
import { Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useQuery } from '@tanstack/react-query'
import { ASSET_CDN } from 'config/constants/endpoints'
import Image from 'next/legacy/image'
import { styled } from 'styled-components'
import { ChainTags } from './ChainTags'
import { MetricsCard } from './MetricsCard'

const ImageLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`
const BnbBallRocket = styled.div`
  position: absolute;
  left: -65px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    bottom: 151px;
    left: 20px;
  }
`
const EthBallRocket = styled.div`
  position: absolute;
  right: 0;
  top: 81px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    right: 0;
    bottom: -30px;
  }
`

const AptosBallRocket = styled.div`
  position: absolute;
  top: 0px;
  right: 98px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    top: 72px;
    right: 119px;
  }
`

const MainContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  aign-items: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 10rem;
  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
  }
`

const ColorHeader = styled.p`
  font-weight: 600;
  color: #58ffa4;

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 52px;
    margin-top: 5rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
    line-height: 62px;
    margin-top: 5rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    font-size: 60px;
    line-height: 82px;
    margin-top: 10rem;
  }
`

const WhiteHeader = styled.p`
  font-weight: 600;
  color: white;
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 52px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
    line-height: 62px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    font-size: 60px;
    line-height: 82px;
  }
`

const ThirdMainPara = styled.p`
  color: white;
  font-size: 20px;
  fontweight: 500;
  line-height: 35px;
  width: 60%;
  margin-top: 1rem;

  @media (max-width: 767px) {
    margin-bottom: -4rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: -2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
  }
`

const BoxContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8rem;
  gap: 30px;
`

const Box = styled.div`
  background: url('images/boxbg.png');
  background-size: cover;
  background-position: center;
  height: 291px;
  width: 427px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  z-index: 50;
  position: relative;
  background-color: #123922;

  transition: transform 0.7s ease; /* Add transition for smooth scaling */

  &:hover {
    transform: scale(1.1); /* Scale the button on hover */
  }
`
const ProfileBox = styled.div`
  height: 99px;
  width: 119px;
  background-color: #4cec95;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AbsoluteThirdLeftIcon = styled.div`
  position: absolute;
  z-index: 20;
  left: 0;

  @media (max-width: 767px) {
    top: -15%;
    width: 60%;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    top: -15%;
    width: 30%;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    top: -75%;
  }
`
const AbsoluteThirdRightMask = styled.div`
  position: absolute;
  z-index: 20;
  right: 0;

  @media (max-width: 767px) {
    top: -25%;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    top: -35%;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    top: -75%;
  }
`

const ResponsiveContainer = styled.div`
  @media (max-width: 767px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
  }
`

const Stats = () => {
  const { t } = useTranslation()
  const { data: tvl = 0 } = useQuery<number>({
    queryKey: ['tvl'],
    enabled: false,
  })
  const { data: txCount = 0 } = useQuery<number>({
    queryKey: ['totalTx30Days'],
    enabled: false,
  })
  const { data: addressCount = 0 } = useQuery<number>({
    queryKey: ['addressCount30Days'],
    enabled: false,
  })
  const { isMobile, isSm, isMd, isXxl } = useMatchBreakpoints()

  const NewUserCount = 112487
  const NewTradesCount = 488510
  const NewStakedCount = 1439131

  return (
    // <Flex justifyContent="center" alignItems="center" flexDirection="column" overflow="hidden">
    //   <Text textAlign="center" lineHeight="110%" fontWeight={600} mb="4px" fontSize={isMobile ? '20px' : '32px'}>
    //     {t('Shaping the Future of Decentralized Trading:')}
    //   </Text>
    //   <Text
    //     textAlign="center"
    //     lineHeight="110%"
    //     fontWeight={600}
    //     fontSize={isMobile ? '20px' : '32px'}
    //     mb={isMobile ? '32px' : '48px'}
    //   >
    //     {t('PancakeSwap’s Unstoppable Expansion')}
    //   </Text>
    //   <Flex
    //     justifyContent="center"
    //     alignItems="center"
    //     flexDirection={isMobile ? 'column' : 'row'}
    //     width={['100%', '100%', '100%', '800px']}
    //     style={{ gap: isMobile ? 32 : 50 }}
    //     mb={isMobile ? '32px' : '48px'}
    //     flexWrap="wrap"
    //   >
    // <MetricsCard
    //   width={isSm || isMd ? '100%' : 'auto'}
    //   title={t('Total Users:')}
    //   value={addressCount}
    //   description={t('in the last 30 days')}
    // />
    //     <MetricsCard title={t('Total Trades:')} value={txCount} description={t('in the last 30 days')} />
    //     <MetricsCard title={t('Total Value Locked:')} value={tvl} description={t('in the last 30 days')} prefix="$" />
    //   </Flex>
    //   <ChainTags />
    //   <ImageLayer>
    //     <BnbBallRocket>
    //       <Image
    //         src={`${ASSET_CDN}/web/landing/bnb-ball-rocket.png`}
    //         alt="bnbBallRocket"
    //         width={144}
    //         height={168}
    //         unoptimized
    //       />
    //     </BnbBallRocket>
    //     <EthBallRocket>
    //       <Image
    //         src={`${ASSET_CDN}/web/landing/eth-ball-rocket.png`}
    //         alt="ethBallRocket"
    //         width={isXxl ? 116 : 70}
    //         height={isXxl ? 230 : 140}
    //         unoptimized
    //       />
    //     </EthBallRocket>
    //     <AptosBallRocket>
    //       <Image
    //         src={`${ASSET_CDN}/web/landing/aptos-ball-rocket.png`}
    //         alt="aptosBallRocket"
    //         width={isXxl ? 84 : 53}
    //         height={isXxl ? 101 : 64}
    //         unoptimized
    //       />
    //     </AptosBallRocket>
    //   </ImageLayer>
    // </Flex>
    <>
      <MainContainer>
        <AbsoluteThirdLeftIcon>
          <img src="images/thirdlefticon.png" style={{ opacity: '0.6', mixBlendMode: 'luminosity' }} alt="img" />
        </AbsoluteThirdLeftIcon>
        <AbsoluteThirdRightMask>
          <img src="images/thirdrightmask.png" alt="img" />
        </AbsoluteThirdRightMask>
        <ResponsiveContainer>
          <ColorHeader>Supercharging DeFi</ColorHeader>
          <WhiteHeader>Unmatchable Trust From Users</WhiteHeader>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ThirdMainPara>
              DeFi users are loving every single feature of PowerSwap and the word is spreading fast.
            </ThirdMainPara>
          </div>
        </ResponsiveContainer>

        <BoxContainers>
          <Box>
            <ProfileBox>
              <img src="images/pp1.png" alt="img" />
            </ProfileBox>
            <MetricsCard
              width={isSm || isMd ? '100%' : 'auto'}
              title={t('Users')}
              // value={addressCount}
              value={NewUserCount}
              description={t('in the last 30 days')}
            />
          </Box>
          <Box>
            <ProfileBox>
              <img src="images/pp2.png" alt="img" />
            </ProfileBox>
            <MetricsCard
              title={t('Trades')}
              // value={txCount}
              value={NewTradesCount}
              description={t('in the last 30 days')}
            />
          </Box>
          <Box>
            <ProfileBox>
              <img src="images/pp3.png" alt="img" />
            </ProfileBox>
            <MetricsCard
              title={t('Staked')}
              //  value={tvl}
              value={NewStakedCount}
              description={t('in the last 30 days')}
              prefix="$"
            />
          </Box>
        </BoxContainers>
      </MainContainer>
    </>
  )
}

export default Stats
