import { ReactFormConst } from "./reactForm.const";

export const submitCreator = (payload) => ({
    type: ReactFormConst.Submit,
    payload,
})