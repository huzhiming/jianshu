import * as constants from './constants';

// 单独抽成文件，增加代码可维护性，对自动化测试有利。
export const searchFocus = ()=>({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = ()=>({
  type: constants.SEARCH_BLUR
})