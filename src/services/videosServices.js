import httpsRequest from '~/untils/httpsRequest';

const path = 'videos';

export const loadVideos = async (type, page = '1') => {
    try {
        const dataResponse = await httpsRequest.get(path, {
            params: {
                type,
                page,
            },
        });

        return dataResponse.data;
    } catch (error) {
        console.log(error);
    }
};
