import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={Stack}
                maxW={'7xl'}
                py={5}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'}>
                    <Text>&copy; 2023 ResumeEngine. Developed By</Text>
                    <Text as={'a'} href={'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'} target={'_blank'} color={'blue.600'}>Lesedi Mautsoa</Text>
                </Stack>


                <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' as={'a'} href={'https://github.com/Lesedi-M'} target='_blank' bg={'gray.300'}>
                        <FaGithub />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'} target='_blank' colorScheme={'#0a66c2;'}>
                        <FaLinkedin />
                    </IconButton>
                    {/* <IconButton isRound='true' as={'a'} href={'https://www.instagram.com/jigarsable_/'} target='_blank' colorScheme={'red'}>
                        <FaInstagram />
                    </IconButton> */}

                </Stack>

            </Container>
        </Box>
    )
}

export default Footer
