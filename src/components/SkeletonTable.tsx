import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonTable = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" height={45} />
            <Skeleton variant="rectangular" height={45} />
            <Skeleton variant="rectangular" height={45} />
            <Skeleton variant="rectangular" height={45} />
        </Stack>
    )
}

export default SkeletonTable