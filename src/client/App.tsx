import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Home from "./components/Home";
import SingleBlog from "./components/SingleBlog"; 
import EditBlog from "./components/EditBlog";
import CreateBlog from "./components/CreateBlog";

const App = (props: AppProps) => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/blog/create">Create Blog</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/blog/create" component={CreateBlog} /> 
					<Route path="/blog/:id/admin" component={EditBlog} /> 
					<Route path="/blog/:id" component={SingleBlog} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
};

interface AppProps {}

export default App;