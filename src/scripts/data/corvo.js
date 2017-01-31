/* eslint-disable max-len */

export default {
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
