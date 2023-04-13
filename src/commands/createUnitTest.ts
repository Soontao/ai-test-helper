import * as vscode from 'vscode';
import { Configuration, OpenAIApi } from "openai";
import { inspect } from 'util';
import path = require('path');

export async function createUnitTest() {
  const { model, apiKey, baseUrl } = vscode.workspace.getConfiguration("theosun.ai.unit.test.helper");

  if (apiKey === "") {
    return vscode.window.showErrorMessage("apiKey must be maintained");
  }

  const api = new OpenAIApi(new Configuration({ apiKey, basePath: baseUrl }));

  // Get the active text editor
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    // Get the current document
    const document = editor.document;

    const sourceFile = document.fileName;
    const sourceDir = path.dirname(sourceFile);
    const sourceRawFileName = path.basename(sourceFile, path.extname(sourceFile));

    // Get the file type
    const fileType = document.languageId;

    const content = `\`\`\`${fileType}\n${document.getText()}\`\`\``;

    vscode.window.withProgress({ location: vscode.ProgressLocation.Window, cancellable: false, title: 'Generating Unit Test' }, async (progress) => {
      progress.report({ increment: 30 });
      try {
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
        // extract first group of AI response
        const generatedUnitTest = /\`\`\`.*\n([\s\S]*)\`\`\`/gm.exec(response.data.choices[0].message?.content ?? "")?.[1];

        let outputUnitTestName = '';

        switch (fileType) {
          case 'go':
            outputUnitTestName = path.join(sourceDir, `${sourceRawFileName}_test.go`);
            break;
          default:
            break;
        }

        // @ts-ignore
        const existed = await vscode.workspace.fs.stat(vscode.Uri.file(outputUnitTestName)).then(() => true).catch(err => false);
        if (existed) {
          const answer = await vscode.window.showWarningMessage("The unit test file already existed, do you want to overwrite that?", 'Yes', 'No');
          if (answer === 'No') {
            return;
          }
        }
        
        await vscode.workspace.fs.writeFile(vscode.Uri.file(outputUnitTestName), Buffer.from(generatedUnitTest, 'utf-8'));

        // Create a new text document in memory
        const document = await vscode.workspace.openTextDocument(outputUnitTestName);

        // Show the text document in the right-hand editor pane
        await vscode.window.showTextDocument(document, { viewColumn: vscode.ViewColumn.Two });

      } catch (error: any) {
        return vscode.window.showErrorMessage(`api failed with error: ${error?.response?.data?.error?.message ?? inspect(error)}`);
      }

      progress.report({ increment: 100 });
    });


  }
}