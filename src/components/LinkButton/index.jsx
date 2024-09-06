const LinkButton = ({ links = [], className, label, href = '#', img, children, ...props }) => {
    if (links.length > 0) {
        return (
            <>
                {links.map((link, index) => (
                    <a key={index} {...props} className={`link-button-n ${className}`} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </>
        );
    }

    return (
        <a {...props} className={`link-button-n ${className}`} href={href}>
            {children && children}
            {label}
        </a>
    );

};

export default LinkButton;
