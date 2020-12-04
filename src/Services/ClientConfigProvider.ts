import ClientConfigModel from "../Models/ClientConfig";


let ClientConfig: ClientConfigModel = {
    baseUrl: '',
};

export const SetOnAuthFail = (callBack:()=>any) => {ClientConfig = {
                                                      ...GetClientConfig(),
                                                      onAuthFail: callBack,
                                                    };

};

export const SetBaseUrl = (url: string) => (ClientConfig = {
    ...GetClientConfig(),
    baseUrl:url
});

export const SetAuthType = (authType?: 'bearer') =>
         (ClientConfig = {
           ...GetClientConfig(),
           authType,
         });

export const SetGetBearer = (callBack: () => any) =>
         (ClientConfig = {
           ...GetClientConfig(),
           getBearer: callBack,
         });

export const SetRefreshAuth = (callBack: () => any) =>
         (ClientConfig = {
           ...GetClientConfig(),
           refreshAuth: callBack,
         });

export const SetClientConfig = (config: ClientConfigModel) => (ClientConfig = config);


export const GetOnAuthFail = () => ClientConfig.onAuthFail;
export const GetBaseUrl = () => ClientConfig.baseUrl;

const GetClientConfig = () => ClientConfig;

export default GetClientConfig;
