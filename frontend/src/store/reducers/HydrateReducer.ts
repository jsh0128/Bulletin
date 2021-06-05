import { IHydrateState } from "store/types/HydrateType";
import { createReducer } from "typesafe-actions";

const HydrateInitialState: IHydrateState = {
  isRendered: false,
};

export const HydrateReducer = createReducer<IHydrateState>(HydrateInitialState);
