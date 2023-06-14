import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout: FC = () => {

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default AppLayout