import {Dimensions} from 'react-native';

let {height, width}: any = Dimensions.get('window');
let set = width / 40;

// metrics sizes
export const MetricsSizes = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  SET_HEIGHT: set * 6.4,
  SET_RADIUS: set * 2,

  TINY: set / 2,
  SMALL: set,
  REGULAR: set * 1.5,
  MEDIUM: set * 2,
  LARGE: set * 3,
  XLARGE: set * 4,
  XXLARGE: set * 5,
  SET40: set * 40,
  SET50: set * 50,
  SET80: set * 8,
  SET100: set * 10,
  SET200: set * 20,
  SET150: set * 15,
  SET220: set * 22,
  SET250: set * 25,
  SET120: set * 12,
  SET110: set * 11,

  NEG_TINY: -set / 2,
  NEG_SMALL: -set,
  NEG_REGULAR: -set * 1.5,

  WIDTH_SMALL: width / 4,
  WIDTH_MEDIUM: width / 3,
  WIDTH_LARGE: width / 2,
  WIDTH_XLARGE: width / 1.5,
  WIDTH_XXLARGE: width,

  HEIGHT_SMALL: height / 4,
  HEIGHT_MEDIUM: height / 3,
  HEIGHT_LARGE: height / 2,
  HEIGHT_XLARGE: height / 1.5,
  HEIGHT_XXLARGE: height,
};

// font sizes
const {SMALL, REGULAR, LARGE} = MetricsSizes;
export const FontSize = {
  xs: SMALL,
  sm: SMALL * 1.2,
  bs: SMALL * 1.4,
  rg: SMALL * 1.4,
  md: REGULAR * 1.2,
  lg: LARGE * 0.8,
  xl: LARGE,
  xxl: LARGE * 1.2,
};

// layout
export const Layout = {
  alignCenter: {
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  rowJCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
    alignItems: 'center' as 'center',
  },
  justifyCContent: {
    justifyContent: 'center' as 'center',
  },
  row: {
    flexDirection: 'row' as 'row',
  },
  justifySBContent: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
  },
  fill: {
    flex: 1,
  },
  fillB: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  positionA: {position: 'absolute' as 'absolute'},
  positionR: {position: 'relative' as 'relative'},
  rowACenter: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
  },
  rowCCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  columnSFlexStart: {
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between' as 'space-between',
    alignItems: 'flex-start' as 'flex-start',
  },
  column: {
    flexDirection: 'column' as 'column',
  },
  flexAStart: {
    justifyContent: 'flex-start' as 'flex-start',
    alignItems: 'flex-start' as 'flex-start',
  },
  flexAEnd: {
    justifyContent: 'flex-end' as 'flex-end',
    alignItems: 'flex-end' as 'flex-end',
  },
  rowFlexEnd: {
    flexDirection: 'row' as 'row',
    justifyContent: 'flex-end' as 'flex-end',
    alignItems: 'flex-end' as 'flex-end',
  },
  rowFlexStart: {
    flexDirection: 'row' as 'row',
    justifyContent: 'flex-start' as 'flex-start',
    alignItems: 'flex-start' as 'flex-start',
  },
  flexStart: {
    justifyContent: 'flex-start' as 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end' as 'flex-end',
  },
  textCenter: {
    textAlign: 'center' as 'center',
  },
  rowSpaceEvenly: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-evenly' as 'space-evenly',
    alignItems: 'center' as 'center',
  },
  columnCenter: {
    flexDirection: 'column' as 'column',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  wrapB: {
    flexWrap: 'wrap' as 'wrap',
    flexDirection: 'row' as 'row',
    display: 'flex' as 'flex',
    justifyContent: 'space-between' as 'space-between',
  },
};
