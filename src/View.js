const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `
    <p>Próximo lembrete:</p>
    <span>${minutes}:${seconds}</span>
    `;
  }
}

export { View };