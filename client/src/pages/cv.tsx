export default function CVPage() {
  return (
    <div className="h-screen flex flex-col bg-background">
      
      {/* <div className="flex items-center justify-between px-4 py-3 border-b">
        <h1 className="font-semibold">Resume</h1>
        <a
          href="/muhammad-samar-sadaat.pdf"
          download
          className="text-sm text-primary"
        >
          Download
        </a>
      </div> */}

      <iframe
        src="/muhammad-samar-sadaat.pdf"
        className="flex-1 w-full"
      />
    </div>
  );
}