import styled, { css } from 'styled-components';

export const Content = styled.div``;

type CertificateContainerProps = {
	$proportion: [number, number];
};

export const CertificateContainer = styled.div<CertificateContainerProps>`
	position: relative;
	padding-top: 100%;

	${({ $proportion: [_, height] }) => css`
		padding-top: calc(${height} * 100%);
	`}
`;

export const Embed = styled.iframe`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	width: 100%;
	height: 100%;
`;
