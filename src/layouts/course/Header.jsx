import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  background-color: #1c1d1f;
  color: #fff;
  justify-content: center;
  align-items: center;
  padding: 0 1.2rem;
  gap: 2.4rem;
  span {
    padding: 0 5px;
  }
  @media screen and (max-width: 760px) {
    #header-rating {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .desktop-header {
      display: none;
    }
  }
`;

const LogoWrapper = styled.div``;

const StyledHeading = styled.h1`
  min-width: 5rem;
  font-weight: 380;
  /* text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  padding-left: 1rem;
  border-left: 1px solid #3e4143;
  a {
    color: #fff;
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 600;
  margin-left: -20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

function Header(props) {
  const { heading } = props;
  return (
    <StyledHeader>
      <LogoWrapper>
        <Link to="#">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="logo"
            width="85"
            height="60"
          />
        </Link>
      </LogoWrapper>
      <StyledHeading>
        <Link to=".">{heading}</Link>
      </StyledHeading>
      <div id="header-rating">
        <span>
          <FontAwesomeIcon icon={["far", "star"]} />
        </span>
        Leave a rating
      </div>
      <div className="desktop-header">
        <span>
          <FontAwesomeIcon icon={["fas", "trophy"]} />
        </span>
        Get certificate
        <span>
          <FontAwesomeIcon icon={["fas", "chevron-down"]} />
        </span>
      </div>
      <StyledButton className="desktop-header">
        Share
        <span>
          <FontAwesomeIcon icon={["fas", "share"]} />
        </span>
      </StyledButton>
      <StyledButton className="desktop-header">
        <FontAwesomeIcon icon={["fas", "ellipsis-vertical"]} />
      </StyledButton>
    </StyledHeader>
  );
}

Header.defaultProps = {
  heading: "The Complete Python Bootcamp From Zero to Hero in Python",
};

Header.propTypes = {
  heading: PropTypes.string,
};

export default Header;
