import styled from "styled-components";

const DatesWrapper = styled.div`
  /* Modal Spacing */
  margin: calc(-1 * ${({ theme }) => theme.spacings.sm});

  /* Dates Border */
  .DayPicker__withBorder {
    box-shadow: none;
  }

  /* Set Font Color */
  .CalendarMonth_caption,
  .CalendarDay__default,
  .CalendarDay__hovered_span,
  .CalendarDay__selected_span {
    color: ${({ theme }) => theme.colors.black};
  }

  /* Dates Table Margin */
  .CalendarMonth_table {
    box-sizing: border-box;
    margin-top: ${({ theme }) => theme.spacings.xsm};
  }

  /* Default Date Style + hover */
  .CalendarDay__default {
    position: relative;
    border: none;
    vertical-align: middle;
    &:hover {
      background: none;
      &::after {
        content: "";
        display: block;
        position: absolute;
        background: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid ${({ theme }) => theme.colors.black};
      }
    }
  }

  /* Selected Date Style */
  .CalendarDay__selected {
    background-color: ${({ theme }) => theme.colors.black} !important;
    color: ${({ theme }) => theme.colors.white};
  }

  /* Selected and Hovered Date Font Color */
  .CalendarDay__hovered_span,
  .CalendarDay__selected_span {
    background-color: ${({ theme }) => theme.colors.gray6} !important;
  }

  /* Nav Arrow Wrapper Style */
  .DayPickerNavigation_button__horizontalDefault {
    top: 11px;
    border-radius: 50%;
    padding: 9px 9px;
    outline: none;
    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.colors.gray6};
    }
  }

  /* Nav Arrow svg Style */
  .DayPickerNavigation_svg__horizontal {
    fill: ${({ theme }) => theme.colors.black};
  }

  /* Nav Arrow Wrapper border  */
  .DayPickerNavigation_button__default {
    border: none;
  }

  /* Date Shortcut Button  */
  .DayPickerKeyboardShortcuts_show {
    display: none;
  }
`;

export default DatesWrapper;
