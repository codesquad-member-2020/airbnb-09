import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import Text from "Styles/Text";

const Description = ({ name, country, rating, superHost, originalRate, sellingRate }) => {
  const SUPER_HOST_TEXT = "슈퍼호스트";
  const ORIGIN_RATE = `₩${originalRate}`;
  const SELLING_RATE = `₩${sellingRate}`;
  const SELLING_RATE_TEXT = "/1박";

  return (
    <div>
      <DetailWrapper>
        {superHost && (
          <SuperHostBadge>
            <Text fontSize="xsm" fontWeight="semiBold">
              {SUPER_HOST_TEXT}
            </Text>
          </SuperHostBadge>
        )}
        <Text fontSize="sm" color="gray3">
          {country}
        </Text>
        <RatingWrapper>
          <IconContext.Provider value={{ color: "#FF5A5F" }}>
            <IoIosStar />
          </IconContext.Provider>
          <Text fontSize="sm">{rating}</Text>
        </RatingWrapper>
      </DetailWrapper>
      <NameText fontSize="lg">{name}</NameText>
      <RateWrapper fontSize="lg" as="div">
        <OriginalRateText color="gray3">{ORIGIN_RATE}</OriginalRateText>
        <Text fontWeight="extraBold">{SELLING_RATE}</Text>
        <Text>{SELLING_RATE_TEXT}</Text>
      </RateWrapper>
    </div>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${props => props.theme.spacings.xsm};
`;

const SuperHostBadge = styled.div`
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.spacings.xxsm};
  margin-right: ${props => props.theme.spacings.xxsm};
  padding: 0 ${props => props.theme.spacings.xxsm};
`;

const RatingWrapper = styled(Text)`
  display: flex;
  justify-content: center;
  margin-left: auto;
  ${Text} {
    margin-left: 2px;
  }
`;

const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${props => props.theme.spacings.sm};
  ${Text} {
    line-height: 0;
  }
`;

const OriginalRateText = styled(Text)`
  text-decoration: line-through;
  margin-right: ${props => props.theme.spacings.xxsm};
`;

const NameText = styled(Text)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: ${props => props.theme.spacings.xsm};
`;

export default Description;
