import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
    openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
    return (
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    {/* //! Buttons are causing the depracated error (needs ref ???) */}
                    <Button
                        onClick={openCreateForm}
                        color="blue"
                        content="Create Activity"
                    />
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default NavBar;
