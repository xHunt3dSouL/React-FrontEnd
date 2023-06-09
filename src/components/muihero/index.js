import { Box, Typography, Button } from "@mui/material";

function MuiHero() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={4}
      mb={4}
    >
      <Typography variant="h2" gutterBottom>
        Album Layout
      </Typography>
      <Box width={"50%"}>
        <Typography variant="h4" component="p" textAlign={"center"}>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
      </Box>
      <Box display="flex" gap={2} mt={4}>
        <Button variant="contained" size="large">
          Main Call to Action
        </Button>
        <Button variant="outlined" size="large" color="secondary">
          Secondary Action
        </Button>
      </Box>
    </Box>
  );
}

export default MuiHero;
