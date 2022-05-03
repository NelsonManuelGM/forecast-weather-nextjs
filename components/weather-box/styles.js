import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.platinum};
`;

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.palette.blue_jeans};
  width: 100%;
  height: 100%;
  border-radius: 42px;
  padding: 10px 20px;

  @media (max-width: ${(props) => props.theme.breakPoint}) {
    border-radius: 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DensityIco = ({ title, titleId, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <path d="M13 11V5h2v2.6L19.575 3 21 4.425 16.4 9H19v2ZM4.425 21 3 19.575 7.6 15H5v-2h6v6H9v-2.6Z" />
  </svg>
);

export const MoreIco = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <path d="M12 20q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm0-6q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0-6q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z" />
  </svg>
);
