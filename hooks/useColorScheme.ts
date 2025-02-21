import { useContext } from "react";
import { ThemeContext } from "@/store/mycontext";
export const useColorScheme = () => {
    const { theme } = useContext(ThemeContext);
    return theme
};
