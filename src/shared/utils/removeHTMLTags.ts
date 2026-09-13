export const removeHTMLTags = (text: string) => {
  const element = document.createElement("div");
  element.innerHTML = text.replace(/<[^>]*>/g, " ");

  return element.innerText.replace(/\s+/g, " ").trim();
};
