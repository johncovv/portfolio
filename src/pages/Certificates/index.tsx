import React from 'react';

import { certificates } from '../../assets/objects/certificates';

import { CertificateContainer, Content, Embed } from './styles';

const Certificates: React.FunctionComponent = () => {
	return (
		<Content>
			{certificates.map(({ key, url, name, proportion }) => (
				<CertificateContainer key={key} $proportion={proportion}>
					<Embed src={url} title={name}>
						Arquivo PDF
					</Embed>
				</CertificateContainer>
			))}
		</Content>
	);
};

export default Certificates;
