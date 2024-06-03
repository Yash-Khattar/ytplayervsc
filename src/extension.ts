import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("yt", () => {
      const panel = vscode.window.createWebviewPanel(
        "yt", // Identifies the type of the webview. Used internally
        "YouTube", // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in
        {
          enableScripts: true // Enable JavaScript in the webview
        }
      );
      panel.webview.html = getWebViewContent();
    })
  );
}

export function getWebViewContent(){
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Search</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 10px;
        }
        #searchBar {
            margin-bottom: 20px;
        }
        iframe {
            width: 100%;
            height: 315px;
        }
    </style>
</head>
<body>
    <div id="searchBar">
        <input type="text" id="searchInput" placeholder="Enter YouTube Video ID">
        <button onclick="loadVideo()">Search</button>
    </div>
    <iframe width="383" height="200" src="https://www.youtube.com/embed/iD6u_2iNnu0?list=PLV8vIYTIdSnZYVUJ6duL_ulTsmVQmmd74" title="L2: Symbol, Alphabet, String, Language, Power of Sigma Σ, Cardinality | Finite State Machine | TOC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <script>
        function loadVideo() {
            const videoId = document.getElementById('searchInput').value;
            if (videoId) {
                const iframe = document.getElementById('ytPlayer');
                iframe.src = \`https://www.youtube.com/embed/\${videoId}?autoplay=1\`;
            }
        }
    </script>
</body>
</html>`;
}

