const tasks = ['Задача 1'];

function add(task) {
    tasks.push(task);
}
add('Задача 2')
add('Задача 3')
console.log(tasks);
function Remove(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
  return tasks.splice(index , 1) ;
}
Remove('Задача 2');
console.log(tasks);
function Priority(task) {
    const result = Remove(task);
    if (!result) {
        return;

    }
    tasks.unshift(result[0]);
}
Priority('Задача 3')
console.log(tasks);





