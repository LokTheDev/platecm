import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
    return (
        <Box component="section" sx={{ p: 5, textAlign: 'center', bgcolor: '#eaecf0' }}>
            <Typography variant="h1">
                Nothing Here Yet... (404)
            </Typography>
            <Typography variant="h6">
                Contact me for suggestion...
            </Typography>
        </Box>
    )
}

export default NotFoundPage;