/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux";
import { Formik, useFormik } from "formik";
import { getAllTodos } from "@redux/actions/todoData"
import * as styles from "./style";
import { storeState } from "@redux/reducers/rootReducer";
import { todo, todoState } from "@redux/reducers/todoData";
import AssetsImg from '@public/images'
import { useHandleSearch } from '@hooks/useHandleSearch'
import Input from "@components/shared/Input"
import Select from "@components/shared/Select"

const List: React.FC<any> = props => {
    const todoData = useSelector<storeState, todoState>((state: any)=> state.todoData);
    const dispatch = useDispatch();
    const [searchKeyword, setSearchKeyword] = useState("")

    const filterData = useHandleSearch(
        todoData.todoData,
        ['title'],
        searchKeyword
    )

    // console.log('saurabh fintered data::', filterData)

    useEffect(() => {
        console.log('saurabh check useEffect::')
        dispatch<any>(getAllTodos());

        return () => {
            console.log('saurabh cleanup')
        }
    }, [])

    const selectValue = [{status:'true'},{status:'false'}]

    return (
        <div className="table-container-main">
            {/* { todoData.status ? <div> Loading... </div>  */}
            <Image src={AssetsImg.cross} alt="cross" />
            <img src={AssetsImg.cross} />
            {/* <input type="text" placeholder="Search todo" onChange={(e)=>setSearchKeyword(e.target.value)}></input> */}
            <div>
                <br></br>
                <Input label="Enter text" type="text" placeholder="search keyword" onChange={(e:any)=>setSearchKeyword(e.target.value)} />
            </div>
            <div>
                <span>Select component</span>
                <Select value={selectValue}/>
            </div>
            {<table css={styles.table}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>User Id</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todoData && filterData.map((todo: todo, i) => (
                         <tr key={i}>
                         <td>{todo.id}</td>
                         <td>{todo.title}</td>
                         <td>{todo.userId}</td>
                         <td>{todo.completed ? 'true' : 'false'}</td>
                         <td>
                             <span>
                                 Edit/
                             </span>
                             <span>
                                 Delete
                             </span>
                         </td>
                     </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    )
}

export default List;