import React from 'react'
import profile from "../../images/profile.png";
import { StyledProfile } from './styled';

const Profile = () => (
    <StyledProfile
        src={profile}
        alt="Andrzej Stolarek"
    />
);

export default Profile;