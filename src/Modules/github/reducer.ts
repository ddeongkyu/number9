import { createReducer } from "typesafe-actions";
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from "../../lib/reducerUtils";
import { getUserProfileAsync } from "./actions";
import { GithubAction, GithubState } from "./types";

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};
const github = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  transformToArray(getUserProfileAsync),
  createAsyncReducer(getUserProfileAsync, "userProfile")
);
// [GET_USER_PROFILE]: (state) => ({
//   ...state,
//   userProfile: asyncState.load(),
// }),
// [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//   ...state,
//   userProfile: asyncState.success(action.payload),
// }),
// [GET_USER_PROFILE_ERROR]: (state, action) => ({
//   ...state,
//   userProfile: asyncState.error(action.payload),
// }),

export default github;
