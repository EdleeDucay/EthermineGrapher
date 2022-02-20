import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';

export default function Page404() {
  return (
      <Container>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' , mt: 10}}>
              <Typography variant="h1" paragraph>
                404
              </Typography>
              <Typography variant="h3" paragraph>
                Sorry, page not found!
              </Typography>
              
            <Typography>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>

            <Button to="/" size="large" variant="contained" component={RouterLink} sx={{mt: 3}}>
              Go to Home
            </Button>
          </Box>
      </Container>
  );
}
