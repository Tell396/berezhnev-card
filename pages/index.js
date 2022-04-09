import Head from 'next/head'

import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,

  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,

  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons'
import Icons from '../components/Icons'

export default function IndexPage() {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.700")
  const dividerColor = useColorModeValue("gray.300", "gray.800")
  const iconMode = useColorModeValue(<MoonIcon />, <SunIcon />)

  return (
    <div>
      <Head>
        <title>Berezhnev.</title>
        <meta name="description" content="Berezhnev." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <Flex height="100vh" alignItems="center" justifyContent="center" fontFamily='Poppins' >
        <Flex direction="column" p={15} rounded={20} background={formBackground}>

          <Tabs align='center' variant='solid-rounded' colorScheme="twitter">
            <TabList>
              <Tab _focus={{ boxShadow: "none" }}>Home</Tab>
              <Tab _focus={{ boxShadow: "none" }}>About</Tab>
              <Button ml={2} onClick={toggleColorMode} _focus={{ boxShadow: "none" }}>{iconMode}</Button>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex alignItems="center" justifyContent="center" m={22} mb={2}>
                  <Heading fontSize="2rem">Hey there, I am Berezhnev</Heading>
                  <image src="https://github.com/0xMrNight/0xMrNight/blob/main/assets/wave.gif?raw=true" width="28px" />
                </Flex>
                <Text fontSize="1.2rem">A <span color="#000">Front-End</span> developer</Text>

                <br />
                <Divider variant="dashed" background="gray.500" />
                <br />

                <Icons />
              </TabPanel>
              <TabPanel>


                <br />

                <h4> Hello! My name is Vladimir and I am FrontEnd Dev (Junior)</h4>

                - <b>Languages</b>: RussianNative, EnglishPreIntermediate
                <br />
                - <b>Hobby</b>: Astronomy, Physics, Chess
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>

    </div>
  )
}
