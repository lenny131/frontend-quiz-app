class Option {
    key: string;
    useImageIcon: boolean;
    iconContent: string;
    iconBackgroundColor: string
    value: string;

    constructor(key: string, useImageIcon: boolean, iconContent: string, iconBackgroundColor: string, value: string) {
        this.key = key;
        this.useImageIcon = useImageIcon;
        this.iconContent = iconContent;
        this.iconBackgroundColor = iconBackgroundColor;
        this.value = value;
    }
}

export default Option;