export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Three-dot loader in brand colors, with pulse timing similar to reference */}
      <div className="loader-dots">
        {/* Dot 1 */}
        <span
          className="loader-dot bg-[#1a2c6d]"
          style={{ animationDelay: '0s' }}
        />
        {/* Dot 2 */}
        <span
          className="loader-dot bg-[#f8be4c]"
          style={{ animationDelay: '0.15s' }}
        />
        {/* Dot 3 */}
        <span
          className="loader-dot bg-[#1a2c6d]"
          style={{ animationDelay: '0.3s' }}
        />
      </div>
    </div>
  );
}


