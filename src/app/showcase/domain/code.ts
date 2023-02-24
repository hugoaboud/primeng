export interface Code {
    basic?: string;
    html?: string;
    typescript?: string;
    scss?: string;
    data?: string;
    module?: string;
    routeFiles?: object;
    component?: string;
    service?: string[];
    imports?: string[];
    extFiles?: ExtFile[];
}

export interface ExtFile {
    path: string;
    content: string;
}
