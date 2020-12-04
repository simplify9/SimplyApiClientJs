import ClientConfigModel from "../Models/ClientConfig";


let ClientConfig: ClientConfigModel = {
    baseUrl: '',
};

export const SetOnAuthFail = (callBack:()=>any) => {ClientConfig = {
                                                      ...ClientConfig,
                                                      onAuthFail: callBack,
                                                    };

};

export const SetBaseUrl = (url: string) => (ClientConfig = {
    ...ClientConfig,
    baseUrl:url
});

export const SetAuthType = (authType?: 'bearer') => (ClientConfig = {
    ...ClientConfig,
    authType
});

export const SetGetBearer = (callBack: ()=>any) => (ClientConfig = {
    ...ClientConfig,
    getBearer:callBack
});

export const SetRefreshAuth = (callBack: ()=>any) => (ClientConfig = {
    ...ClientConfig,
    refreshAuth:callBack
});

export const SetClientConfig = (config: ClientConfigModel) => (ClientConfig = config);


export const GetOnAuthFail = () => ClientConfig.onAuthFail;
export const GetBaseUrl = () => ClientConfig.baseUrl;

const GetClientConfig = () => ClientConfig;

export default GetClientConfig;
