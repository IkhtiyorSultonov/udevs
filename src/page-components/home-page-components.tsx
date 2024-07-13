import {
  DesignComponents,
  Direction,
  ErpSystem,
  ItConsulting,
  MobileApp,
  OptizimationComponent,
  OurServices,
  Team,
  ToolsComponents,
} from "@/components";
import { withLayout } from "@/layout/layout";
import { Box } from "@chakra-ui/react";
import React from "react";

const HomePageComponents = () => {
  return (
    <Box mt={20}>
      <Direction />
      <OurServices />
      <Team />
      <MobileApp />
      <ErpSystem />
      <DesignComponents />
      <OptizimationComponent />
      <ItConsulting />
      <ToolsComponents />
    </Box>
  );
};

export default withLayout(HomePageComponents);
