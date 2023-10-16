import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import SearchField from './components/SearchField';
import ReusableButton from './components/ReusableButton';
import SearchResult from './components/SearchResult';

interface ISearchResult {
    id: string;
    title: string;
    url: string;
    description: string;
    category: 'VIDEOS' | 'PLAYLISTS' | 'BLOG_POSTS';
};

function App() {

    const [searchValue, setSearchValue] = useState<string>('');
    const [results, setResults] = useState<ISearchResult[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function callApi() {
        if (searchValue) {
            try {
                setIsLoading(true);
                const response: ISearchResult[] = await fetch(`http://localhost:3001/api/data?search=${searchValue}`).then(res => res.json());
                console.log(response);
                setResults(response);
            } finally {
                setIsLoading(false);
            }
        };
    };

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value);
    };

    return (
        <ChakraProvider>
            <div className="App">
                <header className="App-header">
                    <h1>Search UI Challenge</h1>
                    <form onSubmit={e => {
                        e.preventDefault();
                        callApi();
                    }}>
                        <SearchField value={searchValue}
                            onChange={handleInputChange} />
                        <ReusableButton text='Search' />
                    </form>
                </header>
                {isLoading ? (
                    <h2>Pending...</h2>
                ) : results?.length ? (
                    results.map(item => {
                        return <SearchResult key={item.id} res={item} />
                    })
                ) : <h2>No results</h2>}

            </div>
        </ChakraProvider>
    );
}

export default App;
