import styled from 'styled-components';

export const TableLine = styled.tr`
    background-color: #ddd;
`

export const TableColumn = styled.td`
    padding: 10px 5px;
`

export const Category = styled.div<{color:string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    min-width: 120px;
    background-color: ${props => props.color};
`

export const Value = styled.div<{color:string}>`
    color: ${props => props.color};
    font-weight: bold;
`