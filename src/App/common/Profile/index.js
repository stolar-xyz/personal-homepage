import React from 'react'
import profile from "../../images/profile.png";
import { StyledProfile } from './styled';

const Profile = () => (
    <StyledProfile
        src={profile}
        alt="Author photo"
        width="398"
        height="398"
    />
);

export default Profile;