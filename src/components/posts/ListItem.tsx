import React from "react";
import formatDate from "date-fns/format";
import styled from "styled-components";
import ListLabel from "./ListLabel";

type TProps = {
  key: number;
  showDate: boolean;
  date: {
    seconds: string;
  };
};

const ListItem: React.FC<TProps> = ({ date, showDate }) => {
  const timestamp = parseInt(date.seconds, 10) * 1000;
  return (
    <StyledListItem>
      {showDate ? <ListLabel timestamp={timestamp} /> : null}
      <p>
        {formatDate(timestamp, "h:mm")}
        <StyledTextLabel>に鍵をかけたよ</StyledTextLabel>
      </p>
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  margin-bottom: 5px;
`;

const StyledTextLabel = styled.span`
  font-size: 13px;
  color: #545454;
  padding-left: 2px;
`;

export default ListItem;
