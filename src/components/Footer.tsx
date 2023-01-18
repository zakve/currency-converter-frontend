import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => (
    <footer aria-label="footer">
        <Container
            maxWidth={false}
            sx={{
                bgcolor: 'primary.main',
                textAlign: 'center',
                padding: '1rem'
            }}
        >
            <Typography
                sx={{
                    color: '#ffffff'
                }}
            >
                Martin Zaklasnik 2023
            </Typography>
        </Container>
    </footer>
);

export default Footer;