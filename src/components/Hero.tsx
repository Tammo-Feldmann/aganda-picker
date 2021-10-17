import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="flex-start"
    height="100vh"
    marginTop="4vh"
    bgGradient="linear(to-l, #F69155, #029F9E)"
    bgClip="text"
  >
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'agenda picker',
}
