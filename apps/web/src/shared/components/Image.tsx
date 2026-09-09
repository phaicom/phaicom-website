import { Image as UnpicImage, type ImageProps as UnpicImageProps } from "@unpic/react";

type Props = UnpicImageProps;

const DEFAULT_BACKGROUND = "linear-gradient(135deg, #e2e8f0 0%, #f1f5f9 100%)";

export function Image(props: Props) {
  return <UnpicImage {...props} background={DEFAULT_BACKGROUND} />;
}
