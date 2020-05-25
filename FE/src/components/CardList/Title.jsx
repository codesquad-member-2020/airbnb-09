import React from "react";
import styled from "styled-components";
import Text from "Styles/Text";

const Title = ({ numberOfResult }) => {
  const TITLE_TEXT = `${numberOfResult}개 이상의 숙소`;

  return (
    <TitleWrapper>
      <Text fontSize="xl" fontWeight="extraBold" as="h2">
        {TITLE_TEXT}
      </Text>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 5;
  padding-top: ${props => props.theme.spacing.base};
  padding-bottom: ${props => props.theme.spacing.xsm};
`;

export default Title;
