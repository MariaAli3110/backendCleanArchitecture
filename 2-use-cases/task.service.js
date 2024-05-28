// task.service.js
const Task = require('./task.model');

class TaskService {
  async createTask(taskData) {
    return await Task.create(taskData);
  }

  async updateTask(id, updatedTaskData) {
    return await Task.findByIdAndUpdate(id, updatedTaskData, { new: true });
  }

  async deleteTask(id) {
    return await Task.findByIdAndDelete(id);
  }

  async getTaskList() {
    return await Task.find();
  }
}

module.exports = new TaskService();