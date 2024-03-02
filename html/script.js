window.onload = () => {
  const container = document.getElementById("container");
  let draggedElement = null;

  container.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("draggable")) {
      draggedElement = e.target;
    }
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container.addEventListener("drop", (e) => {
    if (e.target.classList.contains("draggable") && draggedElement !== null) {
      const droppedElement = e.target;
      const elements = Array.from(container.getElementsByClassName("draggable"));
      const draggedIndex = elements.indexOf(draggedElement);
      const droppedIndex = elements.indexOf(droppedElement);

      if (draggedIndex < droppedIndex) {
        container.insertBefore(draggedElement, droppedElement.nextSibling);
      } else {
        container.insertBefore(draggedElement, droppedElement);
      }
    }
    draggedElement = null;
  });

  container.addEventListener("dragend", (e) => {
    draggedElement = null;
  });
}