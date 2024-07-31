import { Rarity } from "../../../../../enums/rarity.enum";

export const lootboxes = [
    {
      name: 'Common Lootbox',
      image: 'assets/presale/lootbox/common.png',
      rarity: Rarity.COMMON,
    },
    {
      name: 'Uncommon Lootbox',
      image: 'assets/presale/lootbox/uncommon.png',
      rarity: Rarity.UNCOMMON,
    },
    {
      name: 'Epic Lootbox',
      image: 'assets/presale/lootbox/epic.png',
      rarity: Rarity.EPIC,
    },
    {
      name: 'Legendary Lootbox',
      image: 'assets/presale/lootbox/legendary.png',
      rarity: Rarity.LEGENDARY,
    },
    {
      name: 'Mythic Lootbox',
      image: 'assets/presale/lootbox/mythic.png',
      rarity: Rarity.MYTHIC,
    },
  ];

  export const lootboxItemDropRateByRarity = {
    [Rarity.COMMON]: {
      [Rarity.COMMON]: 7,
      [Rarity.UNCOMMON]: 2,
      [Rarity.EPIC]: 1,
    },
    [Rarity.UNCOMMON]: {
      [Rarity.COMMON]: 5,
      [Rarity.UNCOMMON]: 3,
      [Rarity.EPIC]: 1,
      [Rarity.LEGENDARY]: 1,
    },
    [Rarity.EPIC]: {
      [Rarity.COMMON]: 3,
      [Rarity.UNCOMMON]: 4,
      [Rarity.EPIC]: 2,
      [Rarity.LEGENDARY]: 1,
    },
    [Rarity.LEGENDARY]: {
      [Rarity.COMMON]: 2,
      [Rarity.UNCOMMON]: 3,
      [Rarity.EPIC]: 3,
      [Rarity.LEGENDARY]: 2,
    },
    [Rarity.MYTHIC]: {
      [Rarity.COMMON]: 1,
      [Rarity.UNCOMMON]: 2,
      [Rarity.EPIC]: 3,
      [Rarity.LEGENDARY]: 3,
      [Rarity.MYTHIC]: 1,
    },
  };