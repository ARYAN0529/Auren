export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-500">
        {/* Hardcoded year: reading the current time during render is blocked here */}
        © 2026 AUREN. All rights reserved.
      </div>
    </footer>
  );
}