import { Box, Typography, Rating } from "@mui/material";

type TCMHero = {
    Rate: number;
    ID: string | undefined;
}

const CMHero: React.FC<TCMHero> = (Props) => {

    return(
    <Box component="section" sx={{ p: 5, textAlign: 'center', bgcolor: '#eaecf0' }}>
        <Typography variant="subtitle2">
            You're looking at
        </Typography>
        <Typography variant="h4">
            {Props.ID}
        </Typography>
        <Rating name="size-medium" value={Props.Rate} readOnly />
    </Box>
    );
}

export default CMHero;