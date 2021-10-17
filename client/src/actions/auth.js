import * as api from '../api'

export const signIn = (formData, history) => async (dispatch) => {
    try {
        // login the user
        const { data} = await api.signIn(formData);

        dispatch({ type: 'AUTH', data })

        history.push('/')
    } catch (error) {
        console.log(error)
    }

}
export const signUp = (formData, history) => async (dispatch) => {
    try {
        // signUp the user
        const { data} = await api.signUp(formData);

        dispatch({ type: 'AUTH', data })

        history.push('/')
    } catch (error) {
        console.log(error)
    }

}