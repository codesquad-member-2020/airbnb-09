import React from "react";
import styled from "styled-components";
import Text from "Styles/Text";

const Title = ({ numberOfResult }) => {
  return (
    <TitleWrapper>
      <Text fontSize="xl" fontWeight="extraBold">
        {numberOfResult}개 이상의 숙소
      </Text>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  padding-top: ${props => props.theme.spacing.base};
`;

export default Title;
