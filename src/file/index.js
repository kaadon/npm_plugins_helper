export const fileCp = (oldPath,newPath) => {
    try {
        fs.renameSync(oldPath, newPath);
    } catch (err) {
        throw err
    }
}