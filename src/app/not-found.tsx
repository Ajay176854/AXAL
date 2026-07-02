import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-neutral-50 px-4 pt-20">
      <div className="max-w-md w-full text-center">
        <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Error 404</span>
        <h1 className="font-serif text-5xl font-bold text-neutral-900 mt-2 mb-4">Page Not Found</h1>
        <p className="text-neutral-500 leading-relaxed mb-8">
          The page you are looking for doesn't exist or has been moved. You can return to our homepage or explore our products catalog.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-neutral-950 text-white hover:bg-neutral-800 transition-colors font-medium text-sm rounded shadow-sm uppercase tracking-wider text-xs font-bold"
          >
            Go Back Home
          </Link>
          <Link 
            href="/products" 
            className="px-6 py-3 bg-white text-neutral-950 hover:bg-neutral-100 transition-colors font-medium text-sm rounded border border-neutral-200 uppercase tracking-wider text-xs font-bold"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
