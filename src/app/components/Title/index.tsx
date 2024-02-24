import { ReactNode } from "react";
import './title.scss';

interface IProps {
    children: ReactNode;
}

export const Title = ({children}: IProps): JSX.Element => {
    return (
        <h3 className="page-title">
            {children}
        </h3>
    )
}