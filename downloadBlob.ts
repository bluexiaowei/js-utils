export default function download2Blob(blob: Blob, filename: string) {
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const url = URL.createObjectURL(blob);
    const element = document.createElement("a");
    
    element.setAttribute("href", url);
    element.setAttribute("download", filename);

    element.style.display = "none";

    document.body.appendChild(a);

    element.click();

    element.remove();

    URL.revokeObjectURL(url);
  }
}
