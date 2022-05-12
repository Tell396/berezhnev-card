import { FaGithub, FaBlackTie } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { Flex, Text } from '@chakra-ui/react'

export default function Icons() {
    return (
        <Flex>
            <IconContext.Provider value={{ size: 25 }} >
                <Text mr={3} >
                    <a href="https://github.com/Tell396" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </Text>

                <Text mr={3}>
                    <a href="https://berezhnev.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <FaBlackTie />
                    </a>
                </Text>
            </IconContext.Provider>
        </Flex>
    )
}