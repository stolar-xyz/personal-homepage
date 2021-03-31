import React, { useEffect } from 'react'
import Loading from "../Loading";
import Failure from '../Failure';
import Success from '../Success';
import Subheader from '../../../common/styled/Subheader';
import { Wrapper, ExtraSubheaderContent, Icon } from './styled';
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectStatus } from '../repositoriesSlice';

const Tiles = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectStatus);
    
    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <section>
            <Wrapper>
                <Icon />
                <Subheader>
                    Portfolio
                </Subheader>
                <ExtraSubheaderContent>
                    My recent projects
                </ExtraSubheaderContent>
            </Wrapper>
            {(() => {
                switch (repositoriesStatus) {
                    case "initial":
                        return null;
                    case "loading":
                        return <Loading />;
                    case "error":
                        return <Failure />;
                    case "success":
                        return <Success />;
                    default:
                        throw new Error(`incorrect status - ${repositoriesStatus}`);
                }
            })()}
        </section>
    );
};

export default Tiles;