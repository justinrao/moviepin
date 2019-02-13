import React, { useState, useEffect } from 'react';
import { Heading, Box, Text } from 'gestalt';
import { UserMovieApi } from '../../../services/userMovieApi';
import { UserMovie } from '../../../models/userMovie';


export const BoardPage = () => {

    const [userMovieList, setUserMovieList] = useState<UserMovie[]>([]);
    
    const loadUserMovieList = async () => {
        const userMovieList = await UserMovieApi.getUserMovieList();
        setUserMovieList(userMovieList);
    }

    useEffect(() => { 
        loadUserMovieList() 
    }, []);

    return (
        <Box color="white" paddingX={6} >
            <Heading size="sm">My Board</Heading>
            {userMovieList.map(item => (
                <Box key={item.movieId}>
                    <Text>{item.movieId}</Text>
                    <Text>{item.rating}</Text>
                </Box>
            ))}
        </Box>
    )
}