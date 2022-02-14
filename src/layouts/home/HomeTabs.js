import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

export default function HomeTabs() {
    const [value, setValue] = React.useState(0) 

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Dashboard"/>
                <Tab label="Payouts"/>
                <Tab label="Ethermine"/>
            </Tabs>
        </Box>
    )
}
