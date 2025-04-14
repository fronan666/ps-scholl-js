toDoList = {
    tasks : [
      {
        title: 'Помой посуду',
        id: 1, 
        priority: 1,
      },
    ],
    addTask: function(title, priority) {
      const newId = this.tasks.length + 1;
      this.tasks.push({
        title: title,
        id: newId,
        priority: priority,
      })
    },
    deleteTask: function(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  
    updateTask: function(id , update) {
      const tasksIndex = this.tasks.findIndex(task => task.id === id);
      if(tasksIndex !== -1) {
        this.tasks[tasksIndex] = {
          ...this.tasks[tasksIndex],
          ...update
        }
      }
    },
    sortTask: function() {
      this.tasks.sort((a , b) => a.priority - b.priority);
    }
  };