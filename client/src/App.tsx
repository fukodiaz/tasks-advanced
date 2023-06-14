import { FC } from 'react';

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AppLayout from './components/layout/AppLayout'
import AuthLayout from './components/layout/AuthLayout'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App:FC = () => {
	const theme = createTheme({
		palette: { mode: 'light' }
	})

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Routes>
					<Route path='/' element={<AuthLayout />}>
						<Route path='login' element={<Login />} />
						<Route path='signup' element={<Signup />} />
					</Route>
					<Route path='/' element={<AppLayout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App