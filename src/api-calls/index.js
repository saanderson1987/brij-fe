const fetchDataWithCallback = async (fetchData, cb) => {
    const data = await fetchData();
    cb(data);
}

export const getProductDataById = (id, cb) => fetchDataWithCallback(async () => {
    try {
        const res = await fetch(`https://fir-hosting-app-clip.web.app/.well-known/api/${id}.json`);
        if (res.status === 404) {
            return { error: `Product with id "${id}" not found.`};
        }
        if (res.status === 200) {
            return (await res.json()).tag;
        }
        throw new Error();
    } catch (e) {
        console.log(e);
        return { error: 'Error fetching data' };
    }
}, cb);