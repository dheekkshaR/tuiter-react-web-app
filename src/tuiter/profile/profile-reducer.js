import {createSlice} from "@reduxjs/toolkit";

let userProfile = {
    firstName: 'Jose',
    lastName: 'Prof',
    handle: '@jose',
    profilePicture: '../../images/nasa.png',
    bannerPicture: '../../images/flowers.webp',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and '
        + 'likes are not endorsements.',
    website: 'youtube.com/stevejobs',
    location: 'San Francisco, CA',
    dateOfBirth: '1955-02-24',
    dateJoined: '04/2009',
    followingCount: 340,
    followersCount: 223,
    numberOfTweets: 7000
};

const profileSlice = createSlice({
    name: 'userProfile',
    initialState: userProfile,
    reducers: {
        editProfile(state, action) {
            return action.payload;
        }
    }
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;