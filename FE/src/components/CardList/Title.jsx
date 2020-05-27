import React from "react";
import styled from "styled-components";
import Text from "Styles/Text";

const Title = ({ numberOfResults }) => {
  const MAX_RESULT_NUM = 300;
  const TITLE_TEXT =
    numberOfResults >= MAX_RESULT_NUM ? `${MAX_RESULT_NUM}개 이상의 숙소` : `${numberOfResults}개의 숙소`;

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
  grid-column: 1 / -1;
  padding-top: ${props => props.theme.spacings.base};
  padding-bottom: ${props => props.theme.spacings.xsm};
`;

export default Title;
