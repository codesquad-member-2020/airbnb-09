import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import Text from "Styles/Text";

const Description = ({ data: { name, country, rating, superHost, oneNightRate } }) => {
  const SUPER_HOST_TEXT = "슈퍼호스트";
  const SELLING_RATE_TEXT = "/1박";
  const addedWonUnitRate = rate => `₩${rate}`;

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
      {oneNightRate && (
        <RateWrapper fontSize="lg" as="div">
          <OriginalRateText color="gray3">{addedWonUnitRate(oneNightRate.original)}</OriginalRateText>
          <Text fontWeight="extraBold">{addedWonUnitRate(oneNightRate.selling)}</Text>
          <Text>{SELLING_RATE_TEXT}</Text>
        </RateWrapper>
      )}
    </div>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${props => props.theme.spacings.unit(3)};
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
