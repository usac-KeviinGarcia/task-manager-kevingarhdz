import { Router } from "express";
import { getTasks, createTask, getTaskById, deleteTask, getTotalTasks, updateTaskByID } from "../controllers/tasks.controllers";

// Instanciamos el router
const router = Router()

router.get("/tasks", getTasks)

router.post("/tasks", createTask)

router.get("/tasks/count", getTotalTasks)

router.get("/tasks/:id", getTaskById)

router.delete("/tasks/:id", deleteTask)

router.put("/tasks/:id", updateTaskByID)

export default router