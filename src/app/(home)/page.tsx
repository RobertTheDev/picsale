import PhotoFilterMenu from './components/PhotoFilterMenu';
import PhotoProductsList from './components/PhotoProductsList';

export default function PhotosPage() {
  return (
    <main className="w-full bg-gray-50">
      <div className="flex flex-1">
        <div className="fixed left-0 h-full w-80 bg-white p-8">
          <PhotoFilterMenu />
        </div>
        <div className="flex w-full flex-1 flex-col pl-80">
          <PhotoProductsList />
        </div>
      </div>
    </main>
  );
}
