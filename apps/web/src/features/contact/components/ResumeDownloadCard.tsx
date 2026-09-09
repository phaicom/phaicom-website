import MdiDownload from "~icons/mdi/download";
import MdiFileDocumentOutline from "~icons/mdi/file-document-outline";

export default function ResumeDownloadCard() {
  return (
    <aside className="enter-fade-up py-12 sm:py-16 lg:py-20">
      <div className="space-y-5">
        <div className="inline-flex h-12 w-12 items-center justify-center border border-border bg-card text-primary">
          <MdiFileDocumentOutline className="h-6 w-6" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">Resume</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Download a concise PDF version of my experience, selected case studies, and core
            technical strengths.
          </p>
        </div>

        <a
          href="/files/Reawpai_Chunsoi_Senior_Full_Stack_Developer_Resume.pdf"
          download="Reawpai_Chunsoi_Senior_Full_Stack_Developer_Resume.pdf"
          className="group inline-flex w-full items-center justify-center gap-2 bg-foreground px-5 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-primary"
        >
          <MdiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          Download Resume
        </a>
      </div>
    </aside>
  );
}
