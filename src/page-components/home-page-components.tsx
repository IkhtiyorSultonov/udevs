import {
  DeleverComponent,
  DesignComponents,
  Direction,
  ErpSystem,
  GoodzoneComponent,
  ImanComponent,
  ItConsulting,
  MobileApp,
  OptizimationComponent,
  OurServices,
  SmsComponent,
  SponsorComponent,
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
      <SponsorComponent/>
      <DeleverComponent/>
      <SmsComponent/>
      <GoodzoneComponent/>
      <ImanComponent/>
    </Box>
  );
};

export default withLayout(HomePageComponents);
