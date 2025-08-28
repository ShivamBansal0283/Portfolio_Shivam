import {RESUME_FILE } from "../lib/site";
import { FileText} from "lucide-react";

export default function ResumeButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <a href={RESUME_FILE} target="_blank" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-accent">
        <FileText size={16} /> View resume
      </a>
    </div>
  );
}