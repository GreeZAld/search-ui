import React from 'react';
import { Input } from '@chakra-ui/react'

interface ISearchFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<ISearchFieldProps> = ({ value, onChange }) => {

    return (
        <Input placeholder='Search field' variant='outline' w='300' value={value}
            onChange={onChange} />
    );
}

export default SearchField;
