import styled from "styled-components";

export type ButtonProps = {
  children: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Wrapper = styled.button`
  border-radius: 8px;
  background-color: #fff;
  border: 3px solid #000;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
`;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Button;
