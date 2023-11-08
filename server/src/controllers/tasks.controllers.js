import { getConnection, sql, querys } from "../database"

export const getTasks = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(querys.getAllTasks)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getTotalTasks = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(querys.getTotalTasks)
        res.json(result.recordset[0][''])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const createTask = async (req, res) => {
    const { name, description, realization } = req.body
    //let {quantity} = req.body

    if (name == null || description == null || realization == null) {
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' })
    }
    //if (quantity == null) quiantity = 0

    try {
        const pool = await getConnection()
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("realization", sql.VarChar, realization)
            .query(querys.createTask)

        res.json({ name, description, realization })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getTaskById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input("id", id)
            .query(querys.getTaskById)

        res.send(result.recordset[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection()
        await pool.request()
            .input("id", id)
            .query(querys.deleteTask)

        res.sendStatus(204)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const updateTaskByID = async (req, res) => {
    const { name, description, realization } = req.body
    const { id } = req.params

    if (name == null || description == null || realization == null) {
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' })
    }

    try {
        const pool = await getConnection()
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("realization", sql.VarChar, realization)
            .input("id", sql.Int, id)
            .query(querys.updateTaskById)

        res.json({ name, description, realization })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}