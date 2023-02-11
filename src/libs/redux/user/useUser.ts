import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useUserSelector() {
    const { user } = useSelector((state: RootState) => state.user)

    return user
}
