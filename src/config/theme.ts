import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/manrope";
export const theme=extendTheme({
    styles: {
        global: (props:any) => ({
          body: {
            bg: mode('', 'white')(props),
            color: mode('', 'black')(props)
          }
        }),
      },
      fonts: {
        heading: `'Manrope', sans-serif`,
        body: `'Manrope', sans-serif`,
      },
  })