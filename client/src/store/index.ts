import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import flowBuilderReducer from "reducers/flow-builder.reducer";
import segmentReducer from "reducers/segment.reducer";

const rootReducer = combineReducers({
  flowBuilder: flowBuilderReducer,
  segment: segmentReducer,
});

export default rootReducer;

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
