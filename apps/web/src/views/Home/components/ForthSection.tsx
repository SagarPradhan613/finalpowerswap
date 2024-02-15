import { useTranslation } from '@pancakeswap/localization'
import { Button, useMatchBreakpoints } from '@pancakeswap/uikit'
import styled, { keyframes } from 'styled-components'

const LeftWhiteHeader = styled.p`
  color: white;
  font-weight: 600;
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
  @media (min-width: 1500px) {
    white-space: nowrap;
  }
`

const LeftColHeader = styled.p`
  color: #58ffa4;
  font-weight: 600;
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

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;

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
    margin-top: 2rem;
  }
`
const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 8rem;
    margin-top: -5rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding-left: 4rem;
    padding-right: 4rem;
    margin-bottom: 8rem;
    margin-top: -5rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
    padding-left: 4rem;
  }
  @media (min-width: 1500px) {
    width: 50%;
    padding-left: 6rem;
  }
`
const MainRight = styled.div`
  display: flex;
  justify-content: center;
  align-itms: center;
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 6rem;
    padding-right: 6rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
  }
`
const ForthMainPara = styled.p`
  color: white;
  font-size: 20px;
  fontweight: 500;
  line-height: 35px;

  margin-top: 1rem;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 2rem;
`

const AbsoluteForthLeft = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
`

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`

const FloatImgContainer = styled.div`
  position: relative;
  z-index: 90;
  animation: ${floatAnimation} 3s ease-in-out infinite;
`
const ForthSection = () => {
  const { t } = useTranslation()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()

  return (
    <>
      <MainContainer>
        <AbsoluteForthLeft>
          <img src="images/forthleft.png" alt="img" />
        </AbsoluteForthLeft>
        <MainLeft>
          <LeftWhiteHeader>Decentralization & Security</LeftWhiteHeader>
          <LeftColHeader>At Its Best</LeftColHeader>
          <ForthMainPara>
            PowerSwap is unwavering in its commitment to build trust, ensuring transparency through state-of-the-art
            security measures to protect users`&apos;` funds.
          </ForthMainPara>

          <ButtonContainer>
            <a href="/swap" rel="noreferrer" target="_blank">
              <Button
                scale="md"
                style={{ borderRadius: isXs ? 12 : undefined, padding: '0 2rem', width: '184px' }}
                variant="primary"
              >
                {t('Explore')}
              </Button>
            </a>

            <a
              style={{ marginRight: '10px' }}
              rel="noreferrer"
              target="_blank"
              href="https://powerswap-2.gitbook.io/powerswap/"
            >
              <Button
                scale="md"
                style={{
                  borderRadius: isXs ? 12 : undefined,
                  background: 'white',
                  color: 'black',
                  padding: '0 2rem',
                  width: '184px',
                }}
              >
                {t('Learn More')}
              </Button>
            </a>
          </ButtonContainer>
        </MainLeft>
        <MainRight>
          <FloatImgContainer>
            <img src="images/forthright.png" alt="img" />
          </FloatImgContainer>
        </MainRight>
      </MainContainer>
    </>
  )
}

export default ForthSection
