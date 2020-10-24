type ClientConfig = {
  baseUrl: string;
  getBearer?: () => any;
  refreshAuth?: () => any;
  authType?: 'bearer'
  debug?:boolean
};

export default ClientConfig;
