import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 8,
  padding: 10,

  // Font sizes
  tiny: 10,
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 20,

  // App dimensions
  width,
  height,

  // Icon sizes
  iconXS: 12,
  iconSM: 16,
  iconMD: 24,
  iconLG: 32,

  // Component sizes
  categoryIconSize: width * 0.12,
  bannerHeight: 140,
  productImageSize: width * 0.45,
  productCardWidth: width * 0.45,

  // Card dimensions
  productCardHeight: width * 0.6,
  productImageHeight: width * 0.4,

  // Border Radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
};

export default SIZES;
