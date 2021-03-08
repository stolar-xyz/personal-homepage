import React from 'react'
import profileImage from "../../images/profileImage.png";
import { StyledProfileImage } from './styled';

const ProfileImage = () => (
    <StyledProfileImage
        src={profileImage}
        alt="Andrzej Stolarek"
    />
);

export default ProfileImage;