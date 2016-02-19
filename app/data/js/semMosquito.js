import observe from 'dom-observer';
(() => {
  // Repelente
  function handleMosquitos(mutation) {
    const newNode = mutation.addedNodes[0];
    if (newNode) {
      // Remove mosquitos, APENAS mosquitos :)
      if (newNode.id === 'aegypti3') {
        newNode.parentNode.removeChild(newNode);
      }
    }
  }

  // Mata qualquer mosquito já presente
  const mosquitos = document.querySelectorAll('.aegypti');
  if (mosquitos.length > 0) {
    [].forEach.call(mosquitos, (mosquito) => {
      mosquito.parentNode.removeChild(mosquito);
    });
  }

  // Registra repelente contra qualquer outro mosquito que aparecer
  observe(document.body, handleMosquitos, {
    childList: true
  }, true);
})();
