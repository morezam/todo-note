import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../query/queries/user';
import CreateNote from '../note/CreateNote';
import ShowNote from '../note/ShowNote';
import ShowNotes from '../note/ShowNotes';
import { Other, Parent, Sidebar } from './PanelStyles';
import SideList from './SideList';
import ShowTodos from '../todo/ShowTodos';

const Panel = props => {
	const userId = props?.location.state.userId;
	const { data } = useQuery(GET_USER, {
		variables: {
			id: userId,
		},
	});

	return (
		<Router>
			<Parent>
				<Sidebar>
					<SideList />
				</Sidebar>
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
