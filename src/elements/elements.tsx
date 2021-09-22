import styled, {keyframes} from "styled-components";

type VoteProps = {
    votes:number;
}

type ButtonProps = {
    showLoading:boolean;
}

export const Badge = styled.li`
	margin: 4px 0;
	display: flex;
	justify-content: space-around;
	border: #f76c6c 1px solid;
	border-radius: 4px;
	padding: 2px;
`;

export const Votes = styled.span<VoteProps>`
	/* Center the content */
	align-items: center;
	display: flex;
	justify-content: center;

	/* Colors */
	background-color: ${({ votes }) =>
		votes >= 7 ? "rgba(0, 100, 0, .3)" : "rgba(0, 0, 0, .3)"};

	color: #fff;

	/* Rounded border */
	border-radius: 9999px;
	height: 20px;
	width: 20px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Input = styled.input`
	font-size: 16px;
	font-size: max(16px, 1em);
	font-family: inherit;
	padding: 0.25em 0.5em;
	background-color: #fff;
	border: 2px solid #8b8a8b;
	border-radius: 4px;
`;

export const Label = styled.label`
	margin-top: 0.8rem;
	padding-bottom: 0.3rem;
`;

const rotate = keyframes`
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg);
   }
`;

export const Button = styled.button<ButtonProps>`
	background-color: ${({ showLoading }) => (showLoading ? "#fff" : "#f76c6c")};
	color: #fff;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	display: inline-block;
	margin: 0.5rem 0;
   svg {
      width: 47px !important;
      height: 47px !important;
      animation: ${rotate} 2s linear infinite;
      animation-play-state: running !important;
   }
`;

export const ShowButton = styled.button`
  background-color: ${"#f76c6c"};
  display: flex;
  align-items: center;
  svg {
    height: 20px;
    width: 20px;
  }
`;