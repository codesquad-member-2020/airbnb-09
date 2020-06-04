import React from "react";
import styled from "styled-components";
import Text from "Styles/Text";
import { addedWonUnitRate } from "Utils/utils";
import Rating from "./Rating";

const Description = ({ data: { name, country, rating, superHost, oneNightRate, price } }) => {
  const SUPER_HOST_TEXT = "슈퍼호스트";
  const SELLING_RATE_TEXT = "/1박";
  const TOTAL_PRICE_TEXT = priceNum => `총 요금: ${addedWonUnitRate(priceNum)}`;

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
          <Rating ratingValue={rating} />
        </RatingWrapper>
      </DetailWrapper>
      <NameText fontSize="lg">{name}</NameText>
      {oneNightRate && (
        <>
          <RateWrapper>
            <OriginalRateText fontSize="lg" fontWeight="semiBold" color="gray3">
              {addedWonUnitRate(oneNightRate.original)}
            </OriginalRateText>
            <Text fontSize="lg" fontWeight="bold">
              {addedWonUnitRate(oneNightRate.selling)}
            </Text>
            <Text fontSize="lg">{SELLING_RATE_TEXT}</Text>
          </RateWrapper>
          <TotalPriceWrapper>
            <Text color="gray3">{TOTAL_PRICE_TEXT(price.totalPrice)}</Text>
          </TotalPriceWrapper>
        </>
      )}
    </div>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacings.unit(3)};
`;

const SuperHostBadge = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.spacings.xxsm};
  margin-right: ${({ theme }) => theme.spacings.xxsm};
  padding: 0 ${({ theme }) => theme.spacings.xxsm};
`;

const RatingWrapper = styled.div`
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
  padding-top: ${({ theme }) => theme.spacings.xxsm};
`;

const OriginalRateText = styled(Text)`
  text-decoration: line-through;
  margin-right: ${({ theme }) => theme.spacings.xxsm};
`;

const NameText = styled(Text)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: ${({ theme }) => theme.spacings.xxsm};
`;

const TotalPriceWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacings.xxsm};
`;

export default Description;
