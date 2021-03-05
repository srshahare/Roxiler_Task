import React, { useState, useEffect } from 'react'
import { fetchList } from "../redux/todos/todoActions";
import { connect, useDispatch, useSelector } from "react-redux";

export function HomeFun() {
    
    const data = useSelector(state => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchList());
    }, []);

    return {data}
}

export default HomeFun
