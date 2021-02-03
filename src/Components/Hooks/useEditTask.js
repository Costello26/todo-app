import {useState} from 'react';

export const useEditTask = () => {
    const [edit, setEdit] = useState(false);
    return{ edit, setEdit}
}