/* eslint-disable max-len */

export default {
  // Bend time powers.
  '83834603-de16-41ef-9254-4b43cad0f1e6': {
    id: '83834603-de16-41ef-9254-4b43cad0f1e6',
    parentPowerId: null,
    character: 'corvo',
    name: 'Bend Time',
    description: 'Slow time for a short duration.',
    cost: 5
  },
  '9949e67d-5514-46c1-a86e-5605064b5b75': {
    id: '9949e67d-5514-46c1-a86e-5605064b5b75',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    character: 'corvo',
    name: 'Stop Time',
    description: 'Stop time for a short duration.',
    cost: 6
  },
  '1d9a9e16-ddb9-4f98-a76f-c8fd4fcc94b0': {
    id: '1d9a9e16-ddb9-4f98-a76f-c8fd4fcc94b0',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    character: 'corvo',
    name: 'Relativity',
    description: 'Move faster, relative to time.',
    cost: 1
  },
  'df6d9fae-44e9-4ea0-9d7d-9c37f7ea82cc': {
    id: 'df6d9fae-44e9-4ea0-9d7d-9c37f7ea82cc',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    character: 'corvo',
    name: 'Lasting Bend Time',
    description: 'Extend duration of Bend Time.',
    cost: 2
  },

  // Blink powers.
  'ba33f829-5fb1-4c25-8fa6-db9581b78ee9': {
    id: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    parentPowerId: null,
    character: 'corvo',
    name: 'Blink',
    description: 'Move forward rapidly.',
    cost: 0
  },
  '057f77b6-4730-4148-817e-8e8a6bb7ab70': {
    id: '057f77b6-4730-4148-817e-8e8a6bb7ab70',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    character: 'corvo',
    name: 'Greater Blink',
    description: 'Extend range of blink.',
    cost: 4
  },
  'c6cc4776-a67d-4364-a21b-fbee309169ba': {
    id: 'c6cc4776-a67d-4364-a21b-fbee309169ba',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    character: 'corvo',
    name: 'Redirective Blink',
    description: 'Time stops if you aren’t moving while aiming Blink.',
    cost: 3
  },
  'da709264-367d-4dd0-be73-5cae311ffe03': {
    id: 'da709264-367d-4dd0-be73-5cae311ffe03',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    character: 'corvo',
    name: 'Blink Assault',
    description: 'Throw enemies to the ground by attacking just as Blink ends.',
    cost: 1
  },

  // Dark vision powers.
  '3b7eb5ac-bcee-4d0c-8830-6e7438635db8': {
    id: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    parentPowerId: null,
    character: 'corvo',
    name: 'Dark Vision',
    description: 'See better in darkness. Observe living beings through walls.',
    cost: 2
  },
  '550a6b9a-4913-411e-9b58-1782ef2b9572': {
    id: '550a6b9a-4913-411e-9b58-1782ef2b9572',
    parentPowerId: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    character: 'corvo',
    name: 'Greater Dark Vision',
    description: 'See objects and security systems through walls.',
    cost: 3
  },
  'a4b18b13-4744-401d-b9d6-bef23736e4ea': {
    id: 'a4b18b13-4744-401d-b9d6-bef23736e4ea',
    parentPowerId: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    character: 'corvo',
    name: 'Premonition',
    description: 'Visualize enemy routes and their current destination.',
    cost: 2
  },

  // Devouring swarm powers.
  '5211fb67-a109-4fe0-9acc-dd0963f398ea': {
    id: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    parentPowerId: null,
    character: 'corvo',
    name: 'Devouring Swarm',
    description: 'Summon rats that attack enemies and devour bodies.',
    cost: 4
  },
  '9d92a5a5-3fed-4fa0-b43b-501c40b16e81': {
    id: '9d92a5a5-3fed-4fa0-b43b-501c40b16e81',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    character: 'corvo',
    name: 'Greater Swarm',
    description: 'Increase the size of your rat swarm.',
    cost: 2
  },
  'e223c680-2f9c-40f0-b451-4e5c71fc1979': {
    id: 'e223c680-2f9c-40f0-b451-4e5c71fc1979',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    character: 'corvo',
    name: 'Rat Piper',
    description: 'Summon a rat swarm that follows you.',
    cost: 2
  },
  '4f3144e4-5b8f-4d66-9db5-b625d6dd5b8a': {
    id: '4f3144e4-5b8f-4d66-9db5-b625d6dd5b8a',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    character: 'corvo',
    name: 'Twin Swarms',
    description: 'Summon two smaller rat swarms.',
    cost: 3
  },

  // Doppelgänger powers.
  '549c5a0d-16c1-44c9-aef6-57a12e082145': {
    id: '549c5a0d-16c1-44c9-aef6-57a12e082145',
    parentPowerId: null,
    character: 'emily',
    name: 'Doppelgänger',
    description: 'Summon a shade of yourself that attracts enemies.',
    cost: 4
  },
  '5de51786-b0a9-472f-8004-d1180cb582c2': {
    id: '5de51786-b0a9-472f-8004-d1180cb582c2',
    parentPowerId: '549c5a0d-16c1-44c9-aef6-57a12e082145',
    character: 'emily',
    name: 'Baffling Shade',
    description: 'Your Doppelgänger will confuse enemies as it fades away.',
    cost: 1
  },
  '8f5cbc1e-86be-41df-85fe-82434ebcdc69': {
    id: '8f5cbc1e-86be-41df-85fe-82434ebcdc69',
    parentPowerId: '549c5a0d-16c1-44c9-aef6-57a12e082145',
    character: 'emily',
    name: 'Deadly Shade',
    description: 'Summon a Doppelgänger that can fight enemies and assassinate when undetected.',
    cost: 3
  },
  '54188b40-c014-4bd8-aa89-5453301240a2': {
    id: '54188b40-c014-4bd8-aa89-5453301240a2',
    parentPowerId: '8f5cbc1e-86be-41df-85fe-82434ebcdc69',
    character: 'emily',
    name: 'Twin Shades',
    description: 'Summon two Doppelgängers who act independently of each other.',
    cost: 3
  },
  '2cb21cff-edc5-4a9a-bc03-1fef643e6931': {
    id: '2cb21cff-edc5-4a9a-bc03-1fef643e6931',
    parentPowerId: '549c5a0d-16c1-44c9-aef6-57a12e082145',
    character: 'emily',
    name: 'Transposition',
    description: 'Swap places with your summoned Doppelgänger.',
    cost: 2
  },

  // Mesmerize powers.
  '3d1ef033-1e9e-437b-b994-da2848368eb5': {
    id: '3d1ef033-1e9e-437b-b994-da2848368eb5',
    parentPowerId: null,
    character: 'emily',
    name: 'Mesmerize',
    description: 'Summon a Void spirit to enthrall humans or hounds.',
    cost: 6
  },
  '341f8206-e5cf-4d20-94d4-3ef88ff81b1d': {
    id: '341f8206-e5cf-4d20-94d4-3ef88ff81b1d',
    parentPowerId: '3d1ef033-1e9e-437b-b994-da2848368eb5',
    character: 'emily',
    name: 'Mesmerize Three',
    description: 'Enthrall up to 3 human or canine targets.',
    cost: 3
  },
  '9ab61f4c-b5dd-43a5-b412-455855e81469': {
    id: '9ab61f4c-b5dd-43a5-b412-455855e81469',
    parentPowerId: '341f8206-e5cf-4d20-94d4-3ef88ff81b1d',
    character: 'emily',
    name: 'Mesmerize Four',
    description: 'Enthrall up to 4 human or canine targets.',
    cost: 3
  },
  '47f9050a-1906-459b-843b-0ba4619e9abf': {
    id: '47f9050a-1906-459b-843b-0ba4619e9abf',
    parentPowerId: '3d1ef033-1e9e-437b-b994-da2848368eb5',
    character: 'emily',
    name: 'Lasting Mesmerize',
    description: 'Extend duration.',
    cost: 2
  },

  // Windblast powers.
  'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be': {
    id: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    parentPowerId: null,
    character: 'corvo',
    name: 'Windblast',
    description: 'Gust of wind that shatters doors and deflects projectiles.',
    cost: 4
  },
  '3c78851c-dd0d-402f-b6d5-b06a85cbbe12': {
    id: '3c78851c-dd0d-402f-b6d5-b06a85cbbe12',
    parentPowerId: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    character: 'corvo',
    name: 'Greater Windblast',
    description: 'Summon a more powerful wind that kills enemies thrown into walls, and deflects projectiles with more accuracy.',
    cost: 3
  },
  'af21681f-71c1-4e87-a23b-42e792c45f75': {
    id: 'af21681f-71c1-4e87-a23b-42e792c45f75',
    parentPowerId: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    character: 'corvo',
    name: 'Shockwave',
    description: 'Release a secondary blast of wind in a short radius around you.',
    cost: 3
  },

  // Posession powers.
  'e2b274c4-d727-44a7-a4ef-32da487bb4b6': {
    id: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    parentPowerId: null,
    character: 'corvo',
    name: 'Posession',
    description: 'Assume control of a host for a short time.',
    cost: 4
  },
  '6dd8594c-8e1d-45d4-b98d-b28af53982ec': {
    id: '6dd8594c-8e1d-45d4-b98d-b28af53982ec',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    character: 'corvo',
    name: 'Chain Hosts',
    description: 'Transition between hosts.',
    cost: 3
  },
  '34f79277-2fa4-40a8-9568-40f0bbf359de': {
    id: '34f79277-2fa4-40a8-9568-40f0bbf359de',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    character: 'corvo',
    name: 'Corpse Posession',
    description: 'Occupy a recently deceased or unconscious human host.',
    cost: 1
  },
  '676cb117-268a-4c88-a952-a9cfa7bd9ad6': {
    id: '676cb117-268a-4c88-a952-a9cfa7bd9ad6',
    parentPowerId: '34f79277-2fa4-40a8-9568-40f0bbf359de',
    character: 'corvo',
    name: 'Human Posession',
    description: 'Control a human host.',
    cost: 4
  },
  'b7103d3b-a644-4a04-89ea-e3e8f49f2f53': {
    id: 'b7103d3b-a644-4a04-89ea-e3e8f49f2f53',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    character: 'corvo',
    name: 'Lasting Posession',
    description: 'Extend duration.',
    cost: 1
  },

  // Shadow walk powers.
  'e336ff67-6676-4ace-89c1-9f6dbc53e265': {
    id: 'e336ff67-6676-4ace-89c1-9f6dbc53e265',
    parentPowerId: null,
    character: 'emily',
    name: 'Shadow Walk',
    description: 'Assume a stealthier form for a short time.',
    cost: 4
  },
  'eae318de-9173-4fef-b023-53a4098e366a': {
    id: 'eae318de-9173-4fef-b023-53a4098e366a',
    parentPowerId: 'e336ff67-6676-4ace-89c1-9f6dbc53e265',
    character: 'emily',
    name: 'Rat Shadows',
    description: 'Move through rat tunnels in your stealthier form.',
    cost: 1
  },
  '5d4a2356-fe27-469e-9ab4-25c0e3d06e6d': {
    id: '5d4a2356-fe27-469e-9ab4-25c0e3d06e6d',
    parentPowerId: 'e336ff67-6676-4ace-89c1-9f6dbc53e265',
    character: 'emily',
    name: 'Improved Shadow Attack',
    description: 'Assassinate or incapacitate up to 2 enemies during Shadow Walk.',
    cost: 2
  },
  '7c2e2dbf-b1a8-4320-aeba-0a717a7602fc': {
    id: '7c2e2dbf-b1a8-4320-aeba-0a717a7602fc',
    parentPowerId: '5d4a2356-fe27-469e-9ab4-25c0e3d06e6d',
    character: 'emily',
    name: 'Greater Shadow Attack',
    description: 'Assassinate or incapacitate up to 3 enemies during Shadow Walk.',
    cost: 2
  },
  '1f5a35f4-5c15-43fd-b8fd-9592e4d0942b': {
    id: '1f5a35f4-5c15-43fd-b8fd-9592e4d0942b',
    parentPowerId: 'e336ff67-6676-4ace-89c1-9f6dbc53e265',
    character: 'emily',
    name: 'Shadow Run',
    description: 'Move faster while in your stealthier form.',
    cost: 2
  }
};
