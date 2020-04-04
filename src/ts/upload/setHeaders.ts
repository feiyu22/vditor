export const setHeaders = (vditor: IVditor, xhr: XMLHttpRequest) => {
    if (vditor.options.upload.headers) {
        Object.keys(vditor.options.upload.headers).forEach((key) => {
            xhr.setRequestHeader(key, vditor.options.upload.headers[key]);
        });
    }
};
