import Container from '@mui/material/Container';

import ConvertBox from '../containers/ConvertBox';
import ExchangeRates from '../containers/ExchangeRates';

const ConvertPage = () => {
    return (
        <Container maxWidth="lg">
            <ConvertBox />
            <ExchangeRates />
        </Container>
    )
}

export default ConvertPage