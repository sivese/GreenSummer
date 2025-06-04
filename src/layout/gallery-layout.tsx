
function GalleryLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {children}
      </div>
    </div>
  );
}

export default GalleryLayout;