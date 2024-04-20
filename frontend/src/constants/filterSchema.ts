export const CRESTS_AND_SPECS = {
  1: ['armswarrior', 'furywarrior', 'protectionwarrior'],
  2: ['holypaladin', 'protectionpaladin', 'retributionpaladin'],
  3: ['beastmasteryhunter', 'marksmanshiphunter', 'survivalhunter'],
  4: ['assassinationrogue', 'outlawrogue', 'subtletyrogue'],
  5: ['disciplinepriest', 'holypriest', 'shadowpriest'],
  6: ['blooddeathknight', 'frostdeathknight', 'unholydeathknight'],
  7: ['elementalshaman', 'enhancementshaman', 'restorationshaman'],
  8: ['arcanemage', 'firemage', 'frostmage'],
  9: ['afflictionwarlock', 'demonologywarlock', 'destructionwarlock'],
  10: ['brewmastermonk', 'windwalkermonk', 'mistweavermonk'],
  11: ['balancedruid', 'feraldruid', 'guardiandruid', 'restorationdruid'],
  12: ['havocdemonhunter', 'vengeancedemonhunter'],
  13: ['devastationevoker', 'preservationevoker', 'augmentationevoker'],
};

export const SEARCH_PARAM_TO_SPEC = {
  'afflictionwarlock': 'affliction',
  'demonologywarlock': 'demonology',
  'destructionwarlock': 'destruction',
  'arcanemage': 'arcane',
  'firemage': 'fire',
  'frostmage': 'frostm',
  'armswarrior': 'arms',
  'furywarrior': 'fury',
  'protectionwarrior': 'protection',
  'assassinationrogue': 'assassination',
  'outlawrogue': 'outlaw',
  'subtletyrogue': 'subtlety',
  'balancedruid': 'balance',
  'feraldruid': 'feral',
  'guardiandruid': 'guardian',
  'restorationdruid': 'restodruid',
  'beastmasteryhunter': 'beastmastery',
  'marksmanshiphunter': 'marksmanship',
  'survivalhunter': 'survival',
  'disciplinepriest': 'discipline',
  'holypriest': 'holypri',
  'shadowpriest': 'shadow',
  'blooddeathknight': 'blood',
  'frostdeathknight': 'frostd',
  'unholydeathknight': 'unholy',
  'elementalshaman': 'elemental',
  'enhancementshaman': 'enhancement',
  'restorationshaman': 'restosham',
  'holypaladin': 'holypala',
  'protectionpaladin': 'protection',
  'retributionpaladin': 'retribution',
  'brewmastermonk': 'brewmaster',
  'windwalkermonk': 'windwalker',
  'mistweavermonk': 'mistweaver',
  'havocdemonhunter': 'havoc',
  'vengeancedemonhunter': 'vengeance',
  'devastationevoker': 'devastation',
  'preservationevoker': 'preservation',
  'augmentationevoker': 'augmentation',
};

export const SEARCH_PARAM_TO_FULL_SPEC = {
  'afflictionwarlock': 'Affliction Warlock',
  'demonologywarlock': 'Demonology Warlock',
  'destructionwarlock': 'Destruction Warlock',
  'arcanemage': 'Arcane Mage',
  'firemage': 'Fire Mage',
  'frostmage': 'Frost Mage',
  'armswarrior': 'Arms Warrior',
  'furywarrior': 'Fury Warrior',
  'protectionwarrior': 'Protection Warrior',
  'assassinationrogue': 'Assassination Rogue',
  'outlawrogue': 'Outlaw Rogue',
  'subtletyrogue': 'Subtlety Rogue',
  'balancedruid': 'Balance Druid',
  'feraldruid': 'Feral Druid',
  'guardiandruid': 'Guardian Druid',
  'restorationdruid': 'Restoration Druid',
  'beastmasteryhunter': 'Beast Mastery Hunter',
  'marksmanshiphunter': 'Marksmanship Hunter',
  'survivalhunter': 'Survival Hunter',
  'disciplinepriest': 'Discipline Priest',
  'holypriest': 'Holy Priest',
  'shadowpriest': 'Shadow Priest',
  'blooddeathknight': 'Blood Death Knight',
  'frostdeathknight': 'Frost Death Knight',
  'unholydeathknight': 'Unholy Death Knight',
  'elementalshaman': 'Elemental Shaman',
  'enhancementshaman': 'Enhancement Shaman',
  'restorationshaman': 'Restoration Shaman',
  'holypaladin': 'Holy Paladin',
  'protectionpaladin': 'Protection Paladin',
  'retributionpaladin': 'Retribution Paladin',
  'brewmastermonk': 'Brewmaster Monk',
  'windwalkermonk': 'Windwalker Monk',
  'mistweavermonk': 'Mistweaver Monk',
  'havocdemonhunter': 'Havoc Demon Hunter',
  'vengeancedemonhunter': 'Vengeance Demon Hunter',
  'devastationevoker': 'Devastation Evoker',
  'preservationevoker': 'Preservation Evoker',
  'augmentationevoker': 'Augmentation Evoker',
};


export const CLASS_AND_SPECS = {
  Warrior: ['Arms', 'Fury', 'Protection'],
  Paladin: ['Holy', 'Protection', 'Retribution'],
  Hunter: ['Beast Mastery', 'Marksmanship', 'Survival'],
  Rogue: ['Assassination', 'Outlaw', 'Subtlety'],
  Priest: ['Discipline', 'Holy', 'Shadow'],
  'Death Knight': ['Blood', 'Frost', 'Unholy'],
  Shaman: ['Elemental', 'Enhancement', 'Restoration'],
  Mage: ['Arcane', 'Fire', 'Frost'],
  Warlock: ['Affliction', 'Demonology', 'Destruction'],
  Monk: ['Brewmaster', 'Windwalker', 'Mistweaver'],
  Druid: ['Balance', 'Feral', 'Guardian', 'Restoration'],
  'Demon Hunter': ['Havoc', 'Vengeance'],
  Evoker: ['Devastation', 'Preservation', 'Augmentation'],
};

export const TANK_SPECS = [
  'Protection Warrior',
  'Protection Paladin',
  'Guardian Druid',
  'Brewmaster Monk',
  'Vengeance Demon Hunter',
];

export const HEAL_SPECS = [
  'Holy Paladin',
  'Restoration Druid',
  'Restoration Shaman',
  'Mistweaver Monk',
  'Holy Priest',
  'Discipline Priest',
  'Preservation Evoker',
];

export const MELEE_SPECS = [
  'Arms Warrior',
  'Fury Warrior',
  'Retribution Paladin',
  'Feral Druid',
  'Windwalker Monk',
  'Havoc Demon Hunter',
  'Assassination Rogue',
  'Outlaw Rogue',
  'Subtlety Rogue',
  'Enhancement Shaman',
  'Unholy Death Knight',
  'Frost Death Knight',
  'Survival Hunter',
];

export const RANGED_SPECS = [
  'Balance Druid',
  'Beast Mastery Hunter',
  'Marksmanship Hunter',
  'Arcane Mage',
  'Fire Mage',
  'Frost Mage',
  'Shadow Priest',
  'Elemental Shaman',
  'Affliction Warlock',
  'Demonology Warlock',
  'Destruction Warlock',
  'Devastation Evoker',
  'Augmentation Evoker',
];

export const DPS_SPECS = [
  ...MELEE_SPECS,
  ...RANGED_SPECS,
];

export const ALL_SPECS = [
  ...TANK_SPECS,
  ...HEAL_SPECS,
  ...MELEE_SPECS,
  ...RANGED_SPECS,
];
