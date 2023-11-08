export const querys = {
    getAllTasks: 'SELECT * FROM Tasks', 
    getTotalTasks: 'SELECT COUNT(*) FROM Tasks',
    createTask: 'INSERT INTO Tasks (name, description, realization) VALUES (@name, @description, @realization)',
    getTaskById: 'SELECT * FROM Tasks WHERE id = @id',
    deleteTask: 'DELETE FROM [TaskManager].[dbo].[Tasks] WHERE id = @id',
    updateTaskById: 'UPDATE [TaskManager].[dbo].[Tasks] SET name = @name, description = @description, realization = @realization WHERE id = @id'
}