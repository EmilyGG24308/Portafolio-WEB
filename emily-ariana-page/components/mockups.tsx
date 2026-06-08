// Pure CSS recreations of the project splash screens, rendered inside a phone frame.

export function HavitMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {/* multicolor orb */}
      <div
        className="absolute left-1/2 top-[42%] h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-2xl"
        style={{
          background:
            'conic-gradient(from 200deg at 50% 50%, #7c3aed, #f97316, #22c55e, #06b6d4, #ec4899, #7c3aed)',
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center px-8">
        <span className="font-sans text-4xl font-bold tracking-tight text-white">
          Havit
        </span>
      </div>
      {/* buttons */}
      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3 px-8">
        <div className="flex h-10 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
          Log in
        </div>
        <div className="flex h-10 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
          Sign in
        </div>
      </div>
    </div>
  )
}

export function WhereNowMockup() {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center"
      style={{
        background:
          'linear-gradient(135deg, #c9a8e0 0%, #f472b6 50%, #fdba74 100%)',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-24 w-24 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C7.589 2 4 5.589 4 10c0 5.25 7 11.5 7.4 11.85a.9.9 0 0 0 1.2 0C13 21.5 20 15.25 20 10c0-4.411-3.589-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
      </svg>
      <span className="mt-4 font-sans text-2xl font-bold text-white">
        Where Now?
      </span>
    </div>
  )
}

export function BackendMockup() {
  return (
    <div className="relative h-full w-full bg-[#1e1a14] p-5 font-mono text-[10px] leading-relaxed">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#f5d6d0]" />
        <span className="h-2 w-2 rounded-full bg-[#fdba74]" />
        <span className="h-2 w-2 rounded-full bg-[#d6eae0]" />
      </div>
      <pre className="whitespace-pre-wrap text-[#d6eae0]">
        <span className="text-[#8a8580]">{'// schema.prisma'}</span>
        {'\n'}
        <span className="text-[#fbeae5]">model</span>{' '}
        <span className="text-white">User</span> {'{'}
        {'\n  '}id        <span className="text-[#fbeae5]">String</span>{' '}
        @id
        {'\n  '}email     <span className="text-[#fbeae5]">String</span>{' '}
        @unique
        {'\n  '}orders    <span className="text-[#fbeae5]">Order[]</span>
        {'\n}'}
        {'\n\n'}
        <span className="text-[#fbeae5]">model</span>{' '}
        <span className="text-white">Order</span> {'{'}
        {'\n  '}id        <span className="text-[#fbeae5]">String</span>{' '}
        @id
        {'\n  '}total     <span className="text-[#fbeae5]">Decimal</span>
        {'\n  '}userId    <span className="text-[#fbeae5]">String</span>
        {'\n}'}
      </pre>
    </div>
  )
}
