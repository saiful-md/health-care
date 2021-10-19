import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Components/Contexts/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/LogIn/Login/Login';
import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import Read from './Components/ReadMore/Read/Read';

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<PrivateRoute path="/read/:readId">
							<Read />
						</PrivateRoute>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
