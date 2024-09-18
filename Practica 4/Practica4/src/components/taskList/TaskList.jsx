import { ListGroup, Button } from "react-bootstrap";

const TaskList = ({ tasks, onStatusTask, onDeleteTask }) => {

    const tasksMap = tasks.map((task, index) =>
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}
                </span>
            </div>
            <div>
                <Button onClick={() => onStatusTask(index)}>
                    {task.completed ? "Desmarcar" : "Completar"}
                </Button>

                <Button onClick={() => onDeleteTask(index)}>
                    Eliminar

                </Button>
            </div>
        </ListGroup.Item>
    )


    return (
        <ListGroup>
            {tasks.length === 0 ? (
                <p>No hay tareas</p>
            )
                : (
                    tasksMap)}
        </ListGroup>
    )
}

export default TaskList;



