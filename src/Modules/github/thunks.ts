import { getUserProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfileAsync } from "./actions";

// export function getUserProfileThunk(username: string) {
//   return async (dispatch: Dispatch) => {
//     const { request, success, failure } = getUserProfileAsync;
//     dispatch(request());
//     try {
//       const useProfile = await getUserProfile(username);
//       dispatch(success(useProfile));
//     } catch (e: any) {
//       dispatch(failure(e));
//     }
//   };
// }

export const getUserProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile
);
