export const EditTask = (setTask, task, setEdit, edit) => {
    const valElem = document.getElementById("mainForm");
    const changePlaceholder = (text) => {valElem.placeholder = text; valElem.classList.remove('success', 'error')};
    if ( valElem.value ) {
    task[edit.num].text = valElem.value;
    const newArr = [ ...task ];
    setTask(newArr);
    valElem.value = '';
    changePlaceholder('Successful edited!');
    valElem.classList.add('success');
    setTimeout( changePlaceholder , 2000, 'Task name here...');
    setEdit(false);
    } else {
        valElem.classList.add('error');
        setTimeout( changePlaceholder , 2000, 'Field must contain text');
        valElem.value = task[edit.num].text;
    }
}