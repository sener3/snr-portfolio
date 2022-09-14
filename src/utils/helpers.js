export const cls = (...args) => {
    return args.filter(Boolean).join(" ");
};

export const handleBannerPosition = () => {
    const banner = document.getElementById("banner");
    const container = document.getElementById("container-projects");

    if (container && banner) {
        const bannerHeight = banner.offsetHeight;
        const containerPaddingTop = window.getComputedStyle(container, null).getPropertyValue("padding-top");
        const containerPaddingTopWoUnit = Number(containerPaddingTop.replace("px", ""));

        const marginTopValue = containerPaddingTopWoUnit + bannerHeight / 2;

        banner.style.marginTop = `-${marginTopValue}px`;
    }
};
