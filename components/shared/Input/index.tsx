/** @jsxImportSource @emotion/react */
import { ChangeEvent, useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import * as styles from "./styles";

export interface inputProps {
    label?: string;
    value?: string | number;
    type?: string;
    id?: string;
    name?: string;
    isFocused?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    onChange?:
    | ((event: ChangeEvent<HTMLInputElement>) => void)
    | ((event: ChangeEvent<HTMLTextAreaElement>) => void);
}

const Input = (props: inputProps) => {
    const {
        label,
        value,
        id,
        type,
        name,
        onChange,
        isFocused,
        invalid,
        disabled,
        maxLength,
        placeholder
    } = props;

    const [focused, setFocused] = useState<boolean | undefined>(false);

    useEffect(() => setFocused(isFocused), [isFocused]);
    const onFocusInput = () => {
        setFocused(true);
    };

    const onBlurInput = () => {
        setFocused(false);
    };

    return (
        <div>
            <Form.Group css={styles.formGroup}>
                <Form.Label
                    css={[styles.formLabel]}>
                    {label}
                </Form.Label>
                <InputGroup
                    css={[
                        styles.inputGroup,
                        focused ? styles.focusedInputGroup : null,
                        // invalid ? styles.invalidInputGroup : null
                    ]}>
                    <Form.Control
                        type={type || 'text'}
                        placeholder={placeholder}
                        name={name}
                        css={[styles.formControl]}
                        className="form-control"
                        value={value}
                        onChange={onChange}
                        onFocus={onFocusInput}
                        onBlur={onBlurInput}
                        disabled={disabled}
                        maxLength={maxLength}
                    />
                    <InputGroup.Text id={id} css={styles.inputGroupText}>@</InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </div>
    )
}

export default Input;