export const SingleTaskClick = (e, setTask, task, singleTask, num, setEdit) => {
    if(e.target.className === 'delete fas fa-trash') {
        const redacted = [ ...task.slice(0, num), ...task.slice(num + 1) ];
        setTask(redacted);
    }
    else if(e.target.className === 'fas fa-pencil-alt'){
        setEdit({text: singleTask.text, num});
    }
    else if(e.target.className === 'important fas fa-exclamation') {
        singleTask.important = !singleTask.important;
        let newTask = [ ...task.slice(0, num), singleTask, ...task.slice(num + 1) ];
        setTask(newTask);
    } else if(e.target.className === 'text'){
        singleTask.checked = !singleTask.checked;
        let newTask = [ ...task.slice(0, num), singleTask, ...task.slice(num + 1) ];
        setTask(newTask);
    }
}