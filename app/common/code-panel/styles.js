import styled from 'styled-components';

export default styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 30px;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
`;

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	right: 0px;
	margin-left: 10px;
	cursor: pointer;
	transition: 0.2s all ease-in-out;

	&:hover {
		filter: invert(20%);
	}
`;

export const CodeParent = styled.div`
	margin: 20px 0px;
	display: flex;
	justify-content: center;
`;
