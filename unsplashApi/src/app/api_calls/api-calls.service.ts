import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CLIENT_ID } from "../../env";
@Injectable({
  providedIn: "root",
})
export class ApiCallsService {
  constructor(private httpClient: HttpClient) {}
  page = 1;
  per_page = 40;
  getImage() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${CLIENT_ID}`
    );
  }
}
