import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
        null
    );
    const [editMode, setEditMode] = useState(false);

    const handleSelectActivity = (id: string) => {
        // Once filtered, we know the [0] index of the array will be our activity (only item in [])
        setSelectedActivity(activities.filter((a) => a.id === id)[0]);
        setEditMode(false);
    };

    const handleOpenCreateForm = () => {
        setSelectedActivity(null);
        setEditMode(true);
    };

    const handleCreateActivity = (activity: IActivity) => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
    };

    const handleEditActivity = (activity: IActivity) => {
        setActivities([
            ...activities.filter((a) => a.id !== activity.id),
            activity,
        ]);
        setSelectedActivity(activity);
        setEditMode(false);
    };

    const handleDeleteActivity = (id: string) => {
        setActivities([...activities.filter((a) => a.id !== id)]);
    };

    useEffect(() => {
        // axios
        //     .get<IActivity[]>("http://localhost:5000/api/activities")
        //     .then((response) => {
        //         setActivities(response.data);
        //     });
        //* This would be just passing in the response.date to hook, but parsing date here
        axios
            .get<IActivity[]>("http://localhost:5000/api/activities")
            .then((response) => {
                let activitiesArray: IActivity[] = [];
                response.data.forEach((activity) => {
                    activity.date = activity.date.split(".")[0];
                    activitiesArray.push(activity);
                });
                setActivities(activitiesArray);
            });
    }, []);

    return (
        <Fragment>
            <NavBar openCreateForm={handleOpenCreateForm} />
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashboard
                    activities={activities}
                    selectActivity={handleSelectActivity}
                    //! The "!" after the variable is overriding the type safefty (Okay to be IActivity | null as defined in the hook above (See IProps in child also))
                    selectedActivity={selectedActivity!}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    setSelectedActivity={setSelectedActivity}
                    createActivity={handleCreateActivity}
                    editActivity={handleEditActivity}
                    deleteActivity={handleDeleteActivity}
                />
            </Container>
        </Fragment>
    );
};

export default App;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
