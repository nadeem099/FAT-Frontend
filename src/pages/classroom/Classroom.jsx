import React from "react";
import { Outlet } from "react-router-dom";
import "helpers/fontAwesome";
import { MasterLayout } from "layouts";
import { classRoomNavitems } from "helpers";

function Classroom() {
  return (
    <MasterLayout
      showSideNav={true}
      headerTitle={true}
      navItems={classRoomNavitems}
      bottomNavBar={true}
      showUserIconBtn={true}
    >
      <Outlet />
    </MasterLayout>
  );
}

export default Classroom;
