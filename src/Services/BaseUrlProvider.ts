let BaseUrl = '';

export const SetBaseUrl = (url: string) => (BaseUrl = url);
const GetBaseUrl = () => BaseUrl;

export default GetBaseUrl;
