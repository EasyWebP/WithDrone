/**
 * 초기 값의 타입을 지정해주고,
 * action에 PayloadAction 제네릭 타입 추가를 해준다.
 *
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Tab {
  selectedTab: number;
}
const initialState: Tab = {
  selectedTab: 1,
};

//state는 이 상태의 현재 상태 값을 의미한다
//action은 실제 페이지 컴포넌트에서 전달해준 값을 의미한다

const tabInfoSlice = createSlice({
  name: "tabInfo",
  initialState: initialState,
  reducers: {
    setSelectTab(state, action) {
      state.selectedTab = action.payload;
    },
    deleteSelectTab(state) {
      return initialState;
    },
  },
});

//위에서 선언해준 counterSlice의 reducer를 export해준다
export default tabInfoSlice.reducer;
export const { setSelectTab, deleteSelectTab } = tabInfoSlice.actions;
//이제 이걸다른 컴포턴트에서 dispatch로 사용한다.
