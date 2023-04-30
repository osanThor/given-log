export default function AdminLoginPage() {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="w-full max-w-[400px] h-max border border-gray-300 rounded-md flex flex-col items-center min-h-full py-6 px-4">
        <h2 className="w-full py-2 mb-4 text-lg font-medium text-center text-gray-600 border-b border-gray-300">
          ADMIN
        </h2>
        <form className="flex flex-col w-full">
          <label className="text-sm text-gray-400">ID</label>
          <input
            className="w-full h-10 px-2 mb-3 text-sm border border-gray-300 rounded-md"
            type="email"
            autoComplete="emailId"
            placeholder="id 입력"
          />
          <label className="text-sm text-gray-400">PW</label>
          <input
            className="w-full h-10 px-2 mb-3 text-sm border border-gray-300 rounded-md "
            type="password"
            autoComplete="password"
            placeholder="비밀번호 입력"
          />
          <button
            type="submit"
            className="h-10 text-white bg-blue-500 rounded-md hover:bg-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
