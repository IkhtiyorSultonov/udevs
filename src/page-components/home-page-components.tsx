import {
  DeleverComponent,
  DesignComponents,
  Direction,
  ErpSystem,
  GoodzoneComponent,
  HowWork,
  ImanComponent,
  ItConsulting,
  MapsComponents,
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
      <HowWork/>
      <MapsComponents/>
    </Box>
  );
};

export default withLayout(HomePageComponents);
