class Extensions {
  getInfo() {
    return {
      id: 'extensions',
      name: 'Extension Utils',
      blocks: [
        {
          opcode: 'load_status',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current loading status',
        }
      ]
    };
  }
}

Scratch.extensions.register(new Extensions());



