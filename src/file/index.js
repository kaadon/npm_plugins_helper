export const fileToBuffer = (file) => {
    return new Promise((resolve, reject) => {
        try {
            //逻辑代码
            const reader = new FileReader();
            reader.onload = function (event) {
                resolve(typeof Buffer !== 'undefined' ? new Buffer(event.target.result) : new Uint8Array(event.target.result));
            };
            reader.onerror = function (error) {
                reject(error);
            };
            reader.readAsArrayBuffer(file);
        } catch (e) {
            reject(e)
        }
    });
}

export const readBlobAsText = (blobUrl) => {
    return new Promise((resolve, reject) => {
        // 从 Blob URL 创建一个 Blob 对象
        fetch(blobUrl)
            .then(response => response.blob())
            .then(blob => {
                // 使用 FileReader 读取 Blob 内容
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsText(blob); // 或者 reader.readAsDataURL(blob) 读取为数据 URL
            })
            .catch(reject);
    });
}