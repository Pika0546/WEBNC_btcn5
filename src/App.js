
import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import {QueryClient, QueryClientProvider } from 'react-query'

import Box from "@mui/material/Box"

import SignUpPage from './page/signup';
import AccountPage from './page/account';
import AboutPage from './page/about';
import HomePage from './page';
import Error from './component/Error';
import ResponsiveAppBar from './component/Navbar';

const queryClient = new QueryClient()


const App = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%"
			}}
		>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter >
					<ResponsiveAppBar></ResponsiveAppBar>
					<Box
						component="main"
						sx={{
							width: "100%",
							height: "100%",
							display: 'flex',
							justifyContent: "center",
							alignContent: "center",
							padding: "2rem",
						}}
					>
						<Routes>
							<Route exact path='/' element={<HomePage />}>

							</Route>
							<Route exact path='/signup' element={<SignUpPage />}>
							</Route>
							<Route exact path='/about' element={<AboutPage />}>
							</Route>
							<Route exact path='/account' element={<AccountPage></AccountPage>}>
							</Route>
							<Route path='*' element={<Error />}>

							</Route>
						</Routes>
					</Box>

				</BrowserRouter>
			</QueryClientProvider>

		</Box>
	)
}

export default App