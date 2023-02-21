import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.typography.color.value("white", 25)};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 70%;
  .classroom-bottom-nav {
    display: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.xs()}) {
    max-width: 100%;
    .classroom-top-nav {
      display: none;
    }
    .classroom-bottom-nav {
      display: flex;
    }
  }
`;

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 100%;
  padding: 0.5rem 0.5rem 0.5rem 0;
  border-right: 0.5px solid
    ${({ theme }) => theme.typography.color.value("gray", 50)};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.xs()}) {
    flex-direction: row;
    position: sticky;
    top: 0;
    left: 0;
    height: unset;
    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 0.5px solid;
    ${({ theme }) => theme.typography.color.value("gray", 50)};
  }
`;

export const Header = styled.div`
  ${({ theme }) => theme.typography.font.text.md}
  margin: 0.6rem 0;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.xs()}) {
    position: absolute;
    top: 20px;
    left: 40%;
  }
`;

export const StyledSideNav = styled.nav`
  flex-grow: 1;
  div {
    display: flex;
    flex-direction: column;
    padding: 0.62rem;
    a {
      margin-top: 30px;
      &:hover {
        transition: transform 0.5s ease;
        transform: rotate(20deg);
      }
    }
  }
`;

export const BottomNavBar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
  }
`;

export const Main = styled.main`
  width: 100%;
`;

export const BodyContainer = styled.div`
  display: flex;
  margin-left: 5rem;
  flex-direction: column;
  padding: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.xs()}) {
    margin-left: 0;
    /* margin-top: 3rem; */
  }
`;

export const StyledHeaderTitle = styled.div`
  /* font-size: clamp(1rem, 2vw + 1rem, 2rem); */
  /* display: inline-block; */
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.xs()}) {
    margin-left: 0.7rem;
  }
`;

export const StyledUserIconBtn = styled.div`
  margin-bottom: 7rem;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: #696969;
  text-align: center;
  padding: 10px;
  color: ${({ theme }) => theme.typography.color.value("gray", 25)};
  box-shadow: 1px 1px 2px #585858;
  font-size: ${({ theme }) => theme.typography.scale("md", "semibold")};
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.xs()}) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: rgb(15, 20, 25);
  font-size: clamp(1.125rem, 2vw + 1rem, 1.563rem);
`;
