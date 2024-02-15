import styled from 'styled-components'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { createChart } from 'lightweight-charts'

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  background: transparent;
`

interface SecondSectionProps {}

const TopContainer = styled.div`
  width: 100%;
  background-color: #0a1a11;
  padding: 20px;
  z-index: 90;
  position: relative;
`

const MainSecContainer = styled.div`
  width: 100%;
  background-color: #102c1d;
  position: relative;
  z-index: 90;
  display: flex;
  padding: 20px;
  border-radius: 40px;

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
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const RightContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 1rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
  }
`
const ChartBg = styled.div`
  background-image: url(/images/chartbg.png);
  background-size: cover; /* This will make the image cover the entire element */
  background-repeat: no-repeat;
  width: 100%;
  height: 100;
`

const LeftChartContainer = styled.div`
  background-image: url('/images/chartbg.png');

  width: 100%;
  border-radius: 30px;
  padding: 30px 20px;

  @media (max-width: 767px) {
    height: 500px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 500px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    height: 100%;
  }
`

const RightTopContainer = styled.div`
  background-image: url('/images/chartbg.png');

  border-radius: 30px;
  padding: 30px 20px;

  @media (max-width: 767px) {
    width: 100%;
    height: 500px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 500px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 100%;
    height: 50%;
  }
`

const RightBottomContainer = styled.div`
  background-image: url('/images/chartbg.png');
  margin-top: 10px;
  border-radius: 30px;
  padding: 30px 20px;

  @media (max-width: 767px) {
    width: 100%;
    height: 500px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 500px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 100%;
    height: 50%;
  }
`

const MainLeftChartContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
  }
`
const TopRightContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 25px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    margin-top: 25px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
  }
`

const TopButtonContainer = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 767px) {
    margin-top: 10px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 10px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
  }
`
const LeftChartBox = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    height: 50%;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 70%;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    height: 400px;
  }
`

const SecondSection: React.FC<SecondSectionProps> = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const [chart, setChart] = useState<any>(null)
  const [areaSeries, setAreaSeries] = useState<any>(null)
  const [selectedRange, setSelectedRange] = useState<string>('24h') // Default selected range

  // Return cleanup function
  // @ts-ignore
  useEffect(() => {
    if (!chartContainerRef.current) return {}

    const areaChart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        background: { color: 'transparent' },
        textColor: 'white',
      },
      grid: {
        horzLines: {
          visible: false,
        },
        vertLines: {
          visible: false,
        },
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      crosshair: {
        horzLine: {
          visible: false,
        },
      },
    })

    setChart(areaChart)

    const areaS = areaChart.addAreaSeries() // Add area series initially
    setAreaSeries(areaS)

    // Return cleanup function
    // @ts-ignore
    return () => {
      // Clean up any resources here
      // @ts-ignore
      areaChart.removeSeries(areaS)
      areaChart.remove()
    }
  }, [])

  useEffect(() => {
    if (!chart || !areaSeries) return

    // Generate random data based on selected range
    const generateData = () => {
      const now = Date.now()
      const data = []
      switch (selectedRange) {
        case '24h':
          for (let i = 0; i < 24; i++) {
            data.push({ time: now - i * 60 * 60 * 1000, value: Math.random() * 100 })
          }
          break
        case '1w':
          for (let i = 0; i < 7; i++) {
            data.push({ time: now - i * 24 * 60 * 60 * 1000, value: Math.random() * 100 })
          }
          break
        case '1m':
          for (let i = 0; i < 30; i++) {
            data.push({ time: now - i * 24 * 60 * 60 * 1000, value: Math.random() * 100 })
          }
          break
        case '1y':
          for (let i = 0; i < 365; i++) {
            data.push({ time: now - i * 24 * 60 * 60 * 1000, value: Math.random() * 100 })
          }
          break
        default:
          break
      }
      return data.reverse() // Reverse the data to ensure it's in chronological order
    }

    const data = generateData()

    // Sort data by time
    data.sort((a, b) => a.time - b.time)

    // Clear existing series
    areaSeries.setData([])

    // Add area series
    areaSeries.setData(data)
  }, [chart, areaSeries, selectedRange])

  const handleRangeChange = (range: string) => {
    setSelectedRange(range)
  }

  // right top chart
  const alternateChartContainerRef = useRef<HTMLDivElement>(null)
  const [alternateChart, setAlternateChart] = useState<any>(null)
  const [alternateAreaSeries, setAlternateAreaSeries] = useState<any>(null)

  useEffect(() => {
    if (!alternateChartContainerRef.current) return {}

    const alternateAreaChart = createChart(alternateChartContainerRef.current, {
      width: alternateChartContainerRef.current.clientWidth,
      height: alternateChartContainerRef.current.clientHeight,
      layout: {
        background: { color: 'transparent' },
        textColor: 'white',
      },
      grid: {
        horzLines: {
          visible: false,
        },
        vertLines: {
          visible: false,
        },
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      crosshair: {
        horzLine: {
          visible: false,
        },
      },
    })

    setAlternateChart(alternateAreaChart)

    const alternateAreaS = alternateAreaChart.addAreaSeries() // Add area series initially
    setAlternateAreaSeries(alternateAreaS)

    // Return cleanup function
    return () => {
      // Clean up any resources here
      // @ts-ignore
      alternateAreaChart.removeSeries(alternateAreaS)
      alternateAreaChart.remove()
    }
  }, [])

  useEffect(() => {
    if (!alternateChart || !alternateAreaSeries) return

    // Generate random data
    const generateAlternateData = () => {
      const now = Date.now()
      const data = []
      for (let i = 0; i < 24; i++) {
        data.push({ time: now - i * 60 * 60 * 1000, value: Math.random() * 100 })
      }
      return data.reverse() // Reverse the data to ensure it's in chronological order
    }

    const alternateData = generateAlternateData()

    // Sort data by time
    alternateData.sort((a, b) => a.time - b.time)

    // Clear existing series
    alternateAreaSeries.setData([])

    // Add area series
    alternateAreaSeries.setData(alternateData)
  }, [alternateChart, alternateAreaSeries])

  // bar chart

  const barChartContainerRef = useRef<HTMLDivElement>(null)
  const [barChart, setBarChart] = useState<any>(null)
  const [barSeries, setBarSeries] = useState<any>(null)

  useEffect(() => {
    if (!barChartContainerRef.current) return {}

    const barAreaChart = createChart(barChartContainerRef.current, {
      width: barChartContainerRef.current.clientWidth,
      height: barChartContainerRef.current.clientHeight,
      layout: {
        background: { color: 'transparent' },
        textColor: 'white',
      },
      grid: {
        horzLines: {
          visible: false,
        },
        vertLines: {
          visible: false,
        },
      },
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      crosshair: {
        horzLine: {
          visible: false,
        },
      },
    })

    setBarChart(barAreaChart)

    const barS = barAreaChart.addHistogramSeries({
      color: 'rgba(88, 255, 164, 0.7)',
      base: 0,
      priceFormat: { type: 'volume' },
    }) // Add bar series initially
    setBarSeries(barS)

    // Return cleanup function
    return () => {
      // Clean up any resources here
      // @ts-ignore
      barAreaChart.removeSeries(barS)
      barAreaChart.remove()
    }
  }, [])

  useEffect(() => {
    if (!barChart || !barSeries) return

    // Generate random data
    const generateBarData = () => {
      const now = Date.now()
      const data = []
      for (let i = 0; i < 48; i++) {
        // Generate data for 48 hours
        data.push({ time: now - i * 30 * 60 * 1000, value: Math.random() * 100 }) // 30 minutes interval
      }
      return data.reverse() // Reverse the data to ensure it's in chronological order
    }

    const barData = generateBarData()

    // Sort data by time
    barData.sort((a, b) => a.time - b.time)

    // Clear existing series
    barSeries.setData([])

    // Add bar series
    barSeries.setData(barData)
  }, [barChart, barSeries])
  const [active, setActive] = useState(1)

  return (
    <TopContainer>
      <MainSecContainer>
        <LeftContainer>
          <LeftChartContainer>
            <MainLeftChartContainer>
              <div>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <img src="images/coin1.png" alt="coin" />
                    <img style={{ position: 'absolute', left: '40px' }} src="images/coin2.png" alt="coin" />
                  </div>
                  <div style={{ marginLeft: '50px' }}>
                    <div>
                      <p style={{ fontWeight: '600', fontSize: '22px', color: 'white' }}>POWER / MTRG</p>
                    </div>
                    <div
                      style={{
                        marginTop: '10px',
                        fontWeight: '500',
                        fontSize: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <p style={{ color: 'white' }}>$0.00079</p>
                      <p style={{ color: '#58FFA4', marginLeft: '20px' }}>+8.39%</p>
                    </div>
                  </div>
                  <div />
                </div>
                <div style={{ marginTop: '20px', marginLeft: '10px' }}>
                  <p style={{ color: 'white', fontWeight: '500', fontSize: '17px' }}>Dec-20-2023 , 9:12 AM</p>
                </div>
              </div>
              <TopRightContainer>
                <div style={{ display: 'flex', color: 'white', fontWeight: '600', fontSize: '17px' }}>
                  <p>Market Cap:</p>
                  <p style={{ marginLeft: '10px' }}>$25437680000</p>
                </div>
                <TopButtonContainer>
                  <button
                    type="button"
                    style={{
                      padding: '10px 20px',
                      fontWeight: '600',
                      fontSize: '16px',
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#58FFA4',
                      opacity: `${active === 1 ? '1' : '0.5'}`,
                    }}
                    onClick={() => {
                      handleRangeChange('24h')
                      setActive(1)
                    }}
                  >
                    24h
                  </button>
                  <button
                    type="button"
                    style={{
                      padding: '10px 20px',
                      fontWeight: '600',
                      fontSize: '16px',
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#58FFA4',
                      opacity: `${active === 2 ? '1' : '0.5'}`,
                    }}
                    onClick={() => {
                      handleRangeChange('1w')
                      setActive(2)
                    }}
                  >
                    1w
                  </button>
                  <button
                    type="button"
                    style={{
                      padding: '10px 20px',
                      fontWeight: '600',
                      fontSize: '16px',
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#58FFA4',
                      opacity: `${active === 3 ? '1' : '0.5'}`,
                    }}
                    onClick={() => {
                      handleRangeChange('1m')
                      setActive(3)
                    }}
                  >
                    1m
                  </button>
                  <button
                    type="button"
                    style={{
                      padding: '10px 20px',
                      fontWeight: '600',
                      fontSize: '16px',
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#58FFA4',
                      opacity: `${active === 4 ? '1' : '0.5'}`,
                    }}
                    onClick={() => {
                      handleRangeChange('1y')
                      setActive(4)
                    }}
                  >
                    1y
                  </button>
                </TopButtonContainer>
              </TopRightContainer>
            </MainLeftChartContainer>
            {/* Set background color of chart container to transparent */}
            <LeftChartBox>
              <ChartBg ref={chartContainerRef} style={{ width: '100%', height: '100%', background: 'transparent' }} />
            </LeftChartBox>
          </LeftChartContainer>
        </LeftContainer>
        <RightContainer>
          {/* Add any additional content for the right container if needed */}
          <RightTopContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: '600', fontSize: '25px', color: '#58FFA4' }}>TVL</div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '35px', color: 'white', marginTop: '10px' }}>303.12M</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '16px', color: 'white', marginTop: '10px' }}>
                    Dec 30, 2023 (UTC)
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/Arrowup.png" alt="arrow" />
                <p style={{ fontWeight: '500', fontSize: '25px', color: '#58FFA4', marginLeft: '10px' }}>106%</p>
              </div>
            </div>
            <ChartBg
              ref={alternateChartContainerRef}
              style={{ width: '100%', height: '70%', background: 'transparent' }}
            />
          </RightTopContainer>
          <RightBottomContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: '600', fontSize: '25px', color: '#58FFA4' }}>Volume</div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '35px', color: 'white', marginTop: '10px' }}>42.95M</p>
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '16px', color: 'white', marginTop: '10px' }}>
                    Dec 30, 2023 (UTC)
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/Arrowup.png" alt="arrow" />
                <p style={{ fontWeight: '500', fontSize: '25px', color: '#58FFA4', marginLeft: '10px' }}>106%</p>
              </div>
            </div>
            <ChartBg ref={barChartContainerRef} style={{ width: '100%', height: '70%', background: 'transparent' }} />
          </RightBottomContainer>
        </RightContainer>
      </MainSecContainer>
    </TopContainer>
  )
}

export default SecondSection
