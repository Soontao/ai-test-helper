import * as vscode from "vscode";
import { KEY_BASE_URL } from "../constants";

export async function setBaseUrl(context: vscode.ExtensionContext) {
  let baseUrl = await vscode.window.showInputBox({
    title: "input a valid OpenAI API base url",
    value: await context.secrets.get(KEY_BASE_URL)
  });
  if (baseUrl) {
    if (baseUrl.endsWith("/")) {
      baseUrl = baseUrl.slice(0, baseUrl.length - 1);
    }
    if (!baseUrl.endsWith("/v1")) {
      baseUrl = `${baseUrl}/v1`;
    }
    await context.secrets.store(KEY_BASE_URL, baseUrl);
    await vscode.window.showInformationMessage("API Base URL Configured");
  }
}