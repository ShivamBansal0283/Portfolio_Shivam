import { RESUME_FILE} from "../../lib/site";
import { FileText} from "lucide-react";

export const metadata = { title: "Resume — Shivam Bansal" };

export default function ResumePage() {
  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Resume</h1>
        <div className="flex gap-2">
          <a href={RESUME_FILE} target="_blank" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-accent">
            <FileText size={16} /> Open in new tab
          </a>
        </div>
      </header>

      <div className="rounded-2xl border overflow-hidden">
        <iframe title="Resume preview" src={RESUME_FILE} className="h-[80vh] w-full" />
      </div>
    </div>
  );
}