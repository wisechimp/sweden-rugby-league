type SanityImageDimensions = {
  width: number;
  height: number;
  aspectRatio: number;
};

type SanityImageAsset = {
  url: string;
  metadata: {
    dimensions: SanityImageDimensions;
  };
};

type SanityImage = {
  asset: SanityImageAsset;
};
