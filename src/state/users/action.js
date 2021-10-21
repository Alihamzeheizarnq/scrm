import { USER_FETCH_SUCCEEDED, USER_FETCH_FAILED, USER_FETCH_REQUESTED } from "./action-type";

export const UserFetchAction = (userId) => ({
    type: USER_FETCH_REQUESTED,
    payload: userId
});
export const UserFetchSuccesAction = (user) => ({
    type: USER_FETCH_SUCCEEDED,
    payload: user
});
export const UserFetchErrorAction = (error) => ({
    type: USER_FETCH_FAILED,
    payload: error
});