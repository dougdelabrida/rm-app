import styled from "styled-components";
import img from "../assets/portal-loading.gif";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  img {
    width: 200px;
  }
`;

export const Loading = () => {
  return (
    <Wrapper data-testid="loading">
      <img src={img} alt="" />
    </Wrapper>
  );
};
