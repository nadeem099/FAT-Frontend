import React from "react";
import classroomLogo from "assets/images/classroom-logo.svg";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledSideNav,
  StyledHeaderTitle,
  StyledUserIconBtn,
  Main,
  BottomNavBar,
  BodyContainer,
  Wrapper,
  StyledFontAwesomeIcon,
  StyledSideBar,
  Header,
} from "./styles";

function createNav(items) {
  return (
    <div>
      {items.map((item) => {
        return (
          <a href={"#"} key={item}>
            <StyledFontAwesomeIcon icon={["far", item]} fixedWidth />
            <StyledFontAwesomeIcon icon={["fas", item]} fixedWidth />
          </a>
        );
      })}
    </div>
  );
}

function createHeaderLogo() {
  return (
    <StyledHeaderTitle>
      <img src={classroomLogo} alt="classroom logo" width="40" height="40" />
    </StyledHeaderTitle>
  );
}

const MasterLayout = (props) => {
  const {
    showSideNav,
    headerTitle,
    children,
    navItems,
    bottomNavBar,
    showUserIconBtn,
  } = props;
  return (
    <Wrapper>
      <StyledContainer>
        <StyledSideBar>
          {headerTitle && createHeaderLogo()}
          {showSideNav && navItems && (
            <StyledSideNav className="classroom-top-nav">
              {createNav(navItems)}
            </StyledSideNav>
          )}
          {showUserIconBtn && <StyledUserIconBtn>N</StyledUserIconBtn>}
        </StyledSideBar>
        <BodyContainer>
          <Header>
            <h2>Something</h2>
          </Header>
          <Main>{children}</Main>
        </BodyContainer>
        {bottomNavBar && navItems && (
          <BottomNavBar className="classroom-bottom-nav">
            {createNav(navItems)}
          </BottomNavBar>
        )}
      </StyledContainer>
    </Wrapper>
  );
};

MasterLayout.defaultProps = {
  showSideNav: false,
  headerTitle: false,
  showUserIconBtn: false,
  bottomNavBar: false,
  navItems: [],
};

MasterLayout.propTypes = {
  showSideNav: PropTypes.bool,
  children: PropTypes.element.isRequired,
  navItems: PropTypes.array,
};

export default MasterLayout;
