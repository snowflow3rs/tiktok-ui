import * as httpsRequest from '~/untils/httpsRequest';
let path = 'users/search';
export const search = async (q, type = 'less', page = null) => {
    try {
        const response = await httpsRequest.get(path, {
            params: {
                q,
                type,
                page,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
