import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 24px;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: max-content;
  height: 35px;
  margin: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e0e0e0;
  border-radius: 16px;

  font-family: Roboto;
  font-size: 14px;

  cursor: pointer;

  &.selected {
    background-color: #1976d2;

    span {
      color: #ffffff;
    }
    svg {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    padding: 0 12px;
  }

  svg {
    color: rgba(0, 0, 0, 0.26);
    margin-right: 5px;
  }
`;
