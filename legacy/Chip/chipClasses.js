import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getChipUtilityClass(slot) {
  return generateUtilityClass('MuiChip', slot);
}
var chipClasses = generateUtilityClasses('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'filledPrimary', 'filledSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'deleteIconFilledColorPrimary', 'deleteIconFilledColorSecondary', 'focusVisible']);
export default chipClasses;