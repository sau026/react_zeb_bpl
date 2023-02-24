import { createTodos } from "@redux/actions/todoData"
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';

const Create: React.FC = (props) => {

    const dispatch = useDispatch();

    const formData = useFormik({
        initialValues: {
            userId: '',
            body: '',
            title: '',
        },
        onSubmit: values => {
            dispatch<any>(createTodos(values))
        }
    })

    return (
        <div>
            <form onSubmit={formData.handleSubmit}>
                <label>User ID</label>
                <input id="userId" type="number" name="userId"
                    onChange={formData.handleChange}
                    value={formData.values.userId} />

                <label>Title</label>
                <input id="title" type="text" name="title"
                    onChange={formData.handleChange}
                    value={formData.values.title} />

                <label>Body</label>
                <input id="body" type="text" name="body"
                    onChange={formData.handleChange}
                    value={formData.values.body} />

                &nbsp; <button type="submit">Create Todo</button>
            </form>
        </div>
    )
}

export default Create;