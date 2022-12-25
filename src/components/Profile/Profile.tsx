import { UserType } from '@src/types/Types';
import styled from 'styled-components';
import ProfileImage from '@components/Profile/ProfileImage';

const Profile = ({ photoURL, displayName }: Partial<UserType>) => {
	return (
		<ProfileWrap>
			<ProfileInfo>
				<span>Hello!</span>
				<span>{displayName}</span>
			</ProfileInfo>
			<ProfileButton>
				<ProfileImage
					photoURL={photoURL}
					displayName={displayName}
				></ProfileImage>
			</ProfileButton>
		</ProfileWrap>
	);
};

const ProfileWrap = styled.div`
	display: flex;
	align-items: center;
	margin-right: 0.7rem;
`;

const ProfileInfo = styled.div`
	padding: 0.5rem;
	cursor: pointer;
	transition-timing-function: ease-in;
	transition-duration: 100ms;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	& > span {
		width: 100%;
		display: inline-block;
		text-align: right;
		&:first-of-type {
			color: #afafaf;
			font-size: 0.8rem;
			font-weight: bold;
			margin-bottom: 5px;
		}

		&:last-of-type {
			color: #000;
			font-weight: bold;
		}
	}
`;

const ProfileButton = styled.button`
	background: rgb(255, 255, 255);
`;

export default Profile;
