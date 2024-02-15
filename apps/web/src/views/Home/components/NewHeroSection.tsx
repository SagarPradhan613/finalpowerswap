import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'
import styled from 'styled-components'
import { useAccount } from 'wagmi'

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #07130c;
  position: relative;
  padding-top: 10rem;

  /* mobile devices */
  @media (max-width: 767px) {
    flex-direction: column;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const LeftContainer = styled.div`
  /* mobile devices */
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 4rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 4rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
    padding-top: 8rem;
    padding-left: 5rem;
    padding-bottom: 4rem;
  }
`

const RightContainer = styled.div`
  display: flex;

  /* mobile devices */
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 4rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 4rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
    padding-right: 2rem;
    justify-content: center;
    align-items: center;
  }
`

const HeadingWhite = styled.p`
  color: white;
  /* mobile devices */
  @media (max-width: 767px) {
    font-weight: 600;
    font-size: 60px;
    line-height: 60px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-weight: 600;
    font-size: 60px;
    line-height: 60px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    font-weight: 600;
    font-size: 90px;
    line-height: 90px;
  }
`
const HeadingWhite2 = styled.p`
  color: white;
  /* mobile devices */
  @media (max-width: 767px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    font-weight: 600;
    font-size: 60px;
    line-height: 70px;
  }

  @media (min-width: 1500px) {
    font-weight: 600;
    font-size: 60px;
    line-height: 70px;
    white-space: nowrap;
  }
`

const HeadingPrimary = styled.p`
  color: #58ffa4;
  /* mobile devices */
  @media (max-width: 767px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    font-weight: 600;
    font-size: 60px;
    line-height: 70px;
    text-align: justify;
  }
`

const HeroLeftPara = styled.p`
  color: white;

  @media (max-width: 767px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    margin-top: 2rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    margin-top: 2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    margin-top: 2rem;
  }
`

const AbsoluteBottomRight = styled.div`
  position: absolute;
  right: 0;
  z-index: 0;

  @media (max-width: 767px) {
    top: 70%;
    width: 60%;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 30%;
    width: 50%;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    top: 10%;
  }
`
const NewHeroSection = () => {
  const { t } = useTranslation()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()
  const { address: account } = useAccount()

  return (
    <>
      <MainContainer>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%' }}>
          <img src="images/firstleftmask.png" alt="img" />
        </div>
        <div style={{ position: 'absolute', right: '0', width: '100%' }}>
          <img src="images/firstbottomright.png" style={{ width: '100%' }} alt="img" />
        </div>
        <LeftContainer>
          <HeadingWhite>Unlock</HeadingWhite>
          <HeadingWhite2>Limitless Possibilities Of</HeadingWhite2>
          <HeadingPrimary>Decentralized Finance</HeadingPrimary>
          <HeroLeftPara>
            Unlock limitless possibilities and redefine your financial journey with the leading decentralized exchange
            (DEX) on the Meter chain. Empower yourself with seamless transactions, unparalleled security, and the
            freedom to explore a world of financial opportunities.
          </HeroLeftPara>
        </LeftContainer>
        <RightContainer>
          <Flex
            style={{ position: 'relative', zIndex: '60', marginTop: '4rem' }}
            justifyContent={isMobile || isMd ? 'start' : 'start'}
          >
            {/* {!account && <ConnectWalletButton style={{ borderRadius: isXs ? 12 : undefined }} scale="md" mr="8px" />} */}
            <a
              style={{ marginRight: '10px' }}
              rel="noreferrer"
              target="_blank"
              href="https://powerswap-2.gitbook.io/powerswap/"
            >
              <Button
                scale="md"
                style={{ borderRadius: isXs ? 12 : undefined, background: 'white', color: 'black', padding: '0 2rem' }}
              >
                {t('Learn More')}
              </Button>
            </a>
            <NextLinkFromReactRouter to="/swap">
              <Button
                scale="md"
                style={{ borderRadius: isXs ? 12 : undefined, padding: '0 2rem' }}
                variant={!account ? 'primary' : 'primary'}
              >
                {t('Trade Now')}
              </Button>
            </NextLinkFromReactRouter>
          </Flex>
          <AbsoluteBottomRight>
            <img src="images/heroright.png" style={{ opacity: '0.8', mixBlendMode: 'luminosity' }} alt="img" />
          </AbsoluteBottomRight>
        </RightContainer>
      </MainContainer>
    </>
  )
}

export default NewHeroSection
