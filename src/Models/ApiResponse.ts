type ApiResponse = {
  succeeded: boolean;
  status: number;

  data?: any;
  error?: string;
};

export default ApiResponse;
