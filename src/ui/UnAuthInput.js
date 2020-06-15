import styled from "styled-components";
import { Input } from "bluejay-ui";

const UnAuthInput = styled(Input)`
  border-color: white;
  color: white;
  margin-bottom: 35px;
  border-width: 2px;

  ::placeholder {
    color: white;
  }
`;

export default UnAuthInput;
