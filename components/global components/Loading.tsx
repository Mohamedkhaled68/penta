import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = ({
    width,
    height,
    color = "#8F9BB7",
}: {
    width: string;
    height: string;
    color?: string;
}) => {
    return (
        <TailSpin
            visible={true}
            height={height}
            width={width}
            color={color}
            ariaLabel="tail-spin-loading"
            radius="1"
        />
    );
};

export default Loading;
