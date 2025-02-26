export const isCompatibleTheme = (file) => {
    const allowedTypes = ['application/zip', 'application/x-zip-compressed'];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (!allowedTypes.includes(file.type)) {
        return { isValid: false, message: 'Invalid file type. Please upload a ZIP file.' };
    }

    if (file.size > maxSize) {
        return { isValid: false, message: 'File size exceeds the 5 MB limit.' };
    }

    return { isValid: true, message: 'File is compatible.' };
};