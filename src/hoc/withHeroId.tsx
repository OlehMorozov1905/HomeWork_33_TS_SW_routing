import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { defaultHero, characters } from "../utils/constants";
import { SWContext } from "../utils/context";

  

export const withHeroId = (Component: React.FC<any>, route: string) => (props: any) => {

    const navigate = useNavigate();
    
    let {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);
    heroId = characters[heroId] ? heroId : defaultHero;

    useEffect(() => {
     navigate(`/${route}/${heroId}`);
        changeHero(heroId);
    }, [heroId])

    return <Component heroId={heroId} {...props} />
}

