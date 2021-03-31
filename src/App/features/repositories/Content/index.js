import React, { useEffect } from 'react'
import Loading from "../Loading";
import Failure from '../Failure';
import Success from '../Success';
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectStatus } from '../repositoriesSlice';

const Content = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

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
    };
};

export default Content;