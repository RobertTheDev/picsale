export default function handleDownload(url: string) {
  const link = document.createElement('a');
  link.href = `/photos/${url}`;
  link.download = url.split('/').pop() || 'download';
  link.click();
}
