import { useState } from 'react';

export const useTasks = () => {

    const [task, setTask] = useState([]);
    return{task, setTask};
}
