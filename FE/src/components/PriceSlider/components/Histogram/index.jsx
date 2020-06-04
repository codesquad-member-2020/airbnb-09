import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

const StyledHistogram = styled.div`
  position: relative;
  width: 100%;
`;

const Histogram = ({ data, highlight }) => {
  const trimData = data;
  trimData.pop();

  const handleClick = (c, i) => {
    console.log(i[0]._index);
  };
  const barData = {
    labels: trimData.map((val, i) => i),
    datasets: [
      {
        categoryPercentage: 1,
        barPercentage: 1,
        backgroundColor: trimData.map((val, i) => (i >= highlight[0] && i < highlight[1] ? "#B0B0B0" : "#DDDDDD")),
        hoverBackgroundColor: "#B0B0B0",
        data: trimData,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    tooltips: { enabled: false },
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [{ display: false }],
    },
    onClick: handleClick,
  };
  return (
    <StyledHistogram>
      <Bar data={barData} options={options} />
    </StyledHistogram>
  );
};

Histogram.propTypes = {
  data: PropTypes.array,
  highlight: PropTypes.array,
};

Histogram.defaultProps = {
  data: {},
  highlight: [],
};

export default Histogram;
