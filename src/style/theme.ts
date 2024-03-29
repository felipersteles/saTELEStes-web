// Criando o tema claro e escuto

import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const temaClaro = {
  body: colors.branco,
  text: colors.preto,
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
};

export const temaEscuro = {
  body: colors.preto,
  text: colors.branco,
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: "252, 246, 244",
  bodyRgba: "0,0,0",
};

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        font-weight: 300;
        font-style: normal;
    }
`;
