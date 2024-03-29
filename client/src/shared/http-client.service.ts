import Axios from "axios";
import LoggerService from "./logger";
import { StaticHelper } from "./static-helper";
import history from "./history";
import { Constants } from "./constants";

export default class HttpClientService {
  private static _instance: HttpClientService;
  public static getInstance() {
    if (!this._instance) {
      this._instance = new HttpClientService();
    }
    return this._instance;
  }
  constructor() {}

  static get Instance(): HttpClientService {
    return this.getInstance();
  }

  log: LoggerService = LoggerService.getInstance();
  constants: Constants = Constants.getInstance();

  get<T>(url: string) {
    let completeURL = this.constants.BaseURL + url;
    return Axios.get(completeURL, {
      withCredentials: true
    })
      .then((res: any) => {
        this.log.debug("url" + url + "\nres:" + JSON.stringify(res.data));
        if (res) {
          let data = res.data;
          if (!data) {
            data;
          }
          if (!data.message) {
            data.message = "";
          }
          if (url != this.constants.EndPoints.GetAuthUser) {
            if (
              Constants.Instance.RedirectToLoginMessages.indexOf(
                data.message.toUpperCase()
              ) > -1
            ) {
              StaticHelper.navigateToLogin();
              StaticHelper.sleep(5 * 1000);
            }
          }
          return data;
        }
        return {};
      })
      .catch(error => {
        this.log.debug("url: ", url, error);
        throw error;
      });
  }

  post<T>(url: string, data: any, options?: any) {
    let requestHeaders = { "Content-Type": "application/json" };
    let body: any = {
      model: data
      // ip: global.ip,
    };
    if (url == this.constants.EndPoints.PostAuthLogin) {
      //requestHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      body = data;
      //  formurlencoded(data, {
      //     ignorenull : true,
      //     skipIndex : true,
      //     sorted : true
      //   })
    }
    body = {
      ...body,
      lang: null
    };
    url = this.constants.BaseURL + url;
    return Axios.post(url, body, {
      headers: requestHeaders,
      withCredentials: true
    })
      .then((res: any) => {
        this.log.debug(
          "url: " +
            url +
            "\nbody: " +
            JSON.stringify(body) +
            "\nres: " +
            JSON.stringify(res.data)
        );
        if (res) {
          let data = res.data;
          if (!data) {
            data;
          }
          if (!data.message) {
            data.message = "";
          }
          if (
            url.indexOf(
              this.constants.EndPoints.PostAccountPasswordRecoveryToken
            ) < 0
          ) {
            if (
              Constants.Instance.RedirectToLoginMessages.indexOf(
                data.message.toUpperCase()
              ) > -1
            ) {
              throw "redirect";
            }
          }
          return data;
        }
        return {};
      })
      .catch(error => {
        if (error == "redirect") {
          StaticHelper.navigateToLogin();
          return;
        }
        this.log.debug("url: ", url, error);
        throw error;
      });
  }

  postFile<T>(url: string, data: FormData, onUploadProgress?, options?: any) {
    if (!options) {
      options = {};
    }
    // let params = new HttpParams();
    options = {
      ...options,
      // params,
      // headers: requestHeaders,
      reportProgress: true,
      observe: "events",
      onUploadProgress: onUploadProgress
    };
    // options.headers = requestHeaders;
    // options.withCredentials = true;
    // data.append('lang', null);
    // data.append('ip', this.globals.ip);
    url = this.constants.BaseURL + url;
    this.log.debug("postFile: url" + url + "\nbody" + JSON.stringify(data));
    return Axios.post(url, data, options)
      .then((res: any) => {
        if (res) {
          let data = res.data;
          if (!data) {
            data;
          }
          if (!data.message) {
            data.message = "";
          }
          if (
            Constants.Instance.RedirectToLoginMessages.indexOf(
              data.message.toUpperCase()
            ) > -1
          ) {
            StaticHelper.navigateToLogin();
          }
          return data;
        }
        return {};
      })
      .catch(error => {
        this.log.debug(error);
        throw error;
      });
  }
}
