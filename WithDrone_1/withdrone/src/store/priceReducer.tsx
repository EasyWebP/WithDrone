/**
 * 초기 값의 타입을 지정해주고,
 * action에 PayloadAction 제네릭 타입 추가를 해준다.
 *
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Price {
  price: boolean;
}
const initialState: Price = {
    price: false,
};

//state는 이 상태의 현재 상태 값을 의미한다
//action은 실제 페이지 컴포넌트에서 전달해준 값을 의미한다

const priceSlice = createSlice({
  name: "price",
  initialState: initialState,
  reducers: {
    setPriceOrder: (state, action: PayloadAction<boolean>) => {
        state.price = action.payload;
    },
  },
});

//위에서 선언해준 counterSlice의 reducer를 export해준다
export const { setPriceOrder } = priceSlice.actions;
export default priceSlice.reducer;
//이제 이걸다른 컴포턴트에서 dispatch로 사용한다.
