import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
}

const ActivityForm: React.FC<IProps> = ({ setEditMode, activity: initialFormState }) => {

    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: '',
            }
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Title" />
                <Form.TextArea rows={2} placeholder="Description" />
                <Form.Input placeholder="Category" />
                <Form.Input type="date" placeholder="Date" />
                <Form.Input placeholder="City" />
                <Form.Input placeholder="Venue" />
                <Button floated="right" positive type="submit" content="Submit" />
                <Button
                    onClick={() => setEditMode(false)}
                    floated="right"
                    type="button"
                    content="Cancel"
                />
            </Form>
        </Segment>
    );
};

export default ActivityForm;
