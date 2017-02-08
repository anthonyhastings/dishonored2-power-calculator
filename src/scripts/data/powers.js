/* eslint-disable max-len */

export default {
  // Agility enhancements.
  '39334a1e-2883-4722-af71-d3286d94b6e7': {
    id: '39334a1e-2883-4722-af71-d3286d94b6e7',
    parentPowerId: null,
    character: null,
    type: 'enhancement',
    name: 'Agility',
    description: 'Increase your jump height and distance.',
    cost: 2
  },
  '4499082e-9cdc-4828-8d18-40aea0b2970b': {
    id: '4499082e-9cdc-4828-8d18-40aea0b2970b',
    parentPowerId: '39334a1e-2883-4722-af71-d3286d94b6e7',
    character: null,
    type: 'enhancement',
    name: 'Rapid Sprint',
    description: 'Sprint faster.',
    cost: 2
  },
  '6229d272-6b03-467a-82ec-00993c642570': {
    id: '6229d272-6b03-467a-82ec-00993c642570',
    parentPowerId: '39334a1e-2883-4722-af71-d3286d94b6e7',
    character: null,
    type: 'enhancement',
    name: 'Cat Fall',
    description: 'Take less falling damage.',
    cost: 1
  },

  // Bend time powers.
  '83834603-de16-41ef-9254-4b43cad0f1e6': {
    id: '83834603-de16-41ef-9254-4b43cad0f1e6',
    parentPowerId: null,
    character: 'corvo',
    type: 'power',
    name: 'Bend Time',
    description: 'Slow time for a short duration.',
    cost: 5
  },
  '9949e67d-5514-46c1-a86e-5605064b5b75': {
    id: '9949e67d-5514-46c1-a86e-5605064b5b75',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    character: 'corvo',
    type: 'power',
    name: 'Stop Time',
    description: 'Stop time for a short duration.',
    cost: 6
  },
  '1d9a9e16-ddb9-4f98-a76f-c8fd4fcc94b0': {
    id: '1d9a9e16-ddb9-4f98-a76f-c8fd4fcc94b0',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    character: 'corvo',
    type: 'power',
    name: 'Relativity',
    description: 'Move faster, relative to time.',
    cost: 1
  },
  'df6d9fae-44e9-4ea0-9d7d-9c37f7ea82cc': {
    id: 'df6d9fae-44e9-4ea0-9d7d-9c37f7ea82cc',
    parentPowerId: '83834603-de16-41ef-9254-4b43cad0f1e6',
    character: 'corvo',
    type: 'power',
    name: 'Lasting Bend Time',
    description: 'Extend duration of Bend Time.',
    cost: 2
  },

  // Blink powers.
  'ba33f829-5fb1-4c25-8fa6-db9581b78ee9': {
    id: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    parentPowerId: null,
    character: 'corvo',
    type: 'power',
    name: 'Blink',
    description: 'Move forward rapidly.',
    cost: 0
  },
  '057f77b6-4730-4148-817e-8e8a6bb7ab70': {
    id: '057f77b6-4730-4148-817e-8e8a6bb7ab70',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    character: 'corvo',
    type: 'power',
    name: 'Greater Blink',
    description: 'Extend range of blink.',
    cost: 4
  },
  'c6cc4776-a67d-4364-a21b-fbee309169ba': {
    id: 'c6cc4776-a67d-4364-a21b-fbee309169ba',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    character: 'corvo',
    type: 'power',
    name: 'Redirective Blink',
    description: 'Time stops if you aren’t moving while aiming Blink.',
    cost: 3
  },
  'da709264-367d-4dd0-be73-5cae311ffe03': {
    id: 'da709264-367d-4dd0-be73-5cae311ffe03',
    parentPowerId: 'ba33f829-5fb1-4c25-8fa6-db9581b78ee9',
    character: 'corvo',
    type: 'power',
    name: 'Blink Assault',
    description: 'Throw enemies to the ground by attacking just as Blink ends.',
    cost: 1
  },

  // Blood thirst enhancements.
  '3b2c05e8-5062-45dc-aef0-dc2c9e689f14': {
    id: '3b2c05e8-5062-45dc-aef0-dc2c9e689f14',
    parentPowerId: null,
    character: null,
    type: 'enhancement',
    name: 'Blood Thirst',
    description: 'Built up Adrenaline in combat then trigger brutal melee fatalities.',
    cost: 2
  },
  'd8ad66c5-6fdf-4e17-b8e7-c14eaf997e23': {
    id: 'd8ad66c5-6fdf-4e17-b8e7-c14eaf997e23',
    parentPowerId: '3b2c05e8-5062-45dc-aef0-dc2c9e689f14',
    character: null,
    type: 'enhancement',
    name: 'Adrenaline Burst',
    description: 'Replenish Adrenaline automatically while not in combat, up to half maximum.',
    cost: 1
  },
  '8bf34df7-04b8-4a20-84d1-edc6ec72a800': {
    id: '8bf34df7-04b8-4a20-84d1-edc6ec72a800',
    parentPowerId: '3b2c05e8-5062-45dc-aef0-dc2c9e689f14',
    character: null,
    type: 'enhancement',
    name: 'Greater Blood Thirst',
    description: 'Kill multiple enemies within range.',
    cost: 3
  },

  // Bonecharm crafting enhancements.
  '0dc9ca43-a526-4536-b202-0215e8579807': {
    id: '0dc9ca43-a526-4536-b202-0215e8579807',
    parentPowerId: null,
    character: null,
    type: 'enhancement',
    name: 'Bonecharm Crafting',
    description: 'Craft your own unique Bonecharms, with some chance of corruption.',
    cost: 1
  },
  '2109302a-7dc1-4356-80e9-43b9d72bc63e': {
    id: '2109302a-7dc1-4356-80e9-43b9d72bc63e',
    parentPowerId: '0dc9ca43-a526-4536-b202-0215e8579807',
    character: null,
    type: 'enhancement',
    name: 'Witch Crafting',
    description: 'Lower chance of corruption for Bonecharms with 3 or 4 traits.',
    cost: 2
  },
  '6a493c37-f714-4586-9b2e-b5cc43b5b2cc': {
    id: '6a493c37-f714-4586-9b2e-b5cc43b5b2cc',
    parentPowerId: '2109302a-7dc1-4356-80e9-43b9d72bc63e',
    character: null,
    type: 'enhancement',
    name: 'Master Crafting',
    description: 'No chance of corruption when crafting Bonecharms with 3 Traits.',
    cost: 2
  },
  '1bdc0e0d-b188-4f19-b556-8be7762deee6': {
    id: '1bdc0e0d-b188-4f19-b556-8be7762deee6',
    parentPowerId: '6a493c37-f714-4586-9b2e-b5cc43b5b2cc',
    character: null,
    type: 'enhancement',
    name: 'Craft Runes',
    description: 'Craft Runes by expending Raw Whalebone, or sacrifice existing Runes to accumulate Raw Whalebone for crafting.',
    cost: 4
  },
  'ed159c65-4b65-4dd5-be35-d9e633d0df62': {
    id: 'ed159c65-4b65-4dd5-be35-d9e633d0df62',
    parentPowerId: '0dc9ca43-a526-4536-b202-0215e8579807',
    character: null,
    type: 'enhancement',
    name: 'Trait Synergy',
    description: 'Use the same trait up to four times across your crafted Bonecharms.',
    cost: 3
  },

  // Dark vision powers.
  '3b7eb5ac-bcee-4d0c-8830-6e7438635db8': {
    id: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    parentPowerId: null,
    character: null,
    type: 'power',
    name: 'Dark Vision',
    description: 'See better in darkness. Observe living beings through walls.',
    cost: 2
  },
  '550a6b9a-4913-411e-9b58-1782ef2b9572': {
    id: '550a6b9a-4913-411e-9b58-1782ef2b9572',
    parentPowerId: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    character: null,
    type: 'power',
    name: 'Greater Dark Vision',
    description: 'See objects and security systems through walls.',
    cost: 3
  },
  'a4b18b13-4744-401d-b9d6-bef23736e4ea': {
    id: 'a4b18b13-4744-401d-b9d6-bef23736e4ea',
    parentPowerId: '3b7eb5ac-bcee-4d0c-8830-6e7438635db8',
    character: null,
    type: 'power',
    name: 'Premonition',
    description: 'Visualize enemy routes and their current destination.',
    cost: 2
  },

  // Devouring swarm powers.
  '5211fb67-a109-4fe0-9acc-dd0963f398ea': {
    id: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    parentPowerId: null,
    character: 'corvo',
    type: 'power',
    name: 'Devouring Swarm',
    description: 'Summon rats that attack enemies and devour bodies.',
    cost: 4
  },
  '9d92a5a5-3fed-4fa0-b43b-501c40b16e81': {
    id: '9d92a5a5-3fed-4fa0-b43b-501c40b16e81',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    character: 'corvo',
    type: 'power',
    name: 'Greater Swarm',
    description: 'Increase the size of your rat swarm.',
    cost: 2
  },
  'e223c680-2f9c-40f0-b451-4e5c71fc1979': {
    id: 'e223c680-2f9c-40f0-b451-4e5c71fc1979',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    character: 'corvo',
    type: 'power',
    name: 'Rat Piper',
    description: 'Summon a rat swarm that follows you.',
    cost: 2
  },
  '4f3144e4-5b8f-4d66-9db5-b625d6dd5b8a': {
    id: '4f3144e4-5b8f-4d66-9db5-b625d6dd5b8a',
    parentPowerId: '5211fb67-a109-4fe0-9acc-dd0963f398ea',
    character: 'corvo',
    type: 'power',
    name: 'Twin Swarms',
    description: 'Summon two smaller rat swarms.',
    cost: 3
  },

  // Domino powers.
  '63b89a2d-0cf7-4243-9f3a-89b8906846c1': {
    id: '63b89a2d-0cf7-4243-9f3a-89b8906846c1',
    parentPowerId: null,
    character: 'emily',
    type: 'power',
    name: 'Domino',
    description: 'Link human targets so they die or fall unconscious together.',
    cost: 4
  },
  'f1b6a61f-8556-4774-b49d-cd418d459229': {
    id: 'f1b6a61f-8556-4774-b49d-cd418d459229',
    parentPowerId: '63b89a2d-0cf7-4243-9f3a-89b8906846c1',
    character: 'emily',
    type: 'power',
    name: 'Link Three',
    description: 'Link up to 3 enemies.',
    cost: 3
  },
  '4ed7aa33-c6f8-4600-91c9-8e69501fe6cb': {
    id: '4ed7aa33-c6f8-4600-91c9-8e69501fe6cb',
    parentPowerId: 'f1b6a61f-8556-4774-b49d-cd418d459229',
    character: 'emily',
    type: 'power',
    name: 'Link Four',
    description: 'Link up to 4 enemies.',
    cost: 3
  },

  // Doppelgänger powers.
  '549c5a0d-16c1-44c9-aef6-57a12e082145': {
    id: '549c5a0d-16c1-44c9-aef6-57a12e082145',
    parentPowerId: null,
    character: 'emily',
    type: 'power',
    name: 'Doppelgänger',
    description: 'Summon a shade of yourself that attracts enemies.',
    cost: 4
  },
  '5de51786-b0a9-472f-8004-d1180cb582c2': {
    id: '5de51786-b0a9-472f-8004-d1180cb582c2',
    parentPowerId: '549c5a0d-16c1-44c9-aef6-57a12e082145',
    character: 'emily',
    type: 'power',
    name: 'Baffling Shade',
    description: 'Your Doppelgänger will confuse enemies as it fades away.',
    cost: 1
  },
  '8f5cbc1e-86be-41df-85fe-82434ebcdc69': {
    id: '8f5cbc1e-86be-41df-85fe-82434ebcdc69',
    parentPowerId: '549c5a0d-16c1-44c9-aef6-57a12e082145',
    character: 'emily',
    type: 'power',
    name: 'Deadly Shade',
    description: 'Summon a Doppelgänger that can fight enemies and assassinate when undetected.',
    cost: 3
  },
  '54188b40-c014-4bd8-aa89-5453301240a2': {
    id: '54188b40-c014-4bd8-aa89-5453301240a2',
    parentPowerId: '8f5cbc1e-86be-41df-85fe-82434ebcdc69',
    character: 'emily',
    type: 'power',
    name: 'Twin Shades',
    description: 'Summon two Doppelgängers who act independently of each other.',
    cost: 3
  },
  '2cb21cff-edc5-4a9a-bc03-1fef643e6931': {
    id: '2cb21cff-edc5-4a9a-bc03-1fef643e6931',
    parentPowerId: '549c5a0d-16c1-44c9-aef6-57a12e082145',
    character: 'emily',
    type: 'power',
    name: 'Transposition',
    description: 'Swap places with your summoned Doppelgänger.',
    cost: 2
  },

  // Far reach powers.
  '8c45a602-aa8f-4f74-bb68-620cc9af9694': {
    id: '8c45a602-aa8f-4f74-bb68-620cc9af9694',
    parentPowerId: null,
    character: 'emily',
    type: 'power',
    name: 'Far Reach',
    description: 'Pull yourself rapidly across a distance.',
    cost: 0
  },
  'd41e809b-899b-4038-be80-51ed65b2a44c': {
    id: 'd41e809b-899b-4038-be80-51ed65b2a44c',
    parentPowerId: '8c45a602-aa8f-4f74-bb68-620cc9af9694',
    character: 'emily',
    type: 'power',
    name: 'Pull Objects',
    description: 'Pull objects toward you and catch them in midair. Includes corpses and unconscious bodies.',
    cost: 2
  },
  '819019ab-9bc0-4d17-901e-01085fa68a17': {
    id: '819019ab-9bc0-4d17-901e-01085fa68a17',
    parentPowerId: 'd41e809b-899b-4038-be80-51ed65b2a44c',
    character: 'emily',
    type: 'power',
    name: 'Pull Enemies',
    description: 'Pull enemies toward you, and kill or incapacitate them in midair. Not stealthy.',
    cost: 4
  },
  'da241db7-768f-451d-8c25-978d0ad5033d': {
    id: 'da241db7-768f-451d-8c25-978d0ad5033d',
    parentPowerId: '8c45a602-aa8f-4f74-bb68-620cc9af9694',
    character: 'emily',
    type: 'power',
    name: 'Decelerate',
    description: 'If you are falling, time is briefly slowed as you aim Far Reach.',
    cost: 2
  },

  // Mesmerize powers.
  '3d1ef033-1e9e-437b-b994-da2848368eb5': {
    id: '3d1ef033-1e9e-437b-b994-da2848368eb5',
    parentPowerId: null,
    character: 'emily',
    type: 'power',
    name: 'Mesmerize',
    description: 'Summon a Void spirit to enthrall humans or hounds.',
    cost: 6
  },
  '341f8206-e5cf-4d20-94d4-3ef88ff81b1d': {
    id: '341f8206-e5cf-4d20-94d4-3ef88ff81b1d',
    parentPowerId: '3d1ef033-1e9e-437b-b994-da2848368eb5',
    character: 'emily',
    type: 'power',
    name: 'Mesmerize Three',
    description: 'Enthrall up to 3 human or canine targets.',
    cost: 3
  },
  '9ab61f4c-b5dd-43a5-b412-455855e81469': {
    id: '9ab61f4c-b5dd-43a5-b412-455855e81469',
    parentPowerId: '341f8206-e5cf-4d20-94d4-3ef88ff81b1d',
    character: 'emily',
    type: 'power',
    name: 'Mesmerize Four',
    description: 'Enthrall up to 4 human or canine targets.',
    cost: 3
  },
  '47f9050a-1906-459b-843b-0ba4619e9abf': {
    id: '47f9050a-1906-459b-843b-0ba4619e9abf',
    parentPowerId: '3d1ef033-1e9e-437b-b994-da2848368eb5',
    character: 'emily',
    type: 'power',
    name: 'Lasting Mesmerize',
    description: 'Extend duration.',
    cost: 2
  },

  // Windblast powers.
  'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be': {
    id: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    parentPowerId: null,
    character: 'corvo',
    type: 'power',
    name: 'Windblast',
    description: 'Gust of wind that shatters doors and deflects projectiles.',
    cost: 4
  },
  '3c78851c-dd0d-402f-b6d5-b06a85cbbe12': {
    id: '3c78851c-dd0d-402f-b6d5-b06a85cbbe12',
    parentPowerId: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    character: 'corvo',
    type: 'power',
    name: 'Greater Windblast',
    description: 'Summon a more powerful wind that kills enemies thrown into walls, and deflects projectiles with more accuracy.',
    cost: 3
  },
  'af21681f-71c1-4e87-a23b-42e792c45f75': {
    id: 'af21681f-71c1-4e87-a23b-42e792c45f75',
    parentPowerId: 'b3d3e62b-bd8c-4ebf-9057-a7f42eb3c8be',
    character: 'corvo',
    type: 'power',
    name: 'Shockwave',
    description: 'Release a secondary blast of wind in a short radius around you.',
    cost: 3
  },

  // Posession powers.
  'e2b274c4-d727-44a7-a4ef-32da487bb4b6': {
    id: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    parentPowerId: null,
    character: 'corvo',
    type: 'power',
    name: 'Posession',
    description: 'Assume control of a host for a short time.',
    cost: 4
  },
  '6dd8594c-8e1d-45d4-b98d-b28af53982ec': {
    id: '6dd8594c-8e1d-45d4-b98d-b28af53982ec',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    character: 'corvo',
    type: 'power',
    name: 'Chain Hosts',
    description: 'Transition between hosts.',
    cost: 3
  },
  '34f79277-2fa4-40a8-9568-40f0bbf359de': {
    id: '34f79277-2fa4-40a8-9568-40f0bbf359de',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    character: 'corvo',
    type: 'power',
    name: 'Corpse Posession',
    description: 'Occupy a recently deceased or unconscious human host.',
    cost: 1
  },
  '676cb117-268a-4c88-a952-a9cfa7bd9ad6': {
    id: '676cb117-268a-4c88-a952-a9cfa7bd9ad6',
    parentPowerId: '34f79277-2fa4-40a8-9568-40f0bbf359de',
    character: 'corvo',
    type: 'power',
    name: 'Human Posession',
    description: 'Control a human host.',
    cost: 4
  },
  'b7103d3b-a644-4a04-89ea-e3e8f49f2f53': {
    id: 'b7103d3b-a644-4a04-89ea-e3e8f49f2f53',
    parentPowerId: 'e2b274c4-d727-44a7-a4ef-32da487bb4b6',
    character: 'corvo',
    type: 'power',
    name: 'Lasting Posession',
    description: 'Extend duration.',
    cost: 1
  },

  // Reflexes enhancements.
  'ae1fbcc3-feb7-40cc-9458-66cd3efff80b': {
    id: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    parentPowerId: null,
    character: null,
    type: 'enhancement',
    name: 'Reflexes',
    description: 'Block to deflect projectiles.',
    cost: 1
  },
  '400c89bd-ab42-4a44-98af-6a622493a0ec': {
    id: '400c89bd-ab42-4a44-98af-6a622493a0ec',
    parentPowerId: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    character: null,
    type: 'enhancement',
    name: 'Focused Slide',
    description: 'Slow time while sliding if aiming a ranged weapon at an enemy.',
    cost: 2
  },
  '709adf4e-d164-48f7-bfaa-8f75237097b8': {
    id: '709adf4e-d164-48f7-bfaa-8f75237097b8',
    parentPowerId: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    character: null,
    type: 'enhancement',
    name: 'Superior Deflection',
    description: 'Deflect projectiles towards the nearest enemy.',
    cost: 2
  },
  '0cf39239-72b2-4d24-91a8-26581a27d75f': {
    id: '0cf39239-72b2-4d24-91a8-26581a27d75f',
    parentPowerId: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    character: null,
    type: 'enhancement',
    name: 'Adept Parry',
    description: 'Window of time for parrying is increased.',
    cost: 1
  },
  '7856c89a-8408-4776-b373-74a197618ead': {
    id: '7856c89a-8408-4776-b373-74a197618ead',
    parentPowerId: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    character: null,
    type: 'enhancement',
    name: 'Snap Reaction',
    description: 'Quick reflexes seem to slow time briefly when an enemy spots you.',
    cost: 3
  },

  // Shadow kill enhancements.
  'fb909e60-c319-4133-9716-bc4a15c645a7': {
    id: 'fb909e60-c319-4133-9716-bc4a15c645a7',
    parentPowerId: null,
    character: null,
    type: 'enhancement',
    name: 'Shadow Kill',
    description: 'Turn unaware enemies to ash as they die.',
    cost: 2
  },
  '96558f9c-ee1d-4443-9076-786f42784f09': {
    id: '96558f9c-ee1d-4443-9076-786f42784f09',
    parentPowerId: 'fb909e60-c319-4133-9716-bc4a15c645a7',
    character: null,
    type: 'enhancement',
    name: 'Greater Shadow Kill',
    description: 'Turn all enemies to ash as they die.',
    cost: 2
  },
  '6d4aac82-45ec-4bad-b135-4ec67ac8ef67': {
    id: '6d4aac82-45ec-4bad-b135-4ec67ac8ef67',
    parentPowerId: '96558f9c-ee1d-4443-9076-786f42784f09',
    character: null,
    type: 'enhancement',
    name: 'Bloodfly Swarm',
    description: 'Transform enemies killed in combat into bloodflies as they die.',
    cost: 3
  },

  // Shadow walk powers.
  'e336ff67-6676-4ace-89c1-9f6dbc53e265': {
    id: 'e336ff67-6676-4ace-89c1-9f6dbc53e265',
    parentPowerId: null,
    character: 'emily',
    type: 'power',
    name: 'Shadow Walk',
    description: 'Assume a stealthier form for a short time.',
    cost: 4
  },
  'eae318de-9173-4fef-b023-53a4098e366a': {
    id: 'eae318de-9173-4fef-b023-53a4098e366a',
    parentPowerId: 'e336ff67-6676-4ace-89c1-9f6dbc53e265',
    character: 'emily',
    type: 'power',
    name: 'Rat Shadows',
    description: 'Move through rat tunnels in your stealthier form.',
    cost: 1
  },
  '5d4a2356-fe27-469e-9ab4-25c0e3d06e6d': {
    id: '5d4a2356-fe27-469e-9ab4-25c0e3d06e6d',
    parentPowerId: 'e336ff67-6676-4ace-89c1-9f6dbc53e265',
    character: 'emily',
    type: 'power',
    name: 'Improved Shadow Attack',
    description: 'Assassinate or incapacitate up to 2 enemies during Shadow Walk.',
    cost: 2
  },
  '7c2e2dbf-b1a8-4320-aeba-0a717a7602fc': {
    id: '7c2e2dbf-b1a8-4320-aeba-0a717a7602fc',
    parentPowerId: '5d4a2356-fe27-469e-9ab4-25c0e3d06e6d',
    character: 'emily',
    type: 'power',
    name: 'Greater Shadow Attack',
    description: 'Assassinate or incapacitate up to 3 enemies during Shadow Walk.',
    cost: 2
  },
  '1f5a35f4-5c15-43fd-b8fd-9592e4d0942b': {
    id: '1f5a35f4-5c15-43fd-b8fd-9592e4d0942b',
    parentPowerId: 'e336ff67-6676-4ace-89c1-9f6dbc53e265',
    character: 'emily',
    type: 'power',
    name: 'Shadow Run',
    description: 'Move faster while in your stealthier form.',
    cost: 2
  },

  // Strength enhancements.
  '5bed80af-6e29-4b12-a875-f7ad2c1cab8d': {
    id: '5bed80af-6e29-4b12-a875-f7ad2c1cab8d',
    parentPowerId: null,
    character: null,
    type: 'enhancement',
    name: 'Strength',
    description: 'Throw objects farther.',
    cost: 3
  },
  'c2ffd997-e0db-4bb8-b69f-df7ae2add66c': {
    id: 'c2ffd997-e0db-4bb8-b69f-df7ae2add66c',
    parentPowerId: '5bed80af-6e29-4b12-a875-f7ad2c1cab8d',
    character: null,
    type: 'enhancement',
    name: 'Greater Strength',
    description: 'Break down weaker wooden doors with your sword.',
    cost: 2
  },

  // Vitality enhancements.
  '506011a0-3d3f-4388-8c4e-03ac73fbe220': {
    id: '506011a0-3d3f-4388-8c4e-03ac73fbe220',
    parentPowerId: null,
    character: null,
    type: 'enhancement',
    name: 'Vitality',
    description: 'Increase your Health and resilience.',
    cost: 2
  },
  '9ca448f7-8729-436f-bac8-3f5188193821': {
    id: '9ca448f7-8729-436f-bac8-3f5188193821',
    parentPowerId: '506011a0-3d3f-4388-8c4e-03ac73fbe220',
    character: null,
    type: 'enhancement',
    name: 'Greater Vitality',
    description: 'Health regeneration is improved.',
    cost: 2
  }
};
