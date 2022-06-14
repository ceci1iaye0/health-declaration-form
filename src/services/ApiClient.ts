import {
  getHeaders,
  getPromiseResponse,
  modifyHeaders,
  updateBodyOrHeader,
} from "./apiClientHelper";

class ApiClient {
  async get(url: string | string, body?: any, options?: any) {
    return this.request("GET", url, body, options);
  }

  async post(url: string | string, body?: any, options?: any) {
    return this.request("POST", url, body, options);
  }

  async put(url: string | string, body?: any, options?: any) {
    return this.request("PUT", url, body, options);
  }

  async delete(url: string | string, body?: any, options?: any) {
    return this.request("DELETE", url, body, options);
  }

  async patch(url: string | string, body?: any, options?: any) {
    return this.request("PATCH", url, body, options);
  }

  async request(
    method: string,
    url: string | string,
    body?: any,
    options?: any
  ) {
    const headers = getHeaders();

    const currentBody = updateBodyOrHeader(body, headers);

    const extraOptions = modifyHeaders(options, headers);

    return fetch(url.toString(), {
      body: currentBody,
      method,
      headers,
      ...extraOptions,
    }).then(
      (response) =>
        new Promise((resolve, reject) => {
          const type = response.headers.get("content-type");

          const promise = getPromiseResponse(response, type);

          promise.then((data: any) => {
            if (response.status < 400) {
              resolve(data);
            } else {
              reject(data);
            }
          });
        })
    );
  }
}

export default new ApiClient();
