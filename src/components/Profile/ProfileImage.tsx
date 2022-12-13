import { UserType } from '@src/types/Types';
import { ReactElement } from 'react';
import styled from 'styled-components';

const ProfileImage = ({
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
		<ProfileImageWrap>
			<img src={photoURL} alt={displayName} width={width} height={height} />
		</ProfileImageWrap>
	);
};

export default ProfileImage;

const ProfileImageWrap = styled.span`
	display: inline-block;
	margin: 0 auto;
	& > img {
		border-radius: 50%;
	}
`;
