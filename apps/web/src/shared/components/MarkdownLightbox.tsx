import type { SlideImage } from "yet-another-react-lightbox";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type MarkdownLightboxProps = {
  open: boolean;
  index: number;
  slides: SlideImage[];
  onClose: () => void;
};

export default function MarkdownLightbox({ open, index, slides, onClose }: MarkdownLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Zoom]}
      zoom={{
        maxZoomPixelRatio: 3,
        pinchZoomV4: true,
        scrollToZoom: true,
      }}
    />
  );
}
