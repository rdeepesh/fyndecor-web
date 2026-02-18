export function cleanEditorHtml(html: string) {
  if (!html) return "";

  let cleaned = html;

  // remove quill UI spans
  cleaned = cleaned.replace(/<span class="ql-ui"[^>]*><\/span>/g, "");

  // convert quill bullet lists
  cleaned = cleaned.replace(/<ol>([\s\S]*?)<\/ol>/g, (match) => {
    if (match.includes('data-list="bullet"')) {
      return match
        .replace("<ol>", "<ul>")
        .replace("</ol>", "</ul>")
        .replace("<ul>", "<ul class='list-disc ml-6 space-y-1'>")
        .replace("<ol>", "<ol class='list-decimal ml-6 space-y-1'>")
        .replace(/ data-list="bullet"/g, "");
    }
    return match;
  });

  // remove inline styles (optional but recommended)
  cleaned = cleaned.replace(/ style="[^"]*"/g, "");

  return cleaned;
}
