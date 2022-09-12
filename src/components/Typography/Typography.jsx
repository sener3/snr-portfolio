import "../../styles/components/_typography.scss";

import { cls } from "../../utils/helpers";

const Typography = (props) => {
    const { id, className, children, variant } = props;

    const Tag = variant;

    return (
        <Tag id={(id && id) || ""} className={cls((className && className) || "")}>
            {children}
        </Tag>
    );
};

export default Typography;
