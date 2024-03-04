import { ComponentType } from "react";
import { useParams } from "react-router-dom";
import { defaultHero, characters } from "../utils/constants";
import ErrorPage from "../components/ErrorPage";

export const withErrorPage = (Component: ComponentType<any>) => {
    return (props: any) => {
        const { heroId } = useParams<{ heroId: string }>();

        if (!characters[heroId || defaultHero]) {
            return <ErrorPage />;
        }

        return <Component {...props} />;
    };
};