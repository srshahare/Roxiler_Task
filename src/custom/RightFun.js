import { useSelector } from 'react-redux'

export function RightFun() {
    const info = useSelector(state => state.user.user)
    const todo = useSelector(state => state.user.todoId)

    return {info, todo}
}
