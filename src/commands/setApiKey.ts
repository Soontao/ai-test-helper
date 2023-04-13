import * as vscode from "vscode";
import { KEY_API_KEY } from "../constants";

export async function setApiKey(context: vscode.ExtensionContext) {
  const key = await vscode.window.showInputBox({ title: "input a valid OpenAI api key here" });
  if (key) {
    await context.secrets.store(KEY_API_KEY, key);
    await vscode.window.showInformationMessage("API Key Configured");
  }
}