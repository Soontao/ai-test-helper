import { exec } from 'child_process';
import { Configuration, CreateChatCompletionRequest, OpenAIApi } from "openai";
import { inspect } from "util";
import * as vscode from "vscode";
import path = require("path");


export async function getSymbolList(uri?: vscode.Uri): Promise<Array<vscode.SymbolInformation>> {
  // Get the symbols in the current file
  return vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', uri ?? vscode.window.activeTextEditor.document.uri);
}

export function getModel() {
  return vscode.workspace.getConfiguration("theosun.ai.unit.test.helper").get("model") as string;
}
export async function validConfiguration() {
  // TODO: more validation
  const { apiKey, baseUrl } = vscode.workspace.getConfiguration("theosun.ai.unit.test.helper");

  if (apiKey === "") {
    await vscode.window.showErrorMessage("apiKey must be maintained");
    return false;
  }

  if (baseUrl === "") {
    await vscode.window.showErrorMessage("baseUrl must be maintained");
    return false;
  }

  return true;
}

export async function getOpenAI(): Promise<OpenAIApi | undefined> {
  if (await validConfiguration()) {
    const { apiKey, baseUrl } = vscode.workspace.getConfiguration("theosun.ai.unit.test.helper");
    return new OpenAIApi(new Configuration({ apiKey, basePath: baseUrl }));
  }
}

export async function aiResponse(request: Pick<CreateChatCompletionRequest, 'messages'>): Promise<string | undefined> {
  try {
    const api = await getOpenAI();
    const { model } = vscode.workspace.getConfiguration("theosun.ai.unit.test.helper");
    const response = await api.createChatCompletion({ model, ...request, temperature: 0 });
    return response.data.choices[0].message.content;
  } catch (error: any) {
    await vscode.window.showErrorMessage(`api failed with error: ${error?.response?.data?.error?.message ?? inspect(error)}`);
    return;
  }

}

export async function exists(file: vscode.Uri): Promise<boolean> {
  // @ts-ignore
  return vscode.workspace.fs.stat(file).then(() => true).catch(err => false);
}

export function currentFileInformation() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) { return; }
  const document = editor.document;

  const sourceFile = document.fileName;
  const sourceDir = path.dirname(sourceFile);
  const sourceRawFileName = path.basename(sourceFile, path.extname(sourceFile));
  const rawContent = document.getText();
  const fileType = document.languageId;

  const mdCodeContent = `\`\`\`${fileType}\n${rawContent}\`\`\``;

  // Get the file type
  return { fileType, document, sourceDir, sourceRawFileName, rawContent, mdCodeContent };
}

interface CommandResult { success: boolean, error?: Error, stderr?: string, stdout?: string }

export async function runCommand(command: string): Promise<CommandResult> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      const success = error === undefined;
      resolve({ success, error, stderr, stdout });
    });
  });
}

export function firstCodeBlock(content: string = '') {
  return /\`\`\`.*\n([\s\S]*)\`\`\`/gm.exec(content)?.[1];
}