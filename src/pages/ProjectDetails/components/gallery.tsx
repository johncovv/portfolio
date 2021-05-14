import React, { useCallback, useState } from 'react';

import {
	Content,
	ImageItem,
	ImageItemContainer,
	Source,
	PopupContent,
	PopupCloseButton,
	PopupImageContainer,
	PopupTitle,
	ImageScrollableContainer,
	PopupImage,
	PopupArrayPrevious,
	PopupArrayNext,
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

	const handleNext = useCallback(
		(event: React.MouseEvent, url?: string) => {
			event.stopPropagation();

			const selectedIndex = images.findIndex((img) => img.url === url);

			const next = images[selectedIndex + 1];

			if (next) setActiveImagePopup(next);
		},
		[images],
	);

	const handlePrevious = useCallback(
		(event: React.MouseEvent, url?: string) => {
			event.stopPropagation();

			const selectedIndex = images.findIndex((img) => img.url === url);

			const next = images[selectedIndex - 1];

			if (next) setActiveImagePopup(next);
		},
		[images],
	);

	const hasNextImage = !!images[
		images.findIndex((img) => img.url === activeImagePopup?.url) - 1
	];

	const hasPreviousImage = !!images[
		images.findIndex((img) => img.url === activeImagePopup?.url) + 1
	];

	return (
		<>
			<Content>
				{images.map((image, index) => (
					<ImageItem key={`${image}-${index}`}>
						<ImageItemContainer onClick={() => setActiveImagePopup(image)}>
							<Source src={image.url} alt="johncovv project" />
						</ImageItemContainer>
					</ImageItem>
				))}
			</Content>

			<PopupContent active={!!activeImagePopup} onClick={closePopup}>
				<PopupCloseButton onClick={closePopup} />
				<PopupTitle>{activeImagePopup?.title}</PopupTitle>

				<PopupImageContainer>
					<PopupArrayPrevious
						$active={hasNextImage}
						onClick={(e) => handlePrevious(e, activeImagePopup?.url)}
					/>

					<PopupArrayNext
						$active={hasPreviousImage}
						onClick={(e) => handleNext(e, activeImagePopup?.url)}
					/>

					<ImageScrollableContainer>
						<PopupImage
							src={activeImagePopup?.url}
							alt="johncovv project"
							onClick={(e) => e.stopPropagation()}
						/>
					</ImageScrollableContainer>
				</PopupImageContainer>
			</PopupContent>
		</>
	);
};

export default ProjectGallery;
