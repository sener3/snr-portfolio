import { cls } from "../../utils/helpers";

const Box = (props) => {
    const { id, className, children } = props;

    return (
        <div id={(id && id) || ""} className={cls((className && className) || "")}>
            {children}
        </div>
    );
};

export default Box;
