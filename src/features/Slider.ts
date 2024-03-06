import { createSlice, current } from '@reduxjs/toolkit';
import { postProfils } from "../utils/data"

export interface Istate {
    popularPeopleList: {
        id: number,
        bgImgUrl: string,
        profileImgUrl: string,
        name: string,
        designation: string,
        talks: string,
        followers: number,
        followed: boolean
    }[],
    profileUrl: string,
    userData: {
        id: number,
        name: string,
        followers: string,
        image: string,
        text: string
    }[]

}

const initialState: Istate = {
    profileUrl: '',
    userData: postProfils,
    popularPeopleList: [{
        id: 0,
        bgImgUrl: "",
        profileImgUrl: "",
        name: "",
        designation: "",
        talks: "",
        followers: 0,
        followed: false,
    }]

}

export const Slider = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        folowingPeopleRed: (state, action) => {
        },
        removingPeopleRed: (state, action) => {
        },

        uploadUrl: (state, action) => {
            state.profileUrl = action.payload;
        },
        addPost: (state, action) => {
            let postData = {
                ...state.userData, text: action.payload, image: `https://source.unsplash.com/random/sig=${Math.floor(
                    Math.random() * 100
                )}`,
                id: state.userData.length + 1,
                followers: "12",
                name: 'sriram',
            };
            state.userData.unshift(postData);
        }
    }
});

export const { folowingPeopleRed, removingPeopleRed, uploadUrl, addPost } = Slider.actions
export default Slider.reducer;