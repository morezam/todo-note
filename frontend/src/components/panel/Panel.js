import React, { useContext, useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
	Link,
} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import AuthContext from '../../context/auth-context';
import { GET_USER } from '../../query/queries/user';
import CreateNote from '../note/CreateNote';
import ShowNote from '../note/ShowNote';
import ShowNotes from '../note/ShowNotes';
import { Other, Parent, Sidebar, BarsWrapper } from './PanelStyles';
import SideList from './SideList';
import ShowTodos from '../todo/ShowTodos';
import { FaBars, FaPlus } from 'react-icons/fa';
import PanelNav from './PanelNav';
import { NoteCreate } from '../note/NoteStyles';
import LogOut from '../user/LogOut';

const Panel = props => {
	const userId = props?.location.state.userId;
	const authCtx = useContext(AuthContext);
	const history = useHistory();
	const [open, setOpen] = useState(false);

	const { data } = useQuery(GET_USER, {
		variables: {
			id: userId,
		},
	});

	if (!authCtx.isAuthenticated) {
		history.replace('/login');
	}

	return (
		<Router>
			<Parent>
				<Sidebar>
					<SideList />
				</Sidebar>
				<PanelNav />
				<Other>
					<Switch>
						<Route exact path="/panel">
							<ShowNotes notes={data?.user.notes} />
						</Route>
						<Route path="/panel/create">
							<CreateNote userId={userId} />
						</Route>
						<Route
							path="/panel/note/:id"
							render={props => <ShowNote {...props} />}
						/>
						<Route path="/panel/todos">
							<ShowTodos />
						</Route>
					</Switch>
				</Other>
			</Parent>
		</Router>
	);
};

export default Panel;
