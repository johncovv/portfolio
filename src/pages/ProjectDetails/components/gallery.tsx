import React, { useState } from 'react';

import {
	Content,
	ImageItem,
	ImageItemContainer,
	Source,
	PopupContent,
	PopupCloseButton,
	PopupImageContainer,
	PopupTitle,
	PopupImage,
} from '../styles/gallery';

interface GalleryProps {
	images: Array<{ title?: string; url: string }>;
}

const ProjectGallery: React.FunctionComponent<GalleryProps> = ({
	images,
}: GalleryProps) => {
	const [activeImagePopup, setActiveImagePopup] = useState<{
		title?: string;
		url: string;
	} | null>(null);

	const closePopup = (): void => setActiveImagePopup(null);

	return (
		<>
			<Content>
				{images.map((image, index) => (
					<ImageItem key={`${image}-${index}`}>
						<ImageItemContainer onClick={() => setActiveImagePopup(image)}>
							<Source src={image.url} alt="johncovv project image" />
						</ImageItemContainer>
					</ImageItem>
				))}
			</Content>

			<PopupContent active={!!activeImagePopup} onClick={closePopup}>
				<PopupCloseButton onClick={closePopup} />

				{activeImagePopup?.title && (
					<PopupTitle>{activeImagePopup?.title}</PopupTitle>
				)}
				<PopupImageContainer>
					{activeImagePopup && (
						<PopupImage
							src={activeImagePopup.url}
							alt="johncovv project image"
							onClick={(e) => e.stopPropagation()}
						/>
					)}
				</PopupImageContainer>
			</PopupContent>
		</>
	);
};

export default ProjectGallery;
