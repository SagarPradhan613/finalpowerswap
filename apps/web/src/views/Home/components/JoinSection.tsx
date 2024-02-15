import styled from 'styled-components'

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
    margin-top: 6rem;
  }
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
    top: -5%;
    width: 300px;
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
    line-height: 75px;
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
const SocialMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 6rem;
  flex-wrap: nowrap;

  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 1500px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`
const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 60px;

  @media (max-width: 767px) {
    gap: 30px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    gap: 40px;
  }

  @media (min-width: 1500px) {
    gap: 60px;
  }
`
const LogoContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
  }

  @media (min-width: 1500px) {
  }
`

const LogoBox = styled.div`
  position: relative;
  z-index: 90;
  transition: transform 0.3s ease; /* Add transition for smooth scaling */

  &:hover {
    transform: scale(1.1); /* Scale the button on hover */
  }
`
const JoinSection = () => {
  const TwitterLink = 'https://twitter.com/pancakeswap'
  const TelegramLink = 'https://t.me/pancakeswap'
  const DiscLink = 'https://discord.com/invite/pancakeswap'

  return (
    <>
      <MainContainer>
        <AbsoluteThirdLeftIcon>
          <img
            src="images/thirdlefticon.png"
            style={{ opacity: '0.6', mixBlendMode: 'luminosity', zIndex: '20', position: 'relative' }}
            alt="img"
          />
        </AbsoluteThirdLeftIcon>
        <AbsoluteThirdRightMask>
          <img src="images/thirdrightmask.png" alt="img" />
        </AbsoluteThirdRightMask>
        <ColorHeader>Become A Part Of</ColorHeader>
        <WhiteHeader>PowerSwap Community</WhiteHeader>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ThirdMainPara>
            Become a part of our fastest growing community, discover activities and stay up-to-date with latest events
            and developments.
          </ThirdMainPara>
        </div>
        <SocialMainContainer>
          <div>
            <img src="images/leftline.png" alt="img" />
          </div>
          <SocialContainer>
            <LogoBox>
              <img src="images/twitterlogo.png" style={{ width: '100%' }} alt="img" />
            </LogoBox>

            <LogoBox>
              <img src="images/telelogo.png" style={{ width: '100%' }} alt="img" />
            </LogoBox>
            <LogoBox>
              <img src="images/disclogo.png" style={{ width: '100%' }} alt="img" />
            </LogoBox>
          </SocialContainer>
          <div>
            <img src="images/rightline.png" alt="img" />
          </div>
        </SocialMainContainer>
      </MainContainer>
    </>
  )
}

export default JoinSection
