import powersAndEnhancementsWithPurchaseFlagsSelector from './powers-and-enhancements-with-purchase-flags';

const powerSelector = (state, powerId) => {
  const powersAndEnhancements = powersAndEnhancementsWithPurchaseFlagsSelector(state);

  return powersAndEnhancements.get(powerId);
};

export default powerSelector;
