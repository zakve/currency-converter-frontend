import Box from "@mui/material/Box"

const NotFoundPage = () => {
    return (
        <Box sx={style.box}>
            <h1>Oops!</h1>
            <p>Sorry, this page does not exist.</p>
        </Box>
    )
}

const style = {
    box: {
        margin: '100px',
        textAlign: 'center'
    }
}

export default NotFoundPage