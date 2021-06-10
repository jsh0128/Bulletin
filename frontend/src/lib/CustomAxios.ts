import axios, { AxiosResponse } from "axios";
import AxiosType from "util/enums/AxiosType";
import SERVER from "config/config.json";

interface CustomAxios {
  url: string;
  body?: object;
  configCheck: boolean;
  type: AxiosType;
}

const CustomAxios = ({ url, body, configCheck, type }: CustomAxios) => {
  if (configCheck) {
    let config = {};
    if (localStorage.getItem("access_token")) {
      config = {
        headers: {
          token: `${localStorage.getItem("access_token")}`,
        },
      };
    }
    return asyncProcess(url, body, type, config);
  } else {
    return asyncProcess(url, body, type);
  }
};

const asyncProcess = async (
  url: string,
  body: object,
  type: AxiosType,
  config?: object
) => {
  switch (type) {
    case AxiosType.GET: {
      const { data }: AxiosResponse<any> = await axios.get(
        `${SERVER}${url}`,
        config
      );
      return data;
    }
    case AxiosType.POST: {
      const { data }: AxiosResponse<any> = await axios.post(
        `${SERVER}${url}`,
        body,
        config
      );
      return data;
    }
    default:
      return;
  }
};

export default CustomAxios;
