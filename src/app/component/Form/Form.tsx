import { addAction } from "./addAction"

export const Form = () => {
    return (
        <form action={addAction}>
            <input name="title" type="text" />
            <input type="submit" />
        </form>
    )
}