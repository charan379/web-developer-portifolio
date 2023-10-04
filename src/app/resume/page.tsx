import ResumeT1 from "@/components/ResumeTemplates/ResumeT1";

export default async function ResumePage() {
  return (
    <main className="min-h-[100dvh] w-full mx-auto px-2 bg-slate-100 flex flex-row justify-center items-center overflow-auto">
      <ResumeT1 />
    </main>
  );
}
