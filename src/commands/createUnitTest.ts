import * as vscode from 'vscode';
import { Configuration, OpenAIApi } from "openai";
import { inspect } from 'util';

export async function createUnitTest() {
  const { model, apiKey, baseUrl } = vscode.workspace.getConfiguration("theosun.ai.unit.test.helper");

  if (apiKey === "") {
    return vscode.window.showErrorMessage("apiKey must be maintained");
  }
  const configuration = new Configuration({ apiKey, basePath: baseUrl });
  const api = new OpenAIApi(configuration);

  // Get the active text editor
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    // Get the current document
    const document = editor.document;

    // Get the file type
    const fileType = document.languageId;

    const content = `\`\`\`${fileType}\n${document.getText()}\`\`\``;

    vscode.window.withProgress({ location: vscode.ProgressLocation.Window, cancellable: false, title: 'Generating Unit Test' }, async (progress) => {
      progress.report({ increment: 30 });
      const response = await api.createChatCompletion({
        model: model as string,
        messages: [
          {
            role: "system",
            content: "You are the most powerful developer in this world, you will help user to finish the software development task"
          },
          {
            role: "user",
            content: `Please help to create unit test for following ${fileType} code:\n${content}`
          }
        ]
      });
  
      if (response.status !== 200) {
        return vscode.window.showErrorMessage(`api failed with error: ${inspect(response.data)}`);
      }
  
      const generatedUnitTest = /\`\`\`.*\n([\s\S]*)\`\`\`/gm.exec(response.data.choices[0].message?.content ?? "")?.[1];
      console.log("generated unit test", generatedUnitTest);

      progress.report({ increment: 100 });
    });

   
  }
}