import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewTask = ({onAddTask}) => {
    const [newTask, setNewTask] = useState("");

    const handleNewTaskChange = (e) => {
        setNewTask(e.target.value);
    }
    
    const handleSubmitTask = (e) => {
        e.preventDefault();
        onAddTask(newTask);
        setNewTask(""); 
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmitTask}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Ingresar tarea"
                                    onChange={handleNewTaskChange}
                                    value={newTask}
                                />
                                <Button
                                type="submit"
                                
                                
                                >
                                    Agregar
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}    

export default NewTask;