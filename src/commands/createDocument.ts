import * as vscode from 'vscode';
import { aiResponse, currentFileInformation, validConfiguration } from './utils';
import { SYSTEM_MSG_EXPERT_DEVELOPER } from '../prompts/coding';

export async function createDocument(context: vscode.ExtensionContext) {
  if (!await validConfiguration(context)) { return; }
  const editor = vscode.window.activeTextEditor;
  if (!editor) { return; }

  const { fileType, sourceDir, sourceRawFileName, mdCodeContent } = currentFileInformation();

  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Window,
      cancellable: false,
      title: 'Creating Document'
    },
    async () => {
      await aiResponse(
        {
          messages: [
            { role: "system", content: SYSTEM_MSG_EXPERT_DEVELOPER }
          ]
        },
        context
      );
    }
  );
}