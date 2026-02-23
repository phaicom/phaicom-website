import { blurhashToCssGradientString } from "@unpic/placeholder";
import { Image as UnpicImage, type ImageProps as UnpicImageProps } from "@unpic/react";

type Props = UnpicImageProps & {
  blurhash?: string | null;
};

const DEFAULT_BACKGROUND = "linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%)";

function getPlaceholder(blurhash?: string | null) {
  if (!blurhash) return DEFAULT_BACKGROUND;
  try {
    return blurhashToCssGradientString(blurhash);
  } catch {
    return DEFAULT_BACKGROUND;
  }
}

export function Image({ blurhash, ...props }: Props) {
  return <UnpicImage {...props} background={getPlaceholder(blurhash)} />;
}
