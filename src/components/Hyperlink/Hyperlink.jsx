function Hyperlink(props) {
    const { className, href, target, children } = props;

    return (
        <a className={(className && className) || ""} href={href} target={target}>
            {children}
        </a>
    );
}

export default Hyperlink;
