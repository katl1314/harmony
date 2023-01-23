import { UserType } from '@src/types/Types';
import { ReactElement } from 'react';

const ImageView = ({
	photoURL,
	displayName,
	width = 40,
	height = 40,
}: Partial<UserType> & {
	width?: number;
	height?: number;
}): ReactElement | null => {
	if (!displayName) {
		return null;
	}

	if (!photoURL) {
		return null;
	}
	return (
		<span>
			<img src={photoURL} alt={displayName} width={width} height={height} />
		</span>
	);
};

export default ImageView;
