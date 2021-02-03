//import { useEffect } from 'react';
export const TaskAdd = (setTask, task) => {
    const valElem = document.getElementById("mainForm");
    const changePlaceholder = (text) => {valElem.placeholder = text; valElem.classList.remove('success', 'error')};
        if(valElem.value !== ''){
            const newSingleTask = { 
                text: valElem.value, 
                checked: false, 
                important: false,
            };
            const taskUpd = task.concat(newSingleTask); 
            setTask(taskUpd);
            valElem.value = '';
            changePlaceholder('Task added!');
            valElem.classList.add('success');
            setTimeout( changePlaceholder , 2000, 'Task name here...');
        } else {
            changePlaceholder('Field must contain text');
            valElem.classList.add('error');
            setTimeout( changePlaceholder , 2000, 'Task name here...');
        }
}