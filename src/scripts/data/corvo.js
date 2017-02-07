/* eslint-disable max-len */

export default {
  // Bend time powers.
  '83834603-de16-41ef-9254-4b43cad0f1e6': {
    id: '83834603-de16-41ef-9254-4b43cad0f1e6',
    parentPowerId: null,
    type: 'power',
    name: 'Bend Time',
    description: 'Slow time for a short duration.',
    cost: 5
  },
  '9949e67d-5514-46c1-a86e-5605064b5b75': {
    id: '9949e67d-5514-46c1-a86e-5605064b5b75',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    type: 'power',
    name: 'Stop Time',
    description: 'Stop time for a short duration.',
    cost: 6
  },
  '1d9a9e16-ddb9-4f98-a76f-c8fd4fcc94b0': {
    id: '1d9a9e16-ddb9-4f98-a76f-c8fd4fcc94b0',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    type: 'power',
    name: 'Relativity',
    description: 'Move faster, relative to time.',
    cost: 1
  },
  'df6d9fae-44e9-4ea0-9d7d-9c37f7ea82cc': {
    id: 'df6d9fae-44e9-4ea0-9d7d-9c37f7ea82cc',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    type: 'power',
    name: 'Lasting Bend Time',
    description: 'Extend duration of Bend Time.',
    cost: 2
  },

  // Blink powers.
  'ba33f829-5fb1-4c25-8fa6-db9581b78ee9': {
    id: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    parentPowerId: null,
    type: 'power',
    name: 'Blink',
    description: 'Move forward rapidly.',
    cost: 0
  },
  '057f77b6-4730-4148-817e-8e8a6bb7ab70': {
    id: '057f77b6-4730-4148-817e-8e8a6bb7ab70',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    type: 'power',
    name: 'Greater Blink',
    description: 'Extend range of blink.',
    cost: 4
  },
  'c6cc4776-a67d-4364-a21b-fbee309169ba': {
    id: 'c6cc4776-a67d-4364-a21b-fbee309169ba',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    type: 'power',
    name: 'Redirective Blink',
    description: 'Time stops if you aren’t moving while aiming Blink.',
    cost: 3
  },
  'da709264-367d-4dd0-be73-5cae311ffe03': {
    id: 'da709264-367d-4dd0-be73-5cae311ffe03',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    type: 'power',
    name: 'Blink Assault',
    description: 'Throw enemies to the ground by attacking just as Blink ends.',
    cost: 1
  },

  // Dark vision powers.
  '3b7eb5ac-bcee-4d0c-8830-6e7438635db8': {
    id: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    parentPowerId: null,
    type: 'power',
    name: 'Dark Vision',
    description: 'See better in darkness. Observe living beings through walls.',
    cost: 2
  },
  '550a6b9a-4913-411e-9b58-1782ef2b9572': {
    id: '550a6b9a-4913-411e-9b58-1782ef2b9572',
    parentPowerId: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    type: 'power',
    name: 'Greater Dark Vision',
    description: 'See objects and security systems through walls.',
    cost: 3
  },
  'a4b18b13-4744-401d-b9d6-bef23736e4ea': {
    id: 'a4b18b13-4744-401d-b9d6-bef23736e4ea',
    parentPowerId: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    type: 'power',
    name: 'Premonition',
    description: 'Visualize enemy routes and their current destination.',
    cost: 2
  },

  // Devouring swarm powers.
  '5211fb67-a109-4fe0-9acc-dd0963f398ea': {
    id: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    parentPowerId: null,
    type: 'power',
    name: 'Devouring Swarm',
    description: 'Summon rats that attack enemies and devour bodies.',
    cost: 4
  },
  '9d92a5a5-3fed-4fa0-b43b-501c40b16e81': {
    id: '9d92a5a5-3fed-4fa0-b43b-501c40b16e81',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    type: 'power',
    name: 'Greater Swarm',
    description: 'Increase the size of your rat swarm.',
    cost: 2
  },
  'e223c680-2f9c-40f0-b451-4e5c71fc1979': {
    id: 'e223c680-2f9c-40f0-b451-4e5c71fc1979',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    type: 'power',
    name: 'Rat Piper',
    description: 'Summon a rat swarm that follows you.',
    cost: 2
  },
  '4f3144e4-5b8f-4d66-9db5-b625d6dd5b8a': {
    id: '4f3144e4-5b8f-4d66-9db5-b625d6dd5b8a',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    type: 'power',
    name: 'Twin Swarms',
    description: 'Summon two smaller rat swarms.',
    cost: 3
  },

  // Windblast powers.
  'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be': {
    id: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    parentPowerId: null,
    type: 'power',
    name: 'Windblast',
    description: 'Gust of wind that shatters doors and deflects projectiles.',
    cost: 4
  },
  '3c78851c-dd0d-402f-b6d5-b06a85cbbe12': {
    id: '3c78851c-dd0d-402f-b6d5-b06a85cbbe12',
    parentPowerId: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    type: 'power',
    name: 'Greater Windblast',
    description: 'Summon a more powerful wind that kills enemies thrown into walls, and deflects projectiles with more accuracy.',
    cost: 3
  },
  'af21681f-71c1-4e87-a23b-42e792c45f75': {
    id: 'af21681f-71c1-4e87-a23b-42e792c45f75',
    parentPowerId: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    type: 'power',
    name: 'Shockwave',
    description: 'Release a secondary blast of wind in a short radius around you.',
    cost: 3
  },

  // Posession powers.
  'e2b274c4-d727-44a7-a4ef-32da487bb4b6': {
    id: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    parentPowerId: null,
    type: 'power',
    name: 'Posession',
    description: 'Assume control of a host for a short time.',
    cost: 4
  },
  '6dd8594c-8e1d-45d4-b98d-b28af53982ec': {
    id: '6dd8594c-8e1d-45d4-b98d-b28af53982ec',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    type: 'power',
    name: 'Chain Hosts',
    description: 'Transition between hosts.',
    cost: 3
  },
  '34f79277-2fa4-40a8-9568-40f0bbf359de': {
    id: '34f79277-2fa4-40a8-9568-40f0bbf359de',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    type: 'power',
    name: 'Corpse Posession',
    description: 'Occupy a recently deceased or unconscious human host.',
    cost: 1
  },
  '676cb117-268a-4c88-a952-a9cfa7bd9ad6': {
    id: '676cb117-268a-4c88-a952-a9cfa7bd9ad6',
    parentPowerId: '34f79277-2fa4-40a8-9568-40f0bbf359de',
    type: 'power',
    name: 'Human Posession',
    description: 'Control a human host.',
    cost: 4
  },
  'b7103d3b-a644-4a04-89ea-e3e8f49f2f53': {
    id: 'b7103d3b-a644-4a04-89ea-e3e8f49f2f53',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    type: 'power',
    name: 'Lasting Posession',
    description: 'Extend duration.',
    cost: 1
  }
};
