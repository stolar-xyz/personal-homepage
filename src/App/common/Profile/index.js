import React from 'react'
import profile from "../../images/profile.png";
import LazyLoad from 'react-lazyload';
import { StyledProfile } from './styled';

const Profile = () => (
    <LazyLoad>
        <StyledProfile
            src={profile}
            alt="Author photo"
        />
    </LazyLoad>
);

export default Profile;