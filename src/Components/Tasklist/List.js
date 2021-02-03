import styled from 'styled-components';
import { SingleTask } from './SingleTask';

export const List = ({setEdit, setTask, task}) => {
    return(
        <ListWrap>
            <ul>
                {task.map((singleTask, index) => {
                    return (
                    <SingleTask 
                    key={index} 
                    num={index} 
                    singleTask={singleTask} 
                    setTask={setTask}
                    task={task}
                    setEdit={setEdit}
                    />
                    )
                })}
            </ul>
        </ListWrap>
    )
}

const ListWrap = styled.div`
        overflow-x: scroll;
        height: 100%;
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-button {
            width: 5px;
            height: 5px;
            cursor: pointer;
        }
        &::-webkit-scrollbar-corner {
            background: 0 0;
        }
        &::-webkit-scrollbar-thumb {
            background: #e9e9e9;
            border: 0 #fff;
            border-radius: 15px;
        }
        &::-webkit-scrollbar-track {
            width: 5px;
            background: #fff;
            border: 0 #fff;
            border-radius: 15px 0 0 15px;
        }
    `;