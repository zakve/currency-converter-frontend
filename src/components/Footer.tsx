import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => (
    <footer aria-label="footer">
        <Container
            maxWidth={false}
            sx={style.container}
        >
            <Typography
                sx={style.footerText}
            >
                Martin Zaklasnik 2023
            </Typography>
        </Container>
    </footer>
);

const style = {
    container: {
        bgcolor: 'primary.main',
        textAlign: 'center',
        padding: '1rem'
    },
    footerText: {
        color: '#ffffff'
    }
}

export default Footer;