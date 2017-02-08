/* eslint-disable max-len */

export default {
  // Strength enhancements.
  '5bed80af-6e29-4b12-a875-f7ad2c1cab8d': {
    id: '5bed80af-6e29-4b12-a875-f7ad2c1cab8d',
    parentPowerId: null,
    name: 'Strength',
    description: 'Throw objects farther.',
    cost: 3
  },
  'c2ffd997-e0db-4bb8-b69f-df7ae2add66c': {
    id: 'c2ffd997-e0db-4bb8-b69f-df7ae2add66c',
    parentPowerId: '5bed80af-6e29-4b12-a875-f7ad2c1cab8d',
    name: 'Greater Strength',
    description: 'Break down weaker wooden doors with your sword.',
    cost: 2
  },

  // Vitality enhancements.
  '506011a0-3d3f-4388-8c4e-03ac73fbe220': {
    id: '506011a0-3d3f-4388-8c4e-03ac73fbe220',
    parentPowerId: null,
    name: 'Vitality',
    description: 'Increase your Health and resilience.',
    cost: 2
  },
  '9ca448f7-8729-436f-bac8-3f5188193821': {
    id: '9ca448f7-8729-436f-bac8-3f5188193821',
    parentPowerId: '506011a0-3d3f-4388-8c4e-03ac73fbe220',
    name: 'Greater Vitality',
    description: 'Health regeneration is improved.',
    cost: 2
  },

  // Reflexes enhancements.
  'ae1fbcc3-feb7-40cc-9458-66cd3efff80b': {
    id: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    parentPowerId: null,
    name: 'Reflexes',
    description: 'Block to deflect projectiles.',
    cost: 1
  },
  '400c89bd-ab42-4a44-98af-6a622493a0ec': {
    id: '400c89bd-ab42-4a44-98af-6a622493a0ec',
    parentPowerId: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    name: 'Focused Slide',
    description: 'Slow time while sliding if aiming a ranged weapon at an enemy.',
    cost: 2
  },
  '709adf4e-d164-48f7-bfaa-8f75237097b8': {
    id: '709adf4e-d164-48f7-bfaa-8f75237097b8',
    parentPowerId: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    name: 'Superior Deflection',
    description: 'Deflect projectiles towards the nearest enemy.',
    cost: 2
  },
  '0cf39239-72b2-4d24-91a8-26581a27d75f': {
    id: '0cf39239-72b2-4d24-91a8-26581a27d75f',
    parentPowerId: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    name: 'Adept Parry',
    description: 'Window of time for parrying is increased.',
    cost: 1
  },
  '7856c89a-8408-4776-b373-74a197618ead': {
    id: '7856c89a-8408-4776-b373-74a197618ead',
    parentPowerId: 'ae1fbcc3-feb7-40cc-9458-66cd3efff80b',
    name: 'Snap Reaction',
    description: 'Quick reflexes seem to slow time briefly when an enemy spots you.',
    cost: 3
  },

  // Agility enhancements.
  '39334a1e-2883-4722-af71-d3286d94b6e7': {
    id: '39334a1e-2883-4722-af71-d3286d94b6e7',
    parentPowerId: null,
    name: 'Agility',
    description: 'Increase your jump height and distance.',
    cost: 2
  },
  '4499082e-9cdc-4828-8d18-40aea0b2970b': {
    id: '4499082e-9cdc-4828-8d18-40aea0b2970b',
    parentPowerId: '39334a1e-2883-4722-af71-d3286d94b6e7',
    name: 'Rapid Sprint',
    description: 'Sprint faster.',
    cost: 2
  },
  '6229d272-6b03-467a-82ec-00993c642570': {
    id: '6229d272-6b03-467a-82ec-00993c642570',
    parentPowerId: '39334a1e-2883-4722-af71-d3286d94b6e7',
    name: 'Cat Fall',
    description: 'Take less falling damage.',
    cost: 1
  },

  // Blood thirst enhancements.
  '3b2c05e8-5062-45dc-aef0-dc2c9e689f14': {
    id: '3b2c05e8-5062-45dc-aef0-dc2c9e689f14',
    parentPowerId: null,
    name: 'Blood Thirst',
    description: 'Built up Adrenaline in combat then trigger brutal melee fatalities.',
    cost: 2
  },
  'd8ad66c5-6fdf-4e17-b8e7-c14eaf997e23': {
    id: 'd8ad66c5-6fdf-4e17-b8e7-c14eaf997e23',
    parentPowerId: '3b2c05e8-5062-45dc-aef0-dc2c9e689f14',
    name: 'Adrenaline Burst',
    description: 'Replenish Adrenaline automatically while not in combat, up to half maximum.',
    cost: 1
  },
  '8bf34df7-04b8-4a20-84d1-edc6ec72a800': {
    id: '8bf34df7-04b8-4a20-84d1-edc6ec72a800',
    parentPowerId: '3b2c05e8-5062-45dc-aef0-dc2c9e689f14',
    name: 'Greater Blood Thirst',
    description: 'Kill multiple enemies within range.',
    cost: 3
  },

  // Bonecharm crafting enhancements.
  '0dc9ca43-a526-4536-b202-0215e8579807': {
    id: '0dc9ca43-a526-4536-b202-0215e8579807',
    parentPowerId: null,
    name: 'Bonecharm Crafting',
    description: 'Craft your own unique Bonecharms, with some chance of corruption.',
    cost: 1
  },
  '2109302a-7dc1-4356-80e9-43b9d72bc63e': {
    id: '2109302a-7dc1-4356-80e9-43b9d72bc63e',
    parentPowerId: '0dc9ca43-a526-4536-b202-0215e8579807',
    name: 'Witch Crafting',
    description: 'Lower chance of corruption for Bonecharms with 3 or 4 traits.',
    cost: 2
  },
  '6a493c37-f714-4586-9b2e-b5cc43b5b2cc': {
    id: '6a493c37-f714-4586-9b2e-b5cc43b5b2cc',
    parentPowerId: '2109302a-7dc1-4356-80e9-43b9d72bc63e',
    name: 'Master Crafting',
    description: 'No chance of corruption when crafting Bonecharms with 3 Traits.',
    cost: 2
  },
  '1bdc0e0d-b188-4f19-b556-8be7762deee6': {
    id: '1bdc0e0d-b188-4f19-b556-8be7762deee6',
    parentPowerId: '6a493c37-f714-4586-9b2e-b5cc43b5b2cc',
    name: 'Craft Runes',
    description: 'Craft Runes by expending Raw Whalebone, or sacrifice existing Runes to accumulate Raw Whalebone for crafting.',
    cost: 4
  },
  'ed159c65-4b65-4dd5-be35-d9e633d0df62': {
    id: 'ed159c65-4b65-4dd5-be35-d9e633d0df62',
    parentPowerId: '0dc9ca43-a526-4536-b202-0215e8579807',
    name: 'Trait Synergy',
    description: 'Use the same trait up to four times across your crafted Bonecharms.',
    cost: 3
  },

  // Shadow kill enhancements.
  'fb909e60-c319-4133-9716-bc4a15c645a7': {
    id: 'fb909e60-c319-4133-9716-bc4a15c645a7',
    parentPowerId: null,
    name: 'Shadow Kill',
    description: 'Turn unaware enemies to ash as they die.',
    cost: 2
  },
  '96558f9c-ee1d-4443-9076-786f42784f09': {
    id: '96558f9c-ee1d-4443-9076-786f42784f09',
    parentPowerId: 'fb909e60-c319-4133-9716-bc4a15c645a7',
    name: 'Greater Shadow Kill',
    description: 'Turn all enemies to ash as they die.',
    cost: 2
  },
  '6d4aac82-45ec-4bad-b135-4ec67ac8ef67': {
    id: '6d4aac82-45ec-4bad-b135-4ec67ac8ef67',
    parentPowerId: '96558f9c-ee1d-4443-9076-786f42784f09',
    name: 'Bloodfly Swarm',
    description: 'Transform enemies killed in combat into bloodflies as they die.',
    cost: 3
  }
};
