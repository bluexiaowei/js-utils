import ClipboardJS from "clipboard";

export default function copy2Clipboard(text: string, callback?: (text: string) => void){
  const element = document.createElement("button");

  element.setAttribute("id", "element");
  element.setAttribute("data-clipboard-text", text);

  element.style.display = "none";

  document.body.appendChild(element);

  setTimeout(() => {
    const clipboard = new ClipboardJS("#element");

    element.click();

    clipboard.destroy();

    element.remove();

    if (typeof callback === "function") {
      callback(text);
    }
  }, 100);
};
