import styled from 'styled-components';
import { List } from './List';
import { EmptyList } from './Empty';

export const TaskList = ({task, setTask, setEdit}) => {
    return(
        <TasklistWrap>
            { task && task.length ? 
                <List setEdit={setEdit} setTask={setTask} task={task}/>
            :
                <EmptyList/>
            }
        </TasklistWrap>
    );
}

const TasklistWrap = styled.div`
    max-width: 50%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 20px;
    padding-bottom: 40px;
    text-align: center;
    display: block;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 6px;
    height: 50vh;
    max-width: 550px;
    ul{
        list-style-type: none;
        margin: 0 auto;
    }
`;