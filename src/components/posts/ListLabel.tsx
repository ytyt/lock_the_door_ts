import React from "react";
import formatDate from "date-fns/format";
import styled from "styled-components";

type TProps = {
  timestamp: number;
};

const ListLabel: React.FC<TProps> = ({ timestamp }) => {
  const current = new Date(timestamp);
  const month = formatDate(current, "M");
  const date = formatDate(current, "d");

  return (
    <StyledListLabel>
      {month}/{date}
    </StyledListLabel>
  );
};

const StyledListLabel = styled.div`
  font-size: 20px;
  color: #545454;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export default ListLabel;
