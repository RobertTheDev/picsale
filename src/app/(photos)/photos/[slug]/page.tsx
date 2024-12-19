export default function PhotoPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Photo {params.slug}</h1>
    </main>
  );
}
