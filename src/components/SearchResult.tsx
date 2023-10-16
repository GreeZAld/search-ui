import React from 'react';
import { Box, Heading, LinkBox, Text, LinkOverlay } from '@chakra-ui/react';

interface ISearchResultProps {
    res: {
        id: string;
        title: string;
        url: string;
        description: string;
        category: 'VIDEOS' | 'PLAYLISTS' | 'BLOG_POSTS';
    }
}

const SearchResult: React.FC<ISearchResultProps> = (props: ISearchResultProps) => {
    const { res } = props;

    return (
        <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
            <Box>
                #{res.category}
            </Box>
            <Heading size='md' my='2'>
                <LinkOverlay href={res.url}>
                    {res.title}
                </LinkOverlay>
            </Heading>
            <Text>
                {res.description}
            </Text>
        </LinkBox>
    );
}

export default SearchResult;
