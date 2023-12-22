import React from 'react';
import { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
    setSelectedCategory(null);
  }, [searchTerm]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row'}}}>
      <Box sx={{ height: { sx: 'auto', md:'90vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}, color: 'white'}}> 
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
          CopyRight 2023 Akshayaa
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight={900} color="white" mb={3}>
          {selectedCategory ? (<span>{`${selectedCategory}`} <span style={{ color: "#FC1503" }}>videos</span></span>) : (
            <>
              Search Results for{' '}
              {searchTerm && (
                <>
                  <span style={{ color: "#FC1503" }}>
                    {`"${searchTerm}"`}
                  </span>{' '}
                </>
              )}
              videos
            </>
          )}
        </Typography>

        <Box>
          <Box sx={{ mr: { sm: '100px' } }}/>
          {<Videos videos={videos} />}
        </Box>
      </Box>
    </Stack>
  );
};

export default SearchFeed;