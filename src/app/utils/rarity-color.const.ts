import { Rarity } from '../enums/rarity.enum';

export function getRarityColor(rarity: Rarity): string {
  switch (rarity) {
    default:
    case Rarity.COMMON:
      return '#B0B5B3';
    case Rarity.UNCOMMON:
      return '#3D74B8';
    case Rarity.EPIC:
      return '#9D44B5';
    case Rarity.LEGENDARY:
      return '#FF7F11';
    case Rarity.MYTHIC:
      return '#F34213';
  }
}

export function getRarityFogColor(rarity: Rarity): number {
  switch (rarity) {
    default:
    case Rarity.COMMON:
      return parseInt('ced4d2', 16);
    case Rarity.UNCOMMON:
      return parseInt('4889da', 16);
    case Rarity.EPIC:
      return parseInt('be53db', 16);
    case Rarity.LEGENDARY:
      return parseInt('ff8e2c', 16);
    case Rarity.MYTHIC:
      return parseInt('ff5d30', 16);
  }
}
