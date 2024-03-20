import { configureStore } from "@reduxjs/toolkit";
import {
  userReducer,
  allUsersReducer,
  userProfileReducer,
  userPostsReducer,
  myPostsReducer,
  postOfFollowingReducer,
  likeReducer,
} from "./reducers";


const store = configureStore({
  reducer: {
    user: userReducer,
    allUsers: allUsersReducer,
    userProfile: userProfileReducer,
    userPosts: userPostsReducer,
    myPosts: myPostsReducer,
    postOfFollowing: postOfFollowingReducer,
    like: likeReducer,
  },
});

export default store;
