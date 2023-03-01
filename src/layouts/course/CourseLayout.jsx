import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SideBar } from "features";
import { Container, SectionWrapper, LeftSection } from "./Styles";

const CourseLayout = (props) => {
  return (
    <>
      <Container>
        <Header />
        <SectionWrapper>
          <LeftSection>
            {props.children}
            <Footer></Footer>
          </LeftSection>
          <SideBar></SideBar>
        </SectionWrapper>
      </Container>
    </>
  );
};

CourseLayout.defaultProps = {};

CourseLayout.propTypes = {};

export default CourseLayout;

// Notes:

// Breakpoints:
// 980px
// 700px remove leave a rating
// 600px remove left content of header and udemy logo and add back arrow

// Mobile:
/*
Container
  Header
  VideoBody
  AppNav (including VideoNav for mobile)
  Footer
*/

// Desktop:
/*
Container:
  Header
  wrapper: (flex-direction: row)
    LeftSection
      VideoBody
      AppNav (main) (add course content if mobile or if RightSection is closed)
      Footer
    RightSection
*/
