import React from 'react';
import { Button } from '@chakra-ui/react';

interface IReusableButtonProps {
    text: string;
}

const ReusableButton: React.FC<IReusableButtonProps> = ({ text }) => {

    return (
        <Button colorScheme='teal' size='lg' type='submit'>
            {text}
        </Button>
    );
}

export default ReusableButton;
