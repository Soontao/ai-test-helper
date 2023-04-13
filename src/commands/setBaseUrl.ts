import * as vscode from "vscode";
import { KEY_BASE_URL } from "../constants";

export async function setBaseUrl(context: vscode.ExtensionContext) {
  const key = await vscode.window.showInputBox({ title: "input a valid OpenAI API base url" });
  if (key) {
    await context.secrets.store(KEY_BASE_URL, key);
    await vscode.window.showInformationMessage("API Base URL Configured");
  }
}