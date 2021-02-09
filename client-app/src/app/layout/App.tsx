import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        axios
            .get<IActivity[]>("http://localhost:5000/api/activities")
            .then((response) => {
                setActivities(response.data);
            });
    }, []);

    return (
        <Fragment>
            <NavBar />
            <Container style={{marginTop: '7em'}}>
                <ActivityDashboard activities={activities} />
            </Container>
        </Fragment>
    );
};

export default App;

//! EXAMPLE 1: Class component calling the "value" api
// import React, { Component } from "react";
// import axios from "axios";
// import { Header, Icon, List } from "semantic-ui-react";

// class App extends Component {

//     state = {
//         values: [],
//     };

//     componentDidMount() {
//         axios.get("http://localhost:5000/api/values").then((response) => {
//             this.setState({
//                 values: response.data,
//             });
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Header as="h2">
//                     <Icon name="users" />
//                     <Header.Content>Reactivities</Header.Content>
//                 </Header>
//                 <List>
//                     {this.state.values.map((value: any) => (
//                         <List.Item key={value.id}>{value.name}</List.Item>
//                     ))}
//                 </List>
//             </div>
//         );
//     }
// }

// export default App;

//! EXAMPLE 2: Class component calling the "value" api
// import React, { Component } from "react";
// import axios from "axios";
// import { Header, Icon, List } from "semantic-ui-react";
// import { IActivity } from "../models/activity";

// interface IState {
//     activities: IActivity[];
// }

// class App extends Component<{}, IState> {

//     readonly state: IState = {
//         activities: [],
//     };

//     componentDidMount() {
//         axios.get<IActivity[]>("http://localhost:5000/api/activities").then((response) => {
//             this.setState({
//                 activities: response.data,
//             });
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Header as="h2">
//                     <Icon name="users" />
//                     <Header.Content>Reactivities</Header.Content>
//                 </Header>
//                 <List>
//                     {this.state.activities.map((activity) => (
//                         <List.Item key={activity.id}>{activity.title}</List.Item>
//                     ))}
//                 </List>
//             </div>
//         );
//     }
// }

// export default App;
