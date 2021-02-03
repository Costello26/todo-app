import styled from 'styled-components';

export const EmptyList = () => {
    return(
    <EmptyWrap>
        <span className='notFound'>
            Tasks not found... <br/>
            <i className="fas fa-ghost"></i>
        </span>
    </EmptyWrap>
    )
}

const EmptyWrap = styled.div`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .notFound{
            font-size: 28px;
            text-transform: uppercase;
            color: #ccc;
            i{
                font-size: 48px;
                padding-top: 15px;
            }
            &::selection {
                background: transparent;
            }
            &::-moz-selection {
                background: transparent;
            }
        }
    `;