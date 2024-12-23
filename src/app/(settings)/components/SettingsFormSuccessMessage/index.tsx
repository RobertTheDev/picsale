export default function SettingsFormSuccessMessage({
  messageText,
}: {
  messageText: string;
}) {
  return (
    <div className="flex h-auto flex-col items-center p-12">
      <p className="text-2xl font-bold">{messageText}</p>
    </div>
  );
}
