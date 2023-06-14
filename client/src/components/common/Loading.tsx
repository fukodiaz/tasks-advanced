import { FC } from 'react'
import { Box, CircularProgress } from '@mui/material'

interface LoadingProps {
	fullHeight: boolean;
}

const Loading: FC<LoadingProps> = (props) => {

	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			height: props.fullHeight ? '100vh' : '100%'
		}}>
			<CircularProgress />
		</Box>
	)
}

export default Loading