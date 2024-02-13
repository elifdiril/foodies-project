export const importImages = (imageName: string) => {
  try {
    return require(`@/public/images/${imageName}`);
  } catch (error) {
    console.error('Error importing image:', error);
    // throw error;
  }
};
