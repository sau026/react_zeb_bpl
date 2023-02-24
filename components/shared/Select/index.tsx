/** @jsxImportSource @emotion/react */
import { ChangeEvent, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { capitalize } from "@utils/general";
import * as styles from "./styles";

export interface selectObj {
    status: string;
}

export interface inputProps {
    label?: string;
    value?: Array<selectObj>;
    id?: string;
    name?: string;
    invalid?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?:
    | ((event: ChangeEvent<HTMLInputElement>) => void)
    | ((event: ChangeEvent<HTMLTextAreaElement>) => void);
}

const Select = (props: inputProps) => {
    const {
        label,
        value,
        id,
        name,
        onChange,
        invalid,
        disabled,
        placeholder
    } = props;

    return (
        <div>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                {value?.map((e:selectObj)=>{
                    return <option value={e.status}>{capitalize(e.status)}</option>
                })}
            </Form.Select>
        </div>
    )
}

export default Select;