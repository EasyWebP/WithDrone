/**
 * 초기 값의 타입을 지정해주고,
 * action에 PayloadAction 제네릭 타입 추가를 해준다.
 *
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Like {
  like: boolean;
}
const initialState: Like = {
  like: false,
};

//state는 이 상태의 현재 상태 값을 의미한다
//action은 실제 페이지 컴포넌트에서 전달해준 값을 의미한다

const likeSlice = createSlice({
  name: "like",
  initialState: initialState,
  reducers: {
    setLikeOrder: (state, action: PayloadAction<boolean>) => {
        state.like = action.payload;
    },
  },
});

//위에서 선언해준 counterSlice의 reducer를 export해준다
export const { setLikeOrder } = likeSlice.actions;
export default likeSlice.reducer;
//이제 이걸다른 컴포턴트에서 dispatch로 사용한다.
